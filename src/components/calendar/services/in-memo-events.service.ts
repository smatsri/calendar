import { CalendarEvent, CalendarDate, EventId } from "../model/calendar-event";
import { IEventsService } from "./events.interface";

export type InMemoService = IEventsService & {
  getAll(): CalendarEvent[]
}

export const InMemoService = (initEvents: CalendarEvent[] = []): InMemoService => {

  type EventDic = { [id: EventId]: CalendarEvent }
  type DayDic = { [date: string]: EventDic }

  const dic: DayDic = fromArray(initEvents)


  const get = async (date: CalendarDate) => {
    return Object.values(getEventsByDate(date));
  }

  const save = async (evt: CalendarEvent) => {
    const dayEvents = getEventsByDate(evt.date);
    dayEvents[evt.id] = evt
    saveDayEvents(evt.date, dayEvents)
  }

  const del = async (evt: CalendarEvent) => {
    const dayEvents = getEventsByDate(evt.date);
    delete dayEvents[evt.id]
  }

  const getAll = () => {
    return Object.values(dic)
      .reduce(
        (agg, e) => agg.concat(Object.values(e))
        , [] as CalendarEvent[]
      )
  }

  return {
    get,
    save,
    update: save,
    del,
    getAll
  }

  function fromArray(events: CalendarEvent[]): DayDic {
    let d: DayDic = {}

    for (const e of events) {
      const dateId = getId(e.date)
      let a = d[dateId] || {}
      a[e.id] = e
      d[dateId] = a
    }

    return d;
  }

  function getId(date: CalendarDate): string {
    return `${date.year}${date.month}${date.day}`
  }

  function getEventsByDate(date: CalendarDate): EventDic {
    return dic[getId(date)] || {}
  }

  function saveDayEvents(date: CalendarDate, evnts: EventDic) {
    dic[getId(date)] = evnts
  }
}