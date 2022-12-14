import { CalendarEvent, CalendarDate } from "../model/calendar-event";

export interface IEventsService {
  get(date:CalendarDate): Promise<CalendarEvent[]>
  save(evt: CalendarEvent): Promise<void>
  update(evt: CalendarEvent): Promise<void>
  del(evt: CalendarEvent): Promise<void>
}
