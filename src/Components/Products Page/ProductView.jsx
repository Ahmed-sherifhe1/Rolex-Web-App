import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SecSubs from "../Home Page/SectionSubscribe";
import { addToCartProductView } from "../../RTK/slices/cart-slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Inner from "../Main Components/layout/Inner/Inner";

import ConverterTo404 from "../Main Components/ConverterTo404";
function ProductView() {
  let { productID } = useParams();
  let product = useSelector((state) => state.products);
  let isDarkMode = useSelector((state) => state.theme.isDarkMode);
  let myCart = useSelector((state) => state.cart);
  let productView = [...product].filter((e) => e.id == productID)[0];
  let Navigate = useNavigate();
  let [mytext, setText] = useState(false);
  const [count, setCount] = useState(1);
  let dispatch = useDispatch();
  // Start dark mode functions to control body and icons on the nav bar
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
      document.querySelector(".dark-btn") &&
      document.querySelector(".menu")
    ) {
      document
        .querySelector(".cart")
        .classList.add("fill-dark-theme-title-color-dark");
      document
        .querySelector(".dark-btn")
        .classList.add("fill-dark-theme-title-color-dark");
      document
        .querySelector(".menu")
        .classList.add("fill-dark-theme-title-color-dark");
    } else if (
      document.querySelector(".cart") &&
      document.querySelector(".dark-btn") &&
      document.querySelector(".menu")
    ) {
      document
        .querySelector(".cart")
        .classList.remove("fill-dark-theme-title-color-dark");
      document
        .querySelector(".dark-btn")
        .classList.remove("fill-dark-theme-title-color-dark");
      document
        .querySelector(".menu")
        .classList.remove("fill-dark-theme-title-color-dark");
    }
    localStorage.setItem("colorNavItem", "products");
  });
  // End dark mode functions to control body and icons on the nav bar

  return (
    <>
      {productView != undefined ? (
        <>
          <Inner extraCheese={true} refresh={true} id="productView">
            <div className="container container-productView ">
              <div
                onClick={() => {
                  Navigate("/products");
                }}
                className={`arrow-back text-4xl cursor-pointer ${
                  isDarkMode
                    ? "text-dark-theme-first-color-dark"
                    : "text-light-theme-first-color"
                }`}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </div>
              <div className="content-page ">
                <div className="gallery ">
                  <div className="small-images ">
                    <img
                      width="80px"
                      height={"80px"}
                      onClick={() => {
                        document.querySelector(".base").src = productView.img;
                        document
                          .querySelectorAll(".small-images img")
                          .forEach((e) => {
                            isDarkMode
                              ? e.classList.remove("active-dark-galley")
                              : e.classList.remove("active-light-galley");
                            if (
                              e ==
                              document.querySelectorAll(".small-images img")[0]
                            ) {
                              isDarkMode
                                ? document
                                    .querySelectorAll(".small-images img")[0]
                                    .classList.add("active-dark-galley")
                                : document
                                    .querySelectorAll(".small-images img")[0]
                                    .classList.add("active-light-galley");
                            }
                          });
                      }}
                      className={`border-transparent
                    ${
                      isDarkMode
                        ? "active-dark-galley hover:border-dark-theme-first-color-dark"
                        : "active-light-galley hover:border-light-theme-first-color"
                    }
                  `}
                      src={productView.img}
                      alt={`${productView.title}-1`}
                    />
                    <img
                      width="80px"
                      height={"80px"}
                      onClick={() => {
                        document.querySelector(".base").src =
                          productView["imgsmall"][1];
                        document
                          .querySelectorAll(".small-images img")
                          .forEach((e) => {
                            isDarkMode
                              ? e.classList.remove("active-dark-galley")
                              : e.classList.remove("active-light-galley");
                            if (
                              e ==
                              document.querySelectorAll(".small-images img")[1]
                            ) {
                              isDarkMode
                                ? document
                                    .querySelectorAll(".small-images img")[1]
                                    .classList.add("active-dark-galley")
                                : document
                                    .querySelectorAll(".small-images img")[1]
                                    .classList.add("active-light-galley");
                            }
                          });
                      }}
                      className={`border-transparent ${
                        isDarkMode
                          ? "hover:border-dark-theme-first-color-dark"
                          : "hover:border-light-theme-first-color"
                      }`}
                      src={productView["imgsmall"][1]}
                      alt={`${productView.title}-2`}
                    />
                    <img
                      width="80px"
                      onClick={() => {
                        document.querySelector(".base").src =
                          productView["imgsmall"][2];
                        document
                          .querySelectorAll(".small-images img")
                          .forEach((e) => {
                            isDarkMode
                              ? e.classList.remove("active-dark-galley")
                              : e.classList.remove("active-light-galley");
                            if (
                              e ==
                              document.querySelectorAll(".small-images img")[2]
                            ) {
                              isDarkMode
                                ? document
                                    .querySelectorAll(".small-images img")[2]
                                    .classList.add("active-dark-galley")
                                : document
                                    .querySelectorAll(".small-images img")[2]
                                    .classList.add("active-light-galley");
                            }
                          });
                      }}
                      height={"80px"}
                      className={`border-transparent ${
                        isDarkMode
                          ? "hover:border-dark-theme-first-color-dark"
                          : "hover:border-light-theme-first-color"
                      }`}
                      src={productView["imgsmall"][2]}
                      alt={`${productView.title}-3`}
                    />
                    <img
                      width="80px"
                      height={"80px"}
                      onClick={() => {
                        document.querySelector(".base").src =
                          productView["imgsmall"][3];
                        document
                          .querySelectorAll(".small-images img")
                          .forEach((e) => {
                            isDarkMode
                              ? e.classList.remove("active-dark-galley")
                              : e.classList.remove("active-light-galley");
                            if (
                              e ==
                              document.querySelectorAll(".small-images img")[3]
                            ) {
                              isDarkMode
                                ? document
                                    .querySelectorAll(".small-images img")[3]
                                    .classList.add("active-dark-galley")
                                : document
                                    .querySelectorAll(".small-images img")[3]
                                    .classList.add("active-light-galley");
                            }
                          });
                      }}
                      className={`border-transparent ${
                        isDarkMode
                          ? "hover:border-dark-theme-first-color-dark"
                          : "hover:border-light-theme-first-color"
                      }`}
                      src={productView["imgsmall"][3]}
                      alt={`${productView.title}-4`}
                    />
                  </div>
                  <div className="container-base">
                    <img
                      width={"auto"}
                      height={400}
                      className={`base  ${
                        isDarkMode
                          ? "text-dark-theme-first-color-dark"
                          : "text-transparent"
                      }`}
                      src={productView.img}
                      alt={`${productView.title}-main`}
                    />
                  </div>
                </div>
                <div className="content w-1/2 flex flex-col gap-8 items-start endTablentMinMax:gap-4 endPhone:w-full">
                  <div className="details flex flex-col gap-4 text-dark-theme-title-color-dark endTablentMinMax:gap-2">
                    <div
                      className={`name p-4 text-light-theme-title-color flex flex-col gap-2 endTablentMinMax:p-2 endTablentMinMax:gap-1 endPhone:gap-1 ${
                        isDarkMode
                          ? "bg-dark-theme-first-color-dark"
                          : "bg-light-theme-first-color"
                      }`}
                    >
                      <h2 className="text-4xl font-bold endTablentMinMax:text-2xl endPhone:text-xl">
                        Product Title
                      </h2>
                      <hr
                        className={`w-80 endTablentMinMax:w-60 h-[0.125rem] border-0 bg-light-theme-title-color endPhone:w-52`}
                      ></hr>
                      <h3 className="title font-medium text-2xl endTablentMinMax:text-base">
                        {productView.title}
                      </h3>
                    </div>
                    <div className="description flex flex-col gap-1">
                      <h2
                        className={`text-4xl font-bold endTablentMinMax:text-2xl endPhone:text-xl ${
                          isDarkMode ? "" : "text-light-theme-title-color"
                        }`}
                      >
                        Product Description
                      </h2>
                      <hr
                        className={`w-80 endTablentMinMax:w-60 h-[0.125rem] border-0 endPhone:w-52 ${
                          isDarkMode
                            ? "bg-dark-theme-first-color-dark"
                            : "bg-light-theme-first-color"
                        }`}
                      ></hr>
                      {mytext ? (
                        <p
                          className={`endTablentMinMax:text-xs endPhone:text-xs ${
                            isDarkMode
                              ? "text-dark-theme-text-color-dark"
                              : "text-light-theme-text-color"
                          }`}
                        >
                          {productView.des.slice(0)}
                          <br></br>
                          <span
                            onClick={() => {
                              setText(false);
                            }}
                            className={`underline cursor-pointer ${
                              isDarkMode
                                ? "text-dark-theme-first-color-dark"
                                : "text-light-theme-first-color"
                            }`}
                          >
                            -Read Less
                          </span>
                        </p>
                      ) : (
                        <p
                          className={`endTablentMinMax:text-xs endPhone:text-xs ${
                            isDarkMode
                              ? "text-dark-theme-text-color-dark"
                              : "text-light-theme-text-color"
                          }`}
                        >
                          {productView.des.slice(0, 200)}

                          <span
                            onClick={() => {
                              setText(true);
                            }}
                            className={`underline cursor-pointer ${
                              isDarkMode
                                ? "text-dark-theme-first-color-dark"
                                : "text-light-theme-first-color"
                            }`}
                          >
                            ...Read More
                          </span>
                        </p>
                      )}
                    </div>
                    <div className="price flex flex-col gap-1">
                      <h2
                        className={`text-4xl font-bold endTablentMinMax:text-2xl endPhone:text-xl ${
                          isDarkMode ? "" : "text-light-theme-title-color"
                        }`}
                      >
                        Product Price
                      </h2>
                      <hr
                        className={`w-80 endTablentMinMax:w-60 h-[0.125rem] border-0 endPhone:w-52 ${
                          isDarkMode
                            ? "bg-dark-theme-first-color-dark"
                            : "bg-light-theme-first-color"
                        }`}
                      ></hr>
                      <h3
                        className={`title text-2xl font-medium endTablentMinMax:text-base ${
                          isDarkMode
                            ? "text-dark-theme-first-color-dark"
                            : "text-light-theme-first-color"
                        }`}
                      >
                        ${(+productView.price.slice(1)).toFixed(2)}
                      </h3>
                    </div>
                    <div className="quantity flex gap-4 items-center">
                      <button
                        aria-label="Improve Quantity of Products Button"
                        className={`text-2xl h-8 w-8 flex justify-center items-center ${
                          isDarkMode
                            ? "bg-dark-theme-first-color-action-dark"
                            : "bg-light-theme-first-color-action-alt"
                        } `}
                        onClick={() => setCount((count) => count + 1)}
                      >
                        +
                      </button>
                      <span
                        className={`font-bold ${
                          isDarkMode ? "" : "text-light-theme-title-color"
                        }`}
                      >
                        {count}
                      </span>
                      <button
                        aria-label="Reduce Quantity of Products Button"
                        className={`text-2xl h-8 w-8 flex justify-center items-center ${
                          isDarkMode
                            ? "bg-dark-theme-first-color-action-dark"
                            : "bg-light-theme-first-color-action-alt"
                        } `}
                        onClick={() =>
                          count > 1
                            ? setCount((count) => count - 1)
                            : setCount(1)
                        }
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <button
                    aria-label="Add To Cart"
                    onClick={() => {
                      let myproduct = myCart.find(
                        (pro) => pro.id == productView.id
                      );

                      if (myproduct) {
                        myproduct = { ...productView, quantity: +count };
                        dispatch(addToCartProductView(myproduct));
                      } else {
                        let quantityProducty = {
                          ...productView,
                          quantity: +count,
                        };
                        dispatch(addToCartProductView(quantityProducty));
                      }
                    }}
                    className={`py-4 px-8 text-3xl text-light-theme-container-color font-medium endTablentMinMax:py-2 endTablentMinMax:px-4 endTablentMinMax:text-xl endPhone:py-2 endPhone:px-4 endPhone:text-xl ${
                      isDarkMode
                        ? "bg-dark-theme-first-color-action-dark"
                        : "bg-light-theme-first-color-action-alt"
                    }`}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
            <SecSubs />
          </Inner>
        </>
      ) : (
        <ConverterTo404 />
      )}
    </>
  );
}

export default ProductView;
