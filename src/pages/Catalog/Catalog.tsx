import React, { useState } from "react";

import { CatalogItem } from "../../components";
import { useFetch } from "../../hooks/useFetch";
import { GridContainer } from "../../layouts";
import { MediaData } from "../../types";
import { StyledDiv, StyledInput } from "./styles";

const DATA_URL = `../../mock/data.json`;

export const Catalog: React.FC = () => {
  const [filter, setFilter] = useState("");
  const { data: allItems } = useFetch<MediaData[]>(DATA_URL);

  const items = allItems?.filter(item => !filter || item.name.toLowerCase().includes(filter));

  const setSearchText = (text: string) => {
    setFilter(text.toLowerCase());
  };

  return (
    <>
      <StyledDiv>
        <StyledInput
          type="text"
          onChange={event => setSearchText(event.target.value)}
          placeholder="Search"
        ></StyledInput>
      </StyledDiv>
      <GridContainer>
        {items?.map(d => (
          <CatalogItem key={d.id} data={d} />
        ))}
      </GridContainer>
    </>
  );
};
