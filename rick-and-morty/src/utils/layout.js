import React from "react";
import { CSSReset, ThemeProvider, Box, DarkMode } from "@chakra-ui/core";
import theme from "./theme";
import Navbar from "../components/layout/Navbar";
import Head from "next/head";
import Footer from "../components/layout/Footer";

const Layout = ({ children, title }) => (
  <ThemeProvider theme={theme}>
    <DarkMode>
      <CSSReset />
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Rick ve Morty, React, Next, Chakra UI, Apollo ve GraphQL ile oluşturulmuştur."
        />
      </Head>

      <Box position="relative">
        <Navbar />
        <Box minHeight="100vh">{children}</Box>
        <Footer />
      </Box>
    </DarkMode>
  </ThemeProvider>
);

export default Layout;
