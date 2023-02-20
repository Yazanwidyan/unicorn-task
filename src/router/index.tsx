import { Route, Routes as BaseRoutes } from "react-router-dom";
import NavBar from "../components/Navbar";
import Home from "../containers/Home";
import Shop from "../containers/Shop";
import ProductDetails from "../containers/ProductDetails";
import Footer from "../components/Footer";

export const Router = () => {
  return (
    <>
      <NavBar />
      <BaseRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductDetails />} />
      </BaseRoutes>
      <Footer />
    </>
  );
};
