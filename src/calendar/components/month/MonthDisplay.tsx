import { useMonthView } from "./hooks/useMonthView"
import { dayIsEq } from "../../model"
import MonthView from "../shared/month/MonthView";
import { DayContainer } from "./styles";
import DayView from "./DayView";
import { useCalendarContext } from "../../Context";

const MonthDisplay = () => {
  const { selected: [year, month] } = useCalendarContext()
  const { selected, select } = useMonthView(year, month);

  return (
    <MonthView
      key={year + '-' + month}
      month={month}
      year={year}
      DayView={({ day }) => (
        <DayContainer
          key={`${day.year}${day.month}${day.day}`}
          onClick={() => select(day)}
          inactive={month !== day.month}
          selected={selected && dayIsEq(selected, day)}
          dayOfWeek={day.dayOfWeek}
        >
          <DayView day={day} />
        </DayContainer>
      )}
    />
  );
}

export default MonthDisplay;


