import { createContext, useContext } from "react";
import { useCalendar } from "./hooks/useCalendar";

export type CalendarContext = ReturnType<typeof useCalendar>
const CalendarContext = createContext<CalendarContext>({} as any)

type CalendarProviderProps = {
  children: any
}
export const CalendarProvider = ({ children }: CalendarProviderProps) => {
  const value = useCalendar();
  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  )

}


export const useCalendarContext = () => useContext(CalendarContext)