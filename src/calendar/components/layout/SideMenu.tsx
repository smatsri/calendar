import { SideMenuContainer } from "./styles";

type SideMenuProps = {
  open?: boolean,
  show(display: "year" | "month"): void
}

const SideMenu = ({ open, show }: SideMenuProps) => {
  return (
    <SideMenuContainer sideMenuOpen={open}>
      <div onClick={() => show('month')}>חודש</div>
      <div onClick={() => show('year')}>שנה</div>
    </SideMenuContainer>
  );
}

export default SideMenu;