export interface Course {
  code: string
  name: string
  description: string
}

export interface CourseStack {
  id: string
  name: string
  courses: Course[]
}

export interface ScheduleEntry {
  date: string
  dateEnd?: string
  courseCode: string
  courseName: string
  location: string
}
