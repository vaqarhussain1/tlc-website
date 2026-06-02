'use client'

import { useState, FormEvent } from 'react'
import { cn } from '@/lib/utils'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

interface FieldProps {
  id: string
  label: string
  required?: boolean
  children: React.ReactNode
}

function Field({ id, label, required, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-charcoal">
        {label}
        {required && <span className="ml-1 text-blue-600" aria-label="required">*</span>}
      </label>
      {children}
    </div>
  )
}

const inputClass =
  'w-full rounded border border-grey-200 px-4 py-3 text-sm text-charcoal placeholder:text-grey-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-colors'

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('submitting')
    setErrorMsg('')

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID
    if (!formspreeId) {
      // Fallback: open mailto if Formspree isn't configured
      const data = new FormData(e.currentTarget)
      const subject = encodeURIComponent(String(data.get('subject') || 'Enquiry from tlcpak.com'))
      const body = encodeURIComponent(
        `Name: ${data.get('name')}\nOrganisation: ${data.get('organisation')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`
      )
      window.location.href = `mailto:info@tlcpak.com?subject=${subject}&body=${body}`
      setState('idle')
      return
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setState('success')
        ;(e.target as HTMLFormElement).reset()
      } else {
        const json = await res.json().catch(() => ({}))
        setErrorMsg(
          (json as { error?: string }).error ||
            'Something went wrong. Please email us directly at info@tlcpak.com.'
        )
        setState('error')
      }
    } catch {
      setErrorMsg('Unable to send message. Please email us directly at info@tlcpak.com.')
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="rounded border border-grey-200 bg-grey-50 p-8 text-center">
        <div className="text-3xl mb-3" aria-hidden="true">✓</div>
        <h3 className="text-lg font-bold text-charcoal mb-2">Message Sent</h3>
        <p className="text-sm text-grey-400">
          Thank you for your enquiry. We will respond within one business day.
        </p>
        <button
          onClick={() => setState('idle')}
          className="mt-4 text-sm text-blue-600 hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field id="name" label="Full Name" required>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={inputClass}
            placeholder="Your name"
          />
        </Field>
        <Field id="organisation" label="Organisation" required>
          <input
            id="organisation"
            name="organisation"
            type="text"
            autoComplete="organization"
            required
            className={inputClass}
            placeholder="Your organisation"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field id="email" label="Email Address" required>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={inputClass}
            placeholder="you@organisation.com"
          />
        </Field>
        <Field id="subject" label="Subject">
          <input
            id="subject"
            name="subject"
            type="text"
            className={inputClass}
            placeholder="Course enquiry, consulting, other..."
          />
        </Field>
      </div>

      <Field id="message" label="Message" required>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={cn(inputClass, 'resize-none')}
          placeholder="Tell us about your training needs, the courses you are interested in, or how we can help..."
        />
      </Field>

      {state === 'error' && (
        <p className="text-sm text-red-600 rounded border border-red-200 bg-red-50 px-4 py-3" role="alert">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="w-full sm:w-auto sm:self-start inline-flex items-center justify-center rounded bg-blue-600 px-8 py-3 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {state === 'submitting' ? 'Sending…' : 'Send Enquiry'}
      </button>

      <p className="text-xs text-grey-400">
        Fields marked <span className="text-blue-600">*</span> are required.
      </p>
    </form>
  )
}
