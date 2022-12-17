import MonthDisplay from "../month/MonthView";
import { useYearView } from "./hooks/useYeayView";
import { YearViewContainer } from "./styles";

type YearViewProps = {
  year: number
}

const YearView = ({ year }: YearViewProps) => {
  const { months } = useYearView(year);

  return (
    <YearViewContainer>
      {months.map(month =>(
        <MonthDisplay year={year} month={month} />
      ))}
    </YearViewContainer>
  );
}

export default YearView;