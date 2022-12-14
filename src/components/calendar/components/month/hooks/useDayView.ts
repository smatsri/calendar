import { useEffect, useState } from "react";
import { Day } from "../../../model";
import { CalendarDate, CalendarEvent } from "../../../model/calendar-event";
import { useEventsService } from "../../../hooks/useEventsService";

export const useDayView = (day: Day) => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const service = useEventsService()


  useEffect(() => {
    const init = async () => {
      const date = CalendarDate(day.year, day.month, day.day)
      const evts = await service.get(date)
      setEvents(evts)
    }
    init();
  }, [day]);


  return { events }
}