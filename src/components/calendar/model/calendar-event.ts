export type EventId = string
export type CalendarEvent = {
  id: EventId
  date: CalendarDate
  duration: number
  title: string
}

export const CalendarEvent = (
  id: EventId,
  title: string,
  date: CalendarDate,
  duration: number = 10,
): CalendarEvent => ({
  id, date, duration, title
})

export type CalendarDate = {
  year: number
  month: number
  day: number
}

export const CalendarDate = (
  year = 2000,
  month = 0,
  day = 0): CalendarDate => ({
    year, month, day
  })