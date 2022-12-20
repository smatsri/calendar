import styled, { css, ThemeProvider } from "styled-components";
import { theme } from "../theme";
import { containerCss } from "../shared/VericalContainer";

const MENU_WIDTH = 90;

type CalendarContainerProps = {
  sideMenuOpen?: boolean
}
export const CalendarContainer = styled.div<CalendarContainerProps>`
  ${containerCss};
  text-align: center;
  position: relative;
  right: ${props => props.sideMenuOpen ? MENU_WIDTH + "vw" : "0"};
  transition: right 0.8s;
`

export const HeaderContainer = styled.div`
  height: ${({ theme }) => theme.footer.height}px;
  display: flex;
  align-items: center;
  margin-right: 5px;
`

export const FooterContainer = styled.div`
  height: ${(a) => a.theme.footer.height}px; 
`

export const SideMenuContainer = styled.div<CalendarContainerProps>`
  position: absolute;
  height: 100%;
  overflow: hidden;

  right:-100vw;
  ${(props) => props.sideMenuOpen && css`
    right : 0;
    width: ${MENU_WIDTH}vw;
  `}


`

type LayoutContainerProps = {}
const LayoutContainer = styled.div<LayoutContainerProps>`
  height: 100%;
`

export const Layout = ({ children }: any) => (
  <ThemeProvider theme={theme}>
    <LayoutContainer>
      {children}
    </LayoutContainer>
  </ThemeProvider>
)