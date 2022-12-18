import MonthDisplay from "../month/MonthDisplay";
import MonthView from "../shared/month/MonthView";
import { useYearView } from "./hooks/useYeayView";
import { YearViewContainer } from "./styles";

type YearViewProps = {
  year: number
}

const YearView = ({ year }: YearViewProps) => {
  const { months } = useYearView(year);

  return (
    <YearViewContainer>
      {months.map(month => (
        <MonthView
          key={month}
          year={year}
          month={month}
          DayView={({ day }) => (
            <div>
             {day.day}
            </div>
          )}
        />
      ))}
    </YearViewContainer>
  );
}

export default YearView;