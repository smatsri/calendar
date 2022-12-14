import { useEffect, useState } from "react"
import { getShortName } from "../../../helpers/text"
import { Day, getWeeks, Month } from "../../../model"
import { useTexts } from "./useTexts"

export const useMonthView = (year:number, month: number) => {
  const [weeks, setWeeks] = useState<Day[][]>([])
  const [title, setTitle] = useState<string>("")
  const [selected, setSelected] = useState<Day>(() => Day(year, month,4))
  const texts = useTexts();

  useEffect(() => {
    const m = Month(year, month)
    const weeks = getWeeks(m)
    setWeeks(weeks)
  },[year, month])

  useEffect(() => {
    let t = getShortName(texts.months[month], 4)
    let curYear = new Date().getFullYear();
    if(curYear !== year) {
      t += ' ' + year
    }
    setTitle(t)
  }, [year, month, texts])

  return {
    weeks,
    title,
    selected,
    setSelected
  }

}