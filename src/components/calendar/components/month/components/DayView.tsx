import { useEffect } from "react";
import { useEvent } from "../hooks/useEvent";
import { Day } from "../../../model";
import { DayViewStyle as S } from "./styles";

type DayViewProps = {
  day: Day
}

const DayView = ({ day }: DayViewProps) => {
  const { events } = useEvent(day);
  useEffect(() => {
    if (events.length > 0)
      console.log(events)
  }, [events])
  return (
    <S.DayViewContainer>
      <S.Title>{day.day}</S.Title>
      <S.Events>
        <div>
          {events.map(event => (
            <S.EventContainer key={event.id}>
              {event.title}
            </S.EventContainer>
          ))}
        </div>
      </S.Events>

    </S.DayViewContainer>
  );
}

export default DayView;