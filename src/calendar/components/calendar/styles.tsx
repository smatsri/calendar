import styled from "styled-components";
import { Container } from "./styles/VericalContainer";

export const CalendarContainer = styled(Container)`
  text-align: center;
  position: relative;
  right: 10px;
`

export const HeaderContainer = styled.div`
  height: ${({theme}) => theme.footer.height}px;
`

export const FooterContainer = styled.div`
  height: ${(a) =>a.theme.footer.height}px; 
`