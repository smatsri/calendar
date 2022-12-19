import MainSection from "./components/layout/MainSection";
import SideMenu from "./components/layout/SideMenu";
import { Layout } from "./components/layout/styles";
import { useCalendar } from "./hooks/useCalendar";


type CalendarProps = {}
const Calendar = ({ }: CalendarProps) => {
  const { display, sideMenuOpen, toggleSideMenu, show } = useCalendar()
  return (
    <Layout>
      <SideMenu open={sideMenuOpen} show={show} />
      <MainSection
        sideMenuOpen={sideMenuOpen}
        display={display}
        toggleSideMenu={toggleSideMenu} />
    </Layout>
  )
}

export default Calendar;