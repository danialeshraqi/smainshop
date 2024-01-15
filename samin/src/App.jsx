import { Navigate, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import DetailsPages from "./pages/DetailsPages";
import CheckoutPage from "./pages/CheckoutPage";
import PageNotFound from "./pages/404";

import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/Products" replace />} />
        <Route path="/Products" element={<ProductsPage />} />
        <Route path="/Products/:id" element={<DetailsPages />} />
        <Route path="/Checkout" element={<CheckoutPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
}
export default App;
