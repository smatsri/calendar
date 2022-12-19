import { useState } from "react"

export const useCalendar = (defDisplay = YearDisplay(2000)) => {
  const [display, setDisplay] = useState<MainDisplay>(defDisplay)
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  return {
    display,
    sideMenuOpen,
    show(display: "year" | "month") {
      if (display === "year") {
        setDisplay(YearDisplay(2000))
      } else if (display === "month") {
        setDisplay(MonthDisplay(2000, 0))
      }
      setSideMenuOpen(false)
    },
    toggleSideMenu() {
      setSideMenuOpen(!sideMenuOpen)
    }
  }
}

type MonthDisplay = {
  type: 'month'
  year: number
  month: number
}
const MonthDisplay = (year: number, month: number): MonthDisplay => ({
  type: 'month',
  year,
  month
})

type YearDisplay = {
  type: 'year'
  year: number
}

export const YearDisplay = (year = 2000): YearDisplay => ({
  type: 'year',
  year
})

export type MainDisplay = YearDisplay | MonthDisplay 
