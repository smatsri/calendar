import { MainDisplay } from "../../hooks/useCalendar";
import { Row } from "../shared/VericalContainer";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { CalendarContainer } from "./styles";

type MainProps = {
  display: MainDisplay
  sideMenuOpen?: boolean
  toggleSideMenu: () => void
}

const MainSection = ({ display, sideMenuOpen, toggleSideMenu }: MainProps) => {
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