import { useState } from "react"

export const useCalendar = (defMonthDisplay = DefMonthDisplay) => {
  const [display, setDisplay] = useState<MainDisplay>(defMonthDisplay)

  return {
    display,
    setMonthView(year: number, month: number) {
      setDisplay(MonthDisplay(year, month))
    }
  }
}


type MonthDisplay = {
  type: 'month'
  year: number
  month: number
}

const MonthDisplay = (year: number, month: number): MonthDisplay => ({ type: 'month', year, month })

export type MainDisplay = MonthDisplay

const DefMonthDisplay = MonthDisplay(2000, 0)