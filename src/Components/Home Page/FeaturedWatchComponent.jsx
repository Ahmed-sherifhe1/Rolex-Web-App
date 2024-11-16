import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../RTK/slices/cart-slice";
import { motion } from "framer-motion";
export default function FeaturedWatchComponent({ data, dataCart, style }) {
  let isDarkMode = useSelector((state) => state.theme.isDarkMode);
  let dispatch = useDispatch();
  return (
    <>
      <motion.div
        style={style}
        transition={{ duration: 0.5 }}
        className={`card 
          ${
            isDarkMode
              ? "bg-dark-theme-container-color-dark border-dark-theme-border-color-dark before:bg-dark-theme-first-color-dark"
              : "border-light-theme-border-color bg-light-theme-container-color before:bg-light-theme-first-color  "
          }`}
        key={data.id}
      >
        <div className="h-[13.438rem] flex items-center justify-center">
          <img
            loading="lazy"
            width={140}
            height={215}
            src={data.img}
            alt={data.title}
            fetchPriority="low"
          />
        </div>
        <h4
          className={
            isDarkMode
              ? "text-dark-theme-title-color-dark"
              : "text-light-theme-title-color"
          }
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
          aria-label="Add To Cart"
          transition={{
            duration: 0.5,
          }}
          whileHover={{
            scale: 0.9,
          }}
          onClick={() => {
            dispatch(addToCart(dataCart));
          }}
          className={`${
            isDarkMode
              ? "bg-dark-theme-first-color-action-dark "
              : "bg-light-theme-button-color"
          }`}
        >
          ADD TO CART
        </motion.button>
      </motion.div>
    </>
  );
}
