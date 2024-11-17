import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { lazy, useEffect } from "react";
import { useSelector } from "react-redux";
import CartProduct from "../Cart Page/CartProduct";
// const CartProduct = lazy(() => import("../Cart Page/CartProduct"));
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import catCartLight from "../../assets/cat-cart-light.webp";
import catCartDark from "../../assets/cat-cart-dark.webp";
// let catCartLight = lazy(() => import("../../assets/cat-cart-light.webp"));
// let catCartDark = lazy(() => import("../../assets/cat-cart-dark.webp"));
export default function Cart({ sideBar, x, container }) {
  const isDarkMode = Boolean(useSelector((state) => state.theme.isDarkMode));
  let cartProducts = useSelector((state) => state.cart);
  let Navigate = useNavigate();

  let totalPrice = cartProducts.reduce((initialVal, product) => {
    initialVal += +product.price.slice(1) * product.quantity;
    return initialVal;
  }, 0);
  if (isDarkMode) {
    document.body.classList.remove("bg-light-theme-body-color");
    document.body.classList.add("bg-dark-theme-body-color-dark");
  } else {
    document.body.classList.remove("bg-dark-theme-body-color-dark");
    document.body.classList.add("transition-all");
    document.body.classList.add("duration-700");
    document.body.classList.add("bg-light-theme-body-color");
  }
  useEffect(() => {
    if (
      isDarkMode &&
      document.querySelector(".cart") &&
      document.querySelector(".dark-btn")
    ) {
      document
        .querySelector(".cart")
        .classList.add("fill-dark-theme-title-color-dark");
      document
        .querySelector(".dark-btn")
        .classList.add("fill-dark-theme-title-color-dark");
    } else if (
      document.querySelector(".cart") &&
      document.querySelector(".dark-btn")
    ) {
      document
        .querySelector(".cart")
        .classList.remove("fill-dark-theme-title-color-dark");
      document
        .querySelector(".dark-btn")
        .classList.remove("fill-dark-theme-title-color-dark");
    }
  });
  let cartIsHere = useSelector((state) => state.cartIsHere);
  return (
    <>
      {cartIsHere && (
        <>
          <main
            id="cart"
            className={` z-[100] ${sideBar && sideBar}  ${
              isDarkMode
                ? "text-dark-theme-title-color-dark shadow-dark"
                : "text-light-theme-title-color shadow-light"
            }`}
          >
            <div className="h-[100dvh] container flex justify-center  flex-col">
              <AnimatePresence>
                {cartProducts.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    exit={{ opacity: 0 }}
                    className="w-full"
                  >
                    {x && (
                      <div
                        className=" x-container-cart "
                        onClick={() => {
                          document
                            .querySelector("#cart")
                            .classList.add("-right-full");
                          document
                            .querySelector("#cart")
                            .classList.remove("right-0");
                        }}
                      >
                        <FontAwesomeIcon icon={faX} className="text-xl" />
                      </div>
                    )}
                    <h2 className="title-cart ">My Cart</h2>
                    <div
                      className={` container-cart bigLap:w-full overflow-hidden ${
                        isDarkMode ? "dark-scroll" : "light-scroll"
                      } ${container && container} ${
                        cartProducts.length > 2 && "overflow-y-scroll"
                      }`}
                    >
                      {cartProducts.map((e) => (
                        <CartProduct key={e.id} data={e} />
                      ))}
                    </div>
                    <div className=" flex justify-between py-4">
                      <h3>{cartProducts.length} items</h3>
                      <h3>${totalPrice.toFixed(2)}</h3>
                    </div>
                    <Link
                      to={`/cart/checkout`}
                      className="flex items-center justify-center"
                    >
                      <motion.button
                        aria-label="Complete Your Purchase Button"
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`p-4 font-bold text-light-theme-title-color rounded-lg transition-all my-4 ${
                          isDarkMode
                            ? "bg-dark-theme-first-color-dark hover:bg-light-theme-first-color"
                            : "bg-light-theme-first-color hover:bg-dark-theme-first-color-dark"
                        }`}
                        onClick={() => {
                          document
                            .querySelector("#cart")
                            .classList.add("-right-full");
                          document
                            .querySelector("#cart")
                            .classList.remove("right-0");
                        }}
                      >
                        Complete Your Purchase
                      </motion.button>
                    </Link>
                  </motion.div>
                )}
                {cartProducts.length === 0 && (
                  <motion.div
                    key="empty-cart"
                    initial={{ opacity: 0, position: "absolute" }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    exit={{ opacity: 0 }}
                    className="container flex flex-col items-center gap-8"
                  >
                    <div className="flex items-center justify-center w1/2">
                      {isDarkMode ? (
                        <img
                          loading="lazy"
                          decoding="async"
                          width={384}
                          height={384}
                          src={catCartDark}
                          alt="cat on cart - DarkMode"
                        />
                      ) : (
                        <img
                          loading="lazy"
                          decoding="async"
                          width={384}
                          height={384}
                          src={catCartLight}
                          alt="cat on cart - LightMode"
                        />
                      )}
                    </div>

                    <p className="text-center">
                      Hey, poor person who doesn’t have money to buy these
                      watches.{" "}
                      <span
                        className={`font-medium ${
                          isDarkMode
                            ? "text-dark-theme-first-color-dark"
                            : "text-[#8A4200]"
                        }`}
                      >
                        Just kidding!
                      </span>{" "}
                      Your cart is empty, so go buy watches and make us rich.
                    </p>

                    <motion.button
                      aria-label="Go to Products Page Button"
                      onClick={() => {
                        Navigate("/products");
                        setTimeout(() => {
                          document
                            .querySelector("#cart")
                            .classList.add("-right-full");
                          document
                            .querySelector("#cart")
                            .classList.remove("right-0");
                          localStorage.removeItem("delayEveryThing");
                        });
                      }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-4 font-bold border-2 rounded-xl ${
                        isDarkMode
                          ? "text-dark-theme-first-color-dark border-dark-theme-first-color-dark"
                          : "text-[#8A4200] border-[#8A4200]"
                      }`}
                    >
                      Go to Products Page
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </main>
        </>
      )}
    </>
  );
}
