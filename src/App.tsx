import { Root } from "postcss";
import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import data from "../data.json";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Main from "./components/Main/Main";
import Movies from "./components/Movies/Movies";
import styled, { ThemeProvider } from "styled-components";
import Series from "./components/Series/Series";
import Roots from "./components/Root/Root";
import GlobalStyles from "./components/styles/Global";

function App() {
  const [theme, setTheme] = useState({
    red: "#FC4747",
    black: "#10141E",
    gray: "#5A698F",
    semiDark: "#161D2F",
    white: "#ffffff",
  });

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Roots data={data} />}>
          <Route index element={<Main data={data} />} />
          <Route path="series" element={<Series data={data} />} />
          <Route path="movies" element={<Movies data={data} />} />
          <Route path="bookmarks" element={<Bookmarks data={data} />} />
        </Route>
      </>
    )
  );
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
