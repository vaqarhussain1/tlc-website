interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  organisation: string
  course?: string
}

export function TestimonialCard({
  quote,
  name,
  title,
  organisation,
  course,
}: TestimonialCardProps) {
  return (
    <figure className="flex flex-col rounded border border-grey-200 bg-white p-7">
      {/* Quote mark */}
      <span className="text-4xl font-serif text-blue-600 leading-none mb-3" aria-hidden="true">
        &ldquo;
      </span>

      {/* Quote */}
      <blockquote className="flex-1">
        <p className="text-sm text-grey-400 leading-relaxed italic">{quote}</p>
      </blockquote>

      {/* Attribution */}
      <figcaption className="mt-5 border-t border-grey-200 pt-4">
        <p className="text-sm font-semibold text-charcoal">{name}</p>
        <p className="text-xs text-grey-400 mt-0.5">
          {title}, {organisation}
        </p>
        {course && (
          <p className="text-xs text-blue-600 mt-1 font-medium">{course}</p>
        )}
      </figcaption>
    </figure>
  )
}
