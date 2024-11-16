import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../RTK/slices/cart-slice";
import { motion } from "framer-motion";
function NewArival({ data }) {
  let isDarkMode = useSelector((state) => state.theme.isDarkMode);
  let dispatch = useDispatch();
  let productSelector = useSelector((state) => state.products);
  return (
    <>
      <div
        className={`card 
          ${
            isDarkMode
              ? "bg-dark-theme-container-color-dark border-dark-theme-border-color-dark before:bg-dark-theme-first-color-dark hover:before:bg-dark-theme-first-color-action-dark hover:bg-dark-theme-first-color-dark "
              : "border-light-theme-border-color bg-light-theme-container-color before:bg-light-theme-first-color hover:before:bg-light-theme-button-color hover:bg-light-theme-first-color "
          }`}
      >
        <img
          loading="lazy"
          width={130}
          height={230}
          src={`${data.img}`}
          alt={data.title}
        />
        <h4
          className={` ${
            isDarkMode
              ? "text-dark-theme-title-color-dark"
              : "text-light-theme-title-color"
          }`}
        >
          {data.title}
        </h4>
        <span
          className={
            isDarkMode
              ? "text-dark-theme-first-color-dark"
              : "text-light-theme-first-color"
          }
        >
          {data.price}
        </span>
        <motion.button
          whileTap={{ scale: 0.8 }}
          aria-label="Add To Cart"
          className={`${
            isDarkMode
              ? "bg-dark-theme-first-color-action-dark "
              : "bg-light-theme-button-color"
          }`}
          onClick={() => {
            dispatch(addToCart(productSelector[data.num]));
          }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          ADD TO CART
        </motion.button>
      </div>
    </>
  );
}

export default NewArival;
