import { useYearView } from "./hooks/useYeayView";
import { YearViewContainer } from "./styles";

type YearViewProps = {}

const YearView = ({ }: YearViewProps) => {
  const { years } = useYearView();

  return (
    <YearViewContainer>
      
    </YearViewContainer>
  );
}

export default YearView;