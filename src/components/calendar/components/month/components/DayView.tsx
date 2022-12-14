import { useEffect } from "react";
import { useEvent } from "../hooks/useEvent";
import { Day } from "../../../model";
import { DayViewStyle } from "./styles";
const { DayViewContainer, EventContainer, Events, Title } = DayViewStyle

type DayViewProps = {
  day: Day
}

const DayView = ({ day }: DayViewProps) => {
  const { events } = useEvent(day);
  return (
    <DayViewContainer>
      <Title>{day.day}</Title>
      <Events>
        <div>
          {events.map(event => (
            <EventContainer key={event.id}>
              {event.title}
            </EventContainer>
          ))}
        </div>
      </Events>

    </DayViewContainer>
  );
}

export default DayView;