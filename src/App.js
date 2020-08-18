import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import SearchForm from "./features/search-form/SearchForm";

export default function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <SearchForm />
    </ThemeProvider>
  );
}
