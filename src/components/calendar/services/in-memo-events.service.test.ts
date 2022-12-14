
import { describe, expect, it } from "vitest";
import { CalendarDate, CalendarEvent } from "../model/calendar-event";
import { InMemoService } from "./in-memo-events.service";

const testEvents: CalendarEvent[] = [
  CalendarEvent("1", "title 1", CalendarDate(2000)),
  CalendarEvent("2", "title 2", CalendarDate(2001)),
  CalendarEvent("3", "title 3", CalendarDate(2002)),
  CalendarEvent("4", "title 4", CalendarDate(2003)),
]

describe("InMemoService", () => {
  it("getAll should work", () => {
    const service = InMemoService(testEvents);
    const all = service.getAll();

    expect(all.length).toBe(testEvents.length)
  });

})
