import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ThemeProvider} from "styled-components";
import { Normalize } from "styled-normalize";
import {GlobalStyles} from './GlobalStyles.css.js'
import {theme} from './Theme.js'

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Normalize />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
