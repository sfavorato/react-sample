import React from "react";
import { ThemeProvider } from "styled-components";

import { Header, VideoPlayer } from "./components";
import { MediaContextProvider } from "./contexts";
import { Catalog } from "./pages";
import { customTheme, GlobalStyle } from "./styles";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <GlobalStyle />
      <Header></Header>
      <MediaContextProvider>
        <section>
          <Catalog></Catalog>
        </section>
        <VideoPlayer></VideoPlayer>
      </MediaContextProvider>
    </ThemeProvider>
  );
};

export default App;
