import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${props => props.theme.colors.cyberGrape};
  color: ${props => props.theme.colors.aliceBlue};
  height: 100%;
  font-size: 1.4rem;
  font-weight: bold;
  div {
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
