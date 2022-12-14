import WeeksView from "./components/WeeksView"
import Title from "./components/Title"

import { useMonthView } from "./hooks/useMonthView"
import { Container, Row } from "../layout/VericalContainer"

type MonthViewProps = {
  year: number
  month: number
}

const MonthView = ({ year, month }: MonthViewProps) => {
  const { weeks, title, selected, setSelected } = useMonthView(year, month);

  return (
    <Container>
      <Row>
        <Title title={title} />
      </Row>
      <Row grow={1}>
        <WeeksView
          weeks={weeks}
          currentMonth={month}
          selected={selected}
          selectDay={setSelected}
        />
      </Row>
    </Container>
  );
}

export default MonthView;