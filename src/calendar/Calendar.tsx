import { ThemeProvider } from "styled-components";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import { CalendarContainer } from "./components/layout/styles";
import { theme } from "./components/shared/Theme";
import { Row } from "./components/shared/VericalContainer";
import { useCalendar } from "./hooks/useCalendar";


type CalendarProps = {}
const Calendar = ({ }: CalendarProps) => {
  const { display } = useCalendar()
  return (
    <ThemeProvider theme={theme}>
      <CalendarContainer sideMenuOpen={false}>
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