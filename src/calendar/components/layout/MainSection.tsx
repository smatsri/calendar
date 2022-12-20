import { useCalendarContext } from "../../Context";
import { MainDisplay } from "../../model/calendar-context";
import { Row } from "../shared/VericalContainer";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { CalendarContainer } from "./styles";

type MainProps = {}

const MainSection = ({ }: MainProps) => {
  const { sideMenuOpen, toggleSideMenu, display } = useCalendarContext();
  const onClick = () => sideMenuOpen && toggleSideMenu();
  return (
    <CalendarContainer
      sideMenuOpen={sideMenuOpen}
      onClick={onClick}>
      <Row>
        <Header
          sideMenuOpen={sideMenuOpen}
          toggleSideMenu={toggleSideMenu} />
      </Row>
      <Row grow={1}>
        <Main display={display} />
      </Row>
      <Row>
        <Footer />
      </Row>
    </CalendarContainer>
  )
}

export default MainSection