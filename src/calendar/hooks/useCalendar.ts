import { useState } from "react"

export const useCalendar = (defDisplay = MonthDisplay(2000,0)) => {
  const [display, setDisplay] = useState<MainDisplay>(defDisplay)
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  return {
    display,
    sideMenuOpen,
    setMonthView(year: number, month: number) {
      setDisplay(MonthDisplay(year, month))
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

const DefMonthDisplay = MonthDisplay(2000, 0)