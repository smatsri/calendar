import {  useState } from "react"
import { Day} from "../../../model"

export const useMonthView = (year: number, month: number) => {
  const [selected, setSelected] = useState<Day>(() => Day(year, month, 4))
  return {

    selected,
    select: setSelected
  }

}