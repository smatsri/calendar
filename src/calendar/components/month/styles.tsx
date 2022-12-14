import styled, { css } from "styled-components";

const getDayBorderColor = ({ selected, theme: { weeks: colors } }: P) => {
  if (selected) {
    return css`border-color: ${colors.selected};`
  }

  return css`
  &:hover {
    border-color: ${colors.hover};
  }
`
}

export const DayContainer = styled.div<DayContainerProps>`
  padding: 5px;
  overflow: hidden;
  height: calc(100% - 10px);
  display: flex;
  flex-direction: column;

  >div {
    flex: 1;
    border: 1px solid transparent;
    border-radius: 0.4rem;
    ${getDayBorderColor};
    box-sizing:border-box;
  }
`

export const TitleContainer = styled.div`
  font-size:1.2rem;
`

export type DayContainerProps = {
  inactive?: boolean
  selected?: boolean
  dayOfWeek: number
}

export const DayViewContainer = styled.div`
display: flex;
flex-direction: column;
`


export const EventContainer = styled.div`
flex: 1;
height: 100%;
margin: 2px 4px;
color: white;
text-align: right;
box-sizing: content-box;
display: flex;
::before{
  content: "";
  display: block;
  width: 0.3rem;
  background-color: blue;
  margin-left:0.5rem;
  border-radius: 0.5rem;
}

`
export const EventTitle = styled.div``

export const EventsContainer = styled.div`
position: relative;
flex: 1;
overflow: hidden;
> div {
  position: absolute;
  width: 100%;
  top:0;
}
`
export const Events = ({ children }: { children: any }) => (
  <EventsContainer>
    <div>
      {children}
    </div>
  </EventsContainer>
);