import * as React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import HomePage from "./components/HomePage";
import StringPage from "./components/StringPage";
import ObjectPage from "./components/ObjectPage";
import RedditPage from "./components/RedditPage";

import "./styles.css";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router>
        <HomePage path="/" />
        <StringPage path="/string" />
        <ObjectPage path="/object" />
        <RedditPage path="/reddit" />
      </Router>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
