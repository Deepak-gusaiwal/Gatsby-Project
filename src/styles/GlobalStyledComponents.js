import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  padding: 0.8rem 8rem;
  margin-bottom: 12rem;
  position: relative;
  overflow-x: hidden;
  overflow-y: visible;
  @media (max-width: 768px) {
    padding: 0.8rem 2rem;
  }
  @media (max-width: 425px) {
    padding: 0.8rem 1rem;
  }
  ${({noMb})=>noMb && css`
  margin-bottom: 0;
  `}
`;
export const Circle = styled.div`
opacity:0.4;
width: ${({w})=>w};
height: ${({w})=>w};
border-radius: 100%;
background-color: ${({theme})=>theme.color.white};
box-shadow: 1px 1px 10px ${({theme})=>theme.color.text};
position: absolute;
top: ${({top})=>top};
left:${({left})=>left};
bottom: ${({bottom})=>bottom};
right:${({right})=>right};
z-index: -1;
display: flex;
justify-content:center;
align-items: center;
${({incircle})=>incircle && css`
&::before{
  content: "";
  position: absolute;
  width: 50%;
  height: 50%;
  background-color: ${({theme})=>theme.color.background};
  box-shadow:inset 1px 1px 10px ${({theme})=>theme.color.text};
  border-radius: 100%;
}
@media (max-width: 425px) {
    opacity: 0.1;
  }
`}
`

export const Button = styled.button`
  border: none;
  padding: 1rem 1.2rem;
  border-radius: 2rem;
  font-size: 0.8rem;
  cursor: pointer;

  ${({ primary }) =>
    primary &&
    css`
      color: ${({ theme }) => theme.color.white};
      background-color: ${({ theme }) => theme.color.primaryColor};
    `}
  ${({ secondary }) =>
    secondary &&
    css`
      color: ${({ theme }) => theme.color.primaryColor};
      background-color: ${({ theme }) => theme.color.white};
    `}

  ${({ large }) =>
    large &&
    css`
      padding: 1.2rem 1.5rem;
      font-size: 1rem;
    `}

    &:hover{
      opacity:0.8;
    }

  @media (max-width: 768px) {
    padding: 0.8rem 1rem;
    font-size: 1rem;
    ${({ isLarge }) =>
      isLarge &&
      css`
        padding: 0.8rem 1rem;
        font-size: 1rem;
      `}
  }
`;
export const TwoColFlex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 60vh;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
  @media (max-width: 425px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 0.8rem;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${({contain})=> contain && css`
  object-fit: contain;
  `}
`;

export const HeadingSmall = styled.h3`
  font-size: 1.2rem;
  @media (max-width: 425px) {
    font-size: 1rem;
  }
`;
export const HeadingLarge = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  @media (max-width: 425px) {
    font-size: 3rem;
  }
`;
export const HeadingMedium = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  @media (max-width: 425px) {
    font-size: 2rem;
  }
`;
export const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.4;

  ${({small})=> small && css`
  font-size: 1rem;
  `}

  @media (max-width: 425px) {
    font-size: 1rem;
  }
`;
export const CommonHeader = styled.div`
  max-width: 50vw;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  
  @media (max-width: 425px) {
    max-width: 80vh;
    gap: 2rem;
  }
`;

export const FourColGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-flow: repeat(1fr);
  gap: 2rem;
  margin-top: 2rem;
`;
