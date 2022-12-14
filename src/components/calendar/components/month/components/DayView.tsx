import { useDayView } from "../hooks/useDayView";
import { Day } from "../../../model";
import { DayViewContainer, EventContainer, Events, EventTitle } from "./styles";

type DayViewProps = {
  day: Day
}

const DayView = ({ day }: DayViewProps) => {
  const { events } = useDayView(day);
  return (
    <DayViewContainer>
      <EventTitle>{day.day}</EventTitle>
      <Events>
        {events.map(event => (
          <EventContainer key={event.id}>
            {event.title}
          </EventContainer>
        ))}
      </Events>
    </DayViewContainer>
  );
}

export default DayView;