import React from "react";

import { StyledContainer } from "./styles";

type Props = {
  children: React.ReactNode;
};

export const GridContainer: React.FC<Props> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
