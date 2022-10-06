import React from "react";
import { GlobalStyles } from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import Hero from "./components/Hero/Hero";
import Benefits from "./components/Benefits/Benefits";

function homePage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="container">
          <Hero />
          <Benefits />
        </div>
      </ThemeProvider>
    </>
  );
}

export default homePage;
