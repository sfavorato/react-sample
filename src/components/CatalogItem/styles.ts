import styled from "styled-components";

import { Props } from "./types";

export const StyledElement = styled.div`
  background-image: url(${(props: Props) => props.data.previewURL});
  background-size: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  border: 5px double rgba(0, 0, 0, 0.6);
  cursor: pointer;
  height: 270px;
  width: 200px;
  transition: all 300ms ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;
