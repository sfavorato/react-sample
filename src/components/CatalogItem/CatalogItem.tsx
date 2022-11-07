import React, { useContext } from "react";
import { MediaContext } from "../../contexts";
import { VideoState } from "../../types";

import { StyledElement } from "./styles";
import { Props } from "./types";

export const CatalogItem: React.FC<Props> = ({ data }) => {
  const [, setMedia] = useContext(MediaContext);

  const handleItemClick = () => {
    setMedia({ state: VideoState.MAXIMIZED, data });
  };

  return <StyledElement data={data} onClick={() => handleItemClick()}></StyledElement>;
};
