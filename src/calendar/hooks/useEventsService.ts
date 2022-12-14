import { CalendarDate, CalendarEvent } from "../model/calendar-event";
import { IEventsService } from "../services/events.interface";
import { InMemoService } from "../services/in-memo-events.service";


const initEvents = [
  CalendarEvent("1", "אירוע 1", CalendarDate(2000, 0, 1)),
  CalendarEvent("2", "אירוע 2", CalendarDate(2000, 0, 1)),
  CalendarEvent("3", "אירוע 3", CalendarDate(2000, 0, 1)),
  CalendarEvent("4", "אירוע 4", CalendarDate(2000, 0, 1)),
]

const service = InMemoService(initEvents)

export const useEventsService = (): IEventsService => service
