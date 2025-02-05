import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Global.styled";

import Layout from "./views/Layout";
import ListView from "./views/listView";
import DetailView from "./views/DetailView";
import CartView from "./views/CartView";
import NotFoundView from "./views/NotFoundView";

function App() {
  const theme = {
    colors: {
      white: "#fff",
      black: "#000",
    },
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<ListView />} />
        <Route path="/detail" element={<DetailView />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="*" element={<NotFoundView />} />
      </Route>
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
