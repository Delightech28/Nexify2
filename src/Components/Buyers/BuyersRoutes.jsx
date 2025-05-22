 
// src/ShoeApp/ShoeRoutes.jsx
import { Routes, Route } from "react-router-dom";
import ShoeHomePage from "../../Pages/BuyersHomePage";

const BuyersRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ShoeHomePage />} />
      <Route path="*" element={<h1>404 - No Sub-Routes Matched</h1>} />
      {/* Add more routes later, e.g., for product details */}
      {/* <Route path="/product/:id" element={<ProductDetailPage />} /> */}
    </Routes>
  );
};

export default BuyersRoutes;
