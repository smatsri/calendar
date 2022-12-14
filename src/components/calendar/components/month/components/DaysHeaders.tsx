import { useEffect, useState } from "react";
import { Day } from "../../../model";
import { useTexts } from "../hooks/useTexts";
import { StyledDayHeader } from "./styles";

type DaysHeadersProps = {
  days: Day[]
}

const DaysHeaders = ({ days }: DaysHeadersProps) => {
  const [titles, setTitles] = useState<string[]>([])
  const texts = useTexts()

  useEffect(() => {
    const t = days.map(day => texts.days[day.dayOfWeek]);
    setTitles(t)
  }, [])

  return (
    <>
      {titles.map(title => (
        <StyledDayHeader key={title}>{title}</StyledDayHeader>)
      )}
    </>
  );
}

export default DaysHeaders;