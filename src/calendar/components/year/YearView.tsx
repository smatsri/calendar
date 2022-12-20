import { useCalendarContext } from "../../Context";
import MonthView from "../shared/month/MonthView";
import { useYearView } from "./hooks/useYeayView";
import { DayViewContainer, HeaderContainer, MonthsContrainer, YearViewContainer } from "./styles";

const YearView = () => {
  const { selected: [year], show, setSelected } = useCalendarContext();
  const { months } = useYearView(year);

  const select = (month: number) => {
    setSelected([year, month])
    show('month')
  }

  console.log(year)

  return (
    <YearViewContainer>
      <HeaderContainer>
        {year}
      </HeaderContainer>
      <MonthsContrainer>
        {months.map(month => (
          <div onClick={() => select(month)}>
            <MonthView
              key={year + '-' + month}
              year={year}
              month={month}
              DayView={({ day }) => (
                <DayViewContainer key={day.day + '-' + day.month + '-' + day.year}>
                  {day.day}
                </DayViewContainer>
              )}
            />
          </div>
        ))}
      </MonthsContrainer>
    </YearViewContainer>
  );
}

export default YearView;