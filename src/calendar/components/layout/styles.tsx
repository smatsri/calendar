import styled from "styled-components";
import { Container, containerCss } from "../shared/VericalContainer";


type CalendarContainerProps = {
  sideMenuOpen?: boolean
}
export const CalendarContainer = styled.div<CalendarContainerProps>`
  ${containerCss};
  text-align: center;
  position: relative;
  right: ${ props => props.sideMenuOpen ? "90vw" : "0" };
  transition: right 0.8s;
`

export const HeaderContainer = styled.div`
  height: ${({ theme }) => theme.footer.height}px;
`

export const FooterContainer = styled.div`
  height: ${(a) => a.theme.footer.height}px; 
`