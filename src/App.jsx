import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./views/Layout";
import ListView from "./views/listView";
import DetailView from "./views/DetailView";
import CartView from "./views/CartView";
import NotFoundView from "./views/NotFoundView";
import "./App.css";

function App() {
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

  return <RouterProvider router={router} />;
}

export default App;
