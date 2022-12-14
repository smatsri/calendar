import { useCalendar } from "./hooks/useCalendar";
import Main from "./components/calendar/Main";
import Header from "./components/calendar/Header";
import Footer from "./components/calendar/Footer";
import {  Row } from "./components/calendar/styles/VericalContainer";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/calendar/styles/Theme";
import { CalendarContainer } from "./components/calendar/styles";

type CalendarProps = {}
const Calendar = ({ }: CalendarProps) => {
  const { display } = useCalendar()
  return (
    <ThemeProvider theme={theme}>
      <CalendarContainer>
        <Row>
          <Header />
        </Row>
        <Row grow={1}>
          <Main display={display} />
        </Row>
        <Row>
          <Footer />
        </Row>
      </CalendarContainer>
    </ThemeProvider>
  )
}

export default Calendar;