import { useEffect, useState } from "react"
import { Container, Row } from "../shared/VericalContainer"
import { Day, Week } from "../../model"
import { StyledDayHeader, WeekRow, WeeksContainer, WeeksViewContainer, HeadersContainer, TitleContainer } from "./MonthView.style"
import { useTexts } from "../../hooks/useTexts"
import { useMonthView } from "./hooks/useMonthView"

export const MonthView = ({ year, month, DayView }: MonthViewProps) => {
  const { weeks, title, selected, setSelected } = useMonthView(year, month);

  return (
    <Container>
      <Row>
        <Title title={title} />
      </Row>
      <Row grow={1}>
        <WeeksView
          DayView={DayView}
          weeks={weeks}
          currentMonth={month}
          selected={selected}
          selectDay={setSelected}
        />
      </Row>
    </Container>
  );
}

const Title = ({ title }: TitleProps) => {
  return (
    <TitleContainer>
      {title}
    </TitleContainer>
  );
}

const WeeksView = ({ weeks, DayView }: WeeksViewProps) => {
  if (weeks.length === 0) return (<></>)

  return (
    <WeeksViewContainer>
      <HeadersContainer>
        <DaysHeaders days={weeks[0]} />
      </HeadersContainer>
      <WeeksContainer grow={1}>
        {weeks.map((w) => {
          return (
            <WeekRow grow={1} key={weekKey(w)} >
              {w.map((day, i) => (
                <DayView day={day} />
              )
              )}
            </WeekRow>
          )
        })}
      </WeeksContainer>
    </WeeksViewContainer>
  )
}
const weekKey = (w: Day[]) => `${w[0].year}-${w[0].month}-${w[0].day}`

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

export default MonthView;

type MonthViewProps = {
  year: number
  month: number
  DayView: ({day}: {day:Day}) => JSX.Element
}

type TitleProps = {
  title: string
}

type WeeksViewProps = {
  DayView: ({day}:{day:Day}) => JSX.Element
  weeks: Week[]
  currentMonth: number
  selected?: Day
  selectDay: (day: Day) => void
}

type DaysHeadersProps = {
  days: Day[]
}
