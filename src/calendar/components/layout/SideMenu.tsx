import { useCalendarContext } from "../../Context";
import { SideMenuContainer } from "./styles";

type SideMenuProps = {
}

const SideMenu = ({ }: SideMenuProps) => {
  const { show, sideMenuOpen } = useCalendarContext();

  return (
    <SideMenuContainer sideMenuOpen={sideMenuOpen}>
      <div onClick={() => show('month')}>חודש</div>
      <div onClick={() => show('year')}>שנה</div>
    </SideMenuContainer>
  );
}

export default SideMenu;