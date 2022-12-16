import styled, { css } from "styled-components";

type HumburgerProps = {
  opened?: boolean;
  size?: number;
  onClick?: () => void;
}

const Humburger = (props: HumburgerProps) => {
  return (
    <Container {...props}>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
    </Container>
  );
}

export default Humburger;


const Container = styled.div<HumburgerProps>`

  width: ${props => props.size || 30}px;
  height: ${props => props.size || 30}px;
  display: flex;
  flex-direction: column;


  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  > div > div {
    background-color: white;
    border-radius: 10px;
    height: 60%;
    min-height: 8px;
  }

  > div:nth-child(1), 
  > div:nth-child(3) {
    transition: transform 0.5s;
  }

  > div:nth-child(2){
    transform-origin: center center;
    transition: transform 0.5s, opacity 1s;
  }  


  ${({ opened, size }) => opened && css`

    > div:nth-child(1) {
      transform: translate(0, ${(size || 30) / 3}px) rotate(-45deg);
    }

    > div:nth-child(3) {
      transform: translate(0px, -${(size || 30) / 3}px) rotate(45deg);

    }

    > div:nth-child(2) {
      transform:scalex(0.8);
      opacity: 0;
    }

  `}
`