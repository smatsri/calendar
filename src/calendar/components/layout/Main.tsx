import { MainDisplay } from "../../hooks/useCalendar";
import MonthDisplay from "../month/MonthDisplay";
import YearView from "../year/YearView";

type MainProps = {
  display: MainDisplay
}

const Main = ({ display }: MainProps) => {
  
  if (display.type === "month") {
    return <MonthDisplay month={display.month} year={display.year} />
  }

  if (display.type === "year") {
    return <YearView year={display.year} />
  }


  return (<></>);
}

export default Main