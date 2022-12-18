import { useMonthView } from "./hooks/useMonthView"
import { dayIsEq } from "../../model"
import MonthView from "../shared/month/MonthView";
import { DayContainer } from "./styles";
import DayView from "./DayView";


const MonthDisplay = ({ year, month }: MonthViewProps) => {
  const { selected, select } = useMonthView(year, month);

  return (
    <MonthView
      month={month}
      year={year}
      DayView={({day}) => (
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

type MonthViewProps = {
  year: number
  month: number
}
