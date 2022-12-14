import { describe, expect, it } from "vitest";
import { getNumDays, Month, splitByWeeks, Year, getWeeks, dayIsEq, toDay, Day } from ".";

describe("year", () => {

  it("should have 365 days on non leap years", () => {
    const numDaysInYear = 365;

    for (let i = 2000; i < 2100; i++) {
      const year = Year(i);
      if (year.isLeapYear) continue;

      const numDays = getNumDays(year)
      expect(numDays).toBe(numDaysInYear)
    }
  })

  it("should have 366 days on leap years", () => {
    const numDaysInYear = 366;

    for (let i = 2000; i < 2100; i++) {
      const year = Year(i);
      if (!year.isLeapYear) continue;

      const numDays = getNumDays(year)
      expect(numDays).toBe(numDaysInYear)
    }
  })

})

describe('splitByWeeks', () => {
  it('should same total days as month', () => {
    const month = Month(2000, 1);
    const weeks = splitByWeeks(month.days)
    const totalDays = weeks.reduce((total, w) => total + w.length, 0)

    expect(totalDays).toEqual(month.days.length)
  })
})

describe('getWeeks', () => {
  it('all weeks should represent every day of week', () => {
    const month = Month(2000, 1);
    const weeks = getWeeks(month)
    for (const week of weeks) {
      for (let i = 0; i < week.length; i++) {
        const day = week[i];
        expect(day.dayOfWeek).to.equal(i)
      }
    }
  })

  it('should be between 4 and 6 weeks', () => {
    for (let i = 0; i < 10; i++) {
      const month = Month(2000, i);
      const weeks = getWeeks(month)
      const numWeeks = weeks.length
      expect(numWeeks).toBeGreaterThanOrEqual(4)
      expect(numWeeks).toBeLessThanOrEqual(6)
    }
  })
})

describe('dayIsEq', () => {
  it('should work', () => {
    const d1 = toDay(new Date(2016, 1, 1))
    const d2 = toDay(new Date(2016, 1, 1))
    const d3 = toDay(new Date(2000, 1, 1))
    expect(dayIsEq(d1, d2)).toBeTruthy()
    expect(dayIsEq(d1, d3)).toBeFalsy()
    expect(dayIsEq(d2, d3)).toBeFalsy()
  })
})

describe('Day constructor', () => {
  it('should work', () => {
    const year = 2000
    const month = 0
    const day = 1
    const d1 = Day(year, month, day)

    expect(d1.day).to.equal(day)
    expect(d1.month).to.equal(month)
    expect(d1.year).to.equal(year)
  })
})