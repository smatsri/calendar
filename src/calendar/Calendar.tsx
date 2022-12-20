import MainSection from "./components/layout/MainSection";
import SideMenu from "./components/layout/SideMenu";
import { Layout } from "./components/layout/styles";
import { CalendarProvider } from "./Context";

type CalendarProps = {}
const Calendar = ({ }: CalendarProps) => {
  return (
    <CalendarProvider>
      <Layout>
        <SideMenu />
        <MainSection />
      </Layout>
    </CalendarProvider>
  )
}

export default Calendar;