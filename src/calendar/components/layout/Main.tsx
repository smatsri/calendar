import { MainDisplay } from "../../model/calendar-context";
import MonthDisplay from "../month/MonthDisplay";
import YearView from "../year/YearView";

type MainProps = {
  display: MainDisplay
}

const Main = ({ display }: MainProps) => {
  
  if (display === "month") {
    return <MonthDisplay  />
  }

  if (display === "year") {
    return <YearView />
  }


  return (<></>);
}

export default Main