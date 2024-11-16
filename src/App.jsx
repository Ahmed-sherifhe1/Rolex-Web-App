import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Components/Main Components/Home";
import Products from "./Components/Main Components/Products";
import { lazy, useEffect, useState } from "react";
const Cart = lazy(() => import("./Components/Main Components/Cart"));
// import Cart from "./Components/Main Components/Cart";
import ProductView from "./Components/Products Page/ProductView";
import { useSelector } from "react-redux";
import Checkout from "./Components/Cart Page/Checkout";
import ReceiptPage from "./Components/Cart Page/ReceiptPage";
import NotFound from "./Components/Main Components/NotFound";
import { AnimatePresence } from "framer-motion";
// import Scroll from "./Components/Main Components/layout/Inner/Scroll";
const Scroll = lazy(() =>
  import("./Components/Main Components/layout/Inner/Scroll")
);
import SupportCenter from "./Components/Main Components/SupportCenter";
import ConverterTo404 from "./Components/Main Components/ConverterTo404";
import About from "./Components/Main Components/Aboutus";
import CopyRights from "./Components/Main Components/CopyRights";

function App() {
  let isDarkMode = useSelector((state) => state.theme.isDarkMode);
  let locator = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Scroll />
      <Cart
        x={true}
        sideBar={`fixed  -right-full transition-all duration-700 z-[100] w-[30rem] endTablentMinMax:w-80 endPhone:w-full p-4 h-[100dvh] flex flex-col justify-center items-center top-0  ${
          isDarkMode
            ? "bg-dark-theme-body-color-dark"
            : "bg-light-theme-body-color"
        }`}
        container={
          "flex flex-col justify-evenly scrollbar-track-dark-theme-first-color-dark scrollbar-thumb-dark-theme-first-color-dark gap-8 my-4 "
        }
      />
      <AnimatePresence mode="wait">
        <Routes location={locator} key={locator.pathname}>
          <Route
            path="/"
            element={
              <HomePage windowWidth={windowWidth} windowHeight={windowHeight} />
            }
          />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productID" element={<ProductView />} />
          <Route path="/cart/checkout" element={<Checkout />} />
          <Route path="/cart/checkout/receiptpage" element={<ReceiptPage />} />
          <Route path="/support_senter" element={<SupportCenter />} />
          <Route
            path="/about_us"
            element={<About windowHeight={windowHeight} />}
          />
          <Route path="*" element={<ConverterTo404 />} />
          <Route path="/error_404_rolex" element={<NotFound />} />
          <Route path="/copyrights" element={<CopyRights />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
