import styled, { css, DefaultTheme } from "styled-components";
import { ContainerAndRow, Row, containerCss } from "../shared/VericalContainer";

export const Flex = styled.div`
  display: flex;
  > div {
    flex:1;
  }
`
export const WeeksContainer = styled(ContainerAndRow)`
`
export const WeekRow = styled(Row)`
  display: flex;
  
  > div {
    flex:1;
  }

  border-top: 1px solid ${({ theme }) => theme.weeks.inactive};

`
export const HeadersContainer = styled(Row)`
  display: flex;
  > div {
    flex:1;
  }

  > div:nth-child(6) {
    color: ${({ theme }) => theme.weeks.fri}
  }

  > div:nth-child(7) {
    color: ${({ theme }) => theme.weeks.sat}
  }
  
`
export const WeeksViewContainer = styled.div`
${containerCss}
font-size: 0.8rem;
padding: 0 1rem;
`

export const StyledDayHeader = styled.div``

type P = DayContainerProps & { theme: DefaultTheme }
const getDayColor = ({ inactive, dayOfWeek, theme: { weeks } }: P) => {

  if (dayOfWeek === 5 && inactive) {
    return weeks.inactiveFri
  }

  if (dayOfWeek === 5) {
    return weeks.fri
  }

  if (dayOfWeek === 6 && inactive) {
    return weeks.inactiveSat
  }

  if (dayOfWeek === 6) {
    return weeks.sat
  }

  if (inactive) {
    return weeks.inactive
  }
}

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
  margin:5px;
  border: 1px solid transparent;
  padding: 1px;
  border-radius: 0.4rem;
  color: ${getDayColor};
  ${getDayBorderColor};
  overflow: hidden;

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
height:100%;
`

export const DayHeaderBreakPoint = 0

