import { Day, dayIsEq, Week } from "../../../model";
import DaysHeaders from "./DaysHeaders";
import DayView from "./DayView";
import { DayContainer, HeadersContainer, WeekRow, WeeksContainer, WeeksViewContainer } from "./styles";

const WeeksView = ({ weeks, currentMonth, selected, selectDay }: WeeksViewProps) => {
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
                <DayContainer
                  key={i}
                  onClick={() => selectDay(day)}
                  inactive={currentMonth !== day.month}
                  selected={selected && dayIsEq(selected, day)}
                  dayOfWeek={day.dayOfWeek}
                >
                  <DayView day={day} />
                </DayContainer>
              )
              )}
            </WeekRow>
          )
        })}
      </WeeksContainer>
    </WeeksViewContainer>
  )
}

export default WeeksView

type WeeksViewProps = {
  weeks: Week[]
  currentMonth: number
  selected?: Day
  selectDay: (day: Day) => void
}

const weekKey = (w: Day[]) => `${w[0].year}-${w[0].month}-${w[0].day}`
