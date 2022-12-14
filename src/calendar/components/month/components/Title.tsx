import styled from "styled-components";
import { TitleContainer } from "./styles";

type TitleProps = {
  title: string
}



const Title = ({ title }: TitleProps) => {
  return (
    <TitleContainer>
      {title}
    </TitleContainer>
  );
}

export default Title;