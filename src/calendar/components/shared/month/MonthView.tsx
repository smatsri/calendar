import { useEffect, useRef, useState } from "react"
import { Container, Row } from "../VericalContainer"
import { Day, Week } from "../../../model"
import { StyledDayHeader, WeekRow, WeeksContainer, WeeksViewContainer, HeadersContainer, TitleContainer } from "./MonthView.style"
import { useTexts } from "../../../hooks/useTexts"
import { useMonthView } from "./useMonthView"
import { useTheme } from "styled-components"

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
      <Header days={weeks[0]} />

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



const Header = ({ days }: DaysHeadersProps) => {
  const [titles, setTitles] = useState<string[]>([])
  const elRef = useRef<HTMLDivElement>();
  const texts = useTexts()
  const theme = useTheme();

  useEffect(() => {
    const t = days.map(day => texts.days[day.dayOfWeek]);
    setTitles(t)
  }, [])

  useEffect(() => {

    updateTitles();
    
    window.addEventListener('resize',updateTitles);

    return () => {
      window.removeEventListener('resize',updateTitles);
    }
    

    function updateTitles() {
      if (!elRef.current) {
        return
      }
  
      const width = elRef.current.offsetWidth;

      const dayTexts = getDayTexts(width)
  
      const _titles = days.map(day => dayTexts[day.dayOfWeek]);
      setTitles(_titles)
  
    }

    function getDayTexts(width: number) {
      return width > theme.years.bp ? texts.days : texts.daysShort;
    }

  }, [elRef,theme]);
  return (
    <div ref={elRef as any}>
      <HeadersContainer >
        {titles.map(title => (
          <StyledDayHeader key={title}>{title}</StyledDayHeader>)
        )}
      </HeadersContainer>
    </div>
  );
}

export default MonthView;

type MonthViewProps = {
  year: number
  month: number
  DayView: ({ day }: { day: Day }) => JSX.Element
}

type TitleProps = {
  title: string
}

type WeeksViewProps = {
  DayView: ({ day }: { day: Day }) => JSX.Element
  weeks: Week[]
  currentMonth: number
  selected?: Day
  selectDay: (day: Day) => void
}

type DaysHeadersProps = {
  days: Day[]
}
