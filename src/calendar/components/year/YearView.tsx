import { useCalendarContext } from "../../Context";
import MonthView from "../shared/month/MonthView";
import { useYearView } from "./hooks/useYeayView";
import { YearViewContainer } from "./styles";

const YearView = () => {
  const {selected:[year]} = useCalendarContext();
  const { months } = useYearView(year);

  return (
    <YearViewContainer>
      {months.map(month => (
        <MonthView
          key={year + '-' + month}
          year={year}
          month={month}
          DayView={({ day }) => (
            <div key={day.day + '-' + day.month + '-' + day.year}>
              {day.day}
            </div>
          )}
        />
      ))}
    </YearViewContainer>
  );
}

export default YearView;