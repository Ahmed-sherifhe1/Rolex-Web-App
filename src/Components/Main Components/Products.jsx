import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Slider } from "@mui/material";
import Product from "../Products Page/Product";
import { AnimatePresence } from "framer-motion";
import Inner from "./layout/Inner/Inner";
import { changeNav } from "../../RTK/slices/colorNavItem-slice";

export default function Products() {
  const isDarkMode = Boolean(useSelector((state) => state.theme.isDarkMode));
  let productSelector = useSelector((state) => state.products);
  let NewsProducts = productSelector.filter((watch) => watch.new === true);
  let dispatch = useDispatch();
  let lowestPrice = productSelector
    .slice()
    .sort((a, b) => +a.price.slice(1) - +b.price.slice(1));

  let highestPrice = productSelector
    .slice()
    .sort((a, b) => +a.price.slice(1) - +b.price.slice(1))
    .reverse();
  // End manipulating data of products
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
    if (isDarkMode) {
      document
        .querySelector(".cart")
        .classList.add("fill-dark-theme-title-color-dark");
      document
        .querySelector(".dark-btn")
        .classList.add("fill-dark-theme-title-color-dark");
      document
        .querySelector(".menu")
        .classList.add("fill-dark-theme-title-color-dark");
    } else {
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
    dispatch(changeNav("products"));
  });
  // End dark mode functions to control body and icons on the nav bar
  // Start functions to control slider on header of page
  const [value, setValue] = useState([
    +lowestPrice[0].price.slice(1),
    +lowestPrice[lowestPrice.length - 1].price.slice(1),
  ]);
  // start manipulating data of products for rang slider input
  var rangeProductsAll = productSelector.filter(
    (watch) =>
      +watch.price.slice(1) >= value[0] && +watch.price.slice(1) <= value[1]
  );
  var rangeProductsNewOnly = NewsProducts.filter(
    (watch) =>
      +watch.price.slice(1) >= value[0] && +watch.price.slice(1) <= value[1]
  );
  var rangeProductsHighToLow = highestPrice.filter(
    (watch) =>
      +watch.price.slice(1) >= value[0] && +watch.price.slice(1) <= value[1]
  );
  var rangeProductsLowToHigh = lowestPrice.filter(
    (watch) =>
      +watch.price.slice(1) >= value[0] && +watch.price.slice(1) <= value[1]
  );
  // End manipulating data of products for rang slider input
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setrangy(true);
  };
  // End functions to control slider on header of page

  function valuetext(value) {
    return `$ ${value}`;
  }

  const [newOnly, setNewOnly] = useState(false);
  const [all, setAll] = useState(true);
  const [highToLow, setHighToLow] = useState(false);
  const [lowToHigh, setLowToHigh] = useState(false);
  const [rangy, setrangy] = useState(false);

  return (
    <>
      <Inner extraCheese={true} refresh={true} id="products">
        <div className="container sec-container-products ">
          <header>
            <div className="container-header ">
              <div className="price-choices">
                <ul className="">
                  <li
                    onClick={() => {
                      setNewOnly(false);
                      setAll(true);
                      setLowToHigh(false);
                      setHighToLow(false);
                      setrangy(false);
                      document
                        .querySelectorAll("ul .price-control")
                        .forEach((e) => {
                          if (
                            e ==
                            document.querySelectorAll("ul .price-control")[0]
                          ) {
                            isDarkMode
                              ? e.classList.add("active-dark")
                              : e.classList.add("active-light");
                          } else {
                            isDarkMode
                              ? e.classList.remove("active-dark")
                              : e.classList.remove("active-light");
                          }
                        });
                      setValue([
                        +lowestPrice[0].price.slice(1),
                        +lowestPrice[lowestPrice.length - 1].price.slice(1),
                      ]);
                    }}
                    className={`active endPhone:w-[45%] endPhone:text-center price-control  ${
                      isDarkMode
                        ? "active-dark text-dark-theme-first-color-action-dark border-dark-theme-first-color-action-dark hover:text-dark-theme-first-color-dark hover:border-dark-theme-first-color-dark"
                        : "active-light text-light-theme-text-color-light border-light-theme-text-color-light hover:text-light-theme-first-color hover:border-light-theme-first-color"
                    }`}
                  >
                    All
                  </li>
                  <li
                    onClick={() => {
                      setNewOnly(true);
                      setAll(false);
                      setLowToHigh(false);
                      setHighToLow(false);
                      setrangy(false);
                      document
                        .querySelectorAll("ul .price-control")
                        .forEach((e) => {
                          if (
                            e ==
                            document.querySelectorAll("ul .price-control")[1]
                          ) {
                            isDarkMode
                              ? e.classList.add("active-dark")
                              : e.classList.add("active-light");
                          } else {
                            isDarkMode
                              ? e.classList.remove("active-dark")
                              : e.classList.remove("active-light");
                          }
                        });
                      setValue([
                        +lowestPrice[0].price.slice(1),
                        +lowestPrice[lowestPrice.length - 1].price.slice(1),
                      ]);
                    }}
                    className={`price-control endPhone:w-[45%] endPhone:text-center ${
                      isDarkMode
                        ? "text-dark-theme-first-color-action-dark border-dark-theme-first-color-action-dark hover:text-dark-theme-first-color-dark hover:border-dark-theme-first-color-dark"
                        : "text-light-theme-text-color-light border-light-theme-text-color-light hover:text-light-theme-first-color hover:border-light-theme-first-color"
                    }`}
                  >
                    New
                  </li>
                  <li
                    onClick={() => {
                      setNewOnly(false);
                      setAll(false);
                      setLowToHigh(false);
                      setHighToLow(true);
                      setrangy(false);
                      document
                        .querySelectorAll("ul .price-control")
                        .forEach((e) => {
                          if (
                            e ==
                            document.querySelectorAll("ul .price-control")[2]
                          ) {
                            isDarkMode
                              ? e.classList.add("active-dark")
                              : e.classList.add("active-light");
                          } else {
                            isDarkMode
                              ? e.classList.remove("active-dark")
                              : e.classList.remove("active-light");
                          }
                        });
                      setValue([
                        +lowestPrice[0].price.slice(1),
                        +lowestPrice[lowestPrice.length - 1].price.slice(1),
                      ]);
                    }}
                    className={`price-control endPhone:w-full endPhone:text-center ${
                      isDarkMode
                        ? "text-dark-theme-first-color-action-dark border-dark-theme-first-color-action-dark hover:text-dark-theme-first-color-dark hover:border-dark-theme-first-color-dark"
                        : "text-light-theme-text-color-light border-light-theme-text-color-light hover:text-light-theme-first-color hover:border-light-theme-first-color"
                    }`}
                  >
                    Price : High To Low
                  </li>
                  <li
                    onClick={() => {
                      setLowToHigh(true);
                      setAll(false);
                      setNewOnly(false);
                      setHighToLow(false);
                      setrangy(false);
                      document
                        .querySelectorAll("ul .price-control")
                        .forEach((e) => {
                          if (
                            e ==
                            document.querySelectorAll("ul .price-control")[3]
                          ) {
                            isDarkMode
                              ? e.classList.add("active-dark")
                              : e.classList.add("active-light");
                          } else {
                            isDarkMode
                              ? e.classList.remove("active-dark")
                              : e.classList.remove("active-light");
                          }
                        });
                      setValue([
                        +lowestPrice[0].price.slice(1),
                        +lowestPrice[lowestPrice.length - 1].price.slice(1),
                      ]);
                    }}
                    className={`price-control endPhone:w-full endPhone:text-center ${
                      isDarkMode
                        ? "text-dark-theme-first-color-action-dark border-dark-theme-first-color-action-dark hover:text-dark-theme-first-color-dark hover:border-dark-theme-first-color-dark"
                        : "text-light-theme-text-color-light border-light-theme-text-color-light hover:text-light-theme-first-color hover:border-light-theme-first-color"
                    }`}
                  >
                    Price : Low To High
                  </li>
                </ul>
              </div>
              <div
                className={`w-40 ${
                  isDarkMode
                    ? "text-dark-theme-first-color-dark"
                    : "text-light-theme-first-color"
                }`}
              >
                <Slider
                  color={isDarkMode ? "#EFBE8A" : "#FFB568"}
                  min={+lowestPrice[0].price.slice(1)}
                  max={+highestPrice[0].price.slice(1)}
                  getAriaLabel={() => "Price range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
              </div>
            </div>
          </header>
          <div className="container-products ">
            {all &&
              !rangy &&
              [...productSelector].map((e) => <Product data={e} key={e.id} />)}

            {newOnly &&
              !rangy &&
              [...NewsProducts].map((e) => <Product data={e} key={e.id} />)}

            {highToLow &&
              !rangy &&
              [...highestPrice].map((e) => <Product data={e} key={e.id} />)}
            {lowToHigh &&
              !rangy &&
              [...lowestPrice].map((e) => <Product data={e} key={e.id} />)}
            <AnimatePresence>
              {rangy &&
                all &&
                [...rangeProductsAll].map((e) => (
                  <Product data={e} key={e.id} />
                ))}
              {rangy &&
                newOnly &&
                [...rangeProductsNewOnly].map((e) => (
                  <Product data={e} key={e.id} />
                ))}
              {rangy &&
                highToLow &&
                [...rangeProductsHighToLow].map((e) => (
                  <Product data={e} key={e.id} />
                ))}
              {rangy &&
                lowToHigh &&
                [...rangeProductsLowToHigh].map((e) => (
                  <Product data={e} key={e.id} />
                ))}
            </AnimatePresence>
          </div>
        </div>
      </Inner>
    </>
  );
}
