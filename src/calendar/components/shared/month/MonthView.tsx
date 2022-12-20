import { useEffect, useRef, useState } from "react"
import { Container, Row } from "../VericalContainer"
import { Day } from "../../../model"
import { StyledDayHeader, WeekRow, WeeksContainer, WeeksViewContainer, HeadersContainer, TitleContainer, DayContainer } from "./MonthView.style"
import { useTexts } from "../../../hooks/useTexts"
import { useMonthView } from "./useMonthView"
import { useTheme } from "styled-components"

export const MonthView = ({ year, month, DayView }: MonthViewProps) => {
  const { weeks, title } = useMonthView(year, month);

  return (
    <Container>
      <Row>
        <TitleContainer>
          {title}
        </TitleContainer>
      </Row>
      <Row grow={1}>
        <WeeksViewContainer>
          {weeks.length > 0 && <WeeksHeader days={weeks[0]} />}
          <WeeksContainer grow={1}>
            {weeks.map((w) => {
              return (
                <WeekRow grow={1} key={weekKey(w)} >
                  {w.map((day, i) => (
                    <DayContainer key={i} dayOfWeek={day.dayOfWeek}>
                      <DayView day={day} />
                    </DayContainer>
                  )
                  )}
                </WeekRow>
              )
            })}
          </WeeksContainer>
        </WeeksViewContainer>
      </Row>
    </Container>
  );
}

const weekKey = (w: Day[]) => `${w[0].year}-${w[0].month}-${w[0].day}`

const WeeksHeader = ({ days }: DaysHeadersProps) => {
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

    window.addEventListener('resize', updateTitles);

    return () => {
      window.removeEventListener('resize', updateTitles);
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

  }, [elRef, theme]);
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

type DaysHeadersProps = {
  days: Day[]
}
