import styled from "styled-components";

export const YearViewContainer = styled.div`
  height:100%;
  
`

export const HeaderContainer = styled.div`
  display: flex;
  > div:nth-child(2) {
    flex: 1;
  }
`

export const MonthsContrainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  > div {
    cursor: pointer;
  }
`

export const DayViewContainer = styled.div`
`