import { MainDisplay } from "../../hooks/useCalendar";
import MonthView from "../month/MonthView";

type MainProps = {
  display: MainDisplay
}

const Main = ({ display }: MainProps) => {
  if (display.type === "month") {
    return <MonthView month={display.month} year={display.year} />
  }

  return (
    <div>Calendar</div>
  );
}

export default Main