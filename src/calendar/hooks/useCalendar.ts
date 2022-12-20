import { useState } from "react"
import { MainDisplay, SelectedDate } from "../model/calendar-context";

export const useCalendar = (defDisplay: MainDisplay = "month", defYeay = 2000, defMonth = 0) => {
  const [display, setDisplay] = useState<MainDisplay>(defDisplay)
  const [selected, setSelected] = useState<SelectedDate>([defYeay, defMonth])
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  return {
    display,
    selected,
    sideMenuOpen,
    setSelected,
    show(display: "year" | "month") {
      setDisplay(display)
      setSideMenuOpen(false)
    },
    toggleSideMenu() {
      setSideMenuOpen(!sideMenuOpen)
    }
  }
}