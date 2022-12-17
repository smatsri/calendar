import styled from "styled-components";

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

export const TitleContainer = styled.div`
  font-size:1.2rem;
`