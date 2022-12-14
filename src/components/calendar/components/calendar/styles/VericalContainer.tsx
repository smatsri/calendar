import styled, { css } from "styled-components";

export const containerCss = css`
display:flex;
flex-direction: column;
height: 100%;
`

export const rowCss = css<{ grow?: number }>`
  ${({ grow }) => grow && css`
    flex-grow: ${grow};
  `}
`


export const Container = styled.div`
${containerCss}
`
export const Row = styled.div<{ grow?: number }>`
  ${rowCss}
`

export const ContainerAndRow = styled.div<{ grow?: number }>`
    ${rowCss}
    ${containerCss}
`