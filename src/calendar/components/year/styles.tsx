import styled from "styled-components";

export const YearViewContainer = styled.div`
  height:100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  > div {
    cursor: pointer;
  }
`