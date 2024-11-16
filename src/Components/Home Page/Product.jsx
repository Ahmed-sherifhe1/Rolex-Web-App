import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { addToCart } from "../../RTK/slices/cart-slice";
function Product({ data, index }) {
  let isDarkMode = useSelector((state) => state.theme.isDarkMode);
  let dispatch = useDispatch();
  let productsSelector = useSelector((state) => state.products);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{
          opacity: [0, 0, 0, 1],
          x: [-100, -100, 0],
          transition: { duration: 0.5, delay: 0.05 * index },
        }}
        viewport={{ once: true }}
        className={`card   ${
          isDarkMode
            ? "bg-dark-theme-container-color-dark text-dark-theme-title-color-dark border-dark-theme-border-color-dark"
            : "bg-light-theme-container-color text-light-theme-title-color border-light-theme-border-color"
        }`}
      >
        <img
          loading="lazy"
          width={95}
          height={155}
          className=""
          src={data.image}
          alt={data.title}
        />
        <h4>{data.title}</h4>
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
          aria-label="Cart Add"
          onClick={() => {
            dispatch(addToCart(productsSelector[data.num]));
          }}
          className={` ${
            isDarkMode
              ? "bg-dark-theme-first-color-action-dark"
              : "bg-light-theme-button-color"
          }`}
          transition={{ duration: 0.7, type: "spring" }}
        >
          <svg
            role="img"
            aria-labelledby="titleID descID"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title id="titleID">Cart Icon</title>
            <desc id="descID">
              Cart to tap on it to add product to your cart
            </desc>
            <path
              d="M4.16667 18.3334H15.8333C16.7525 18.3334 17.5 17.5859 17.5 16.6667V7.50002C17.5 7.27901 17.4122 7.06705 17.2559 6.91077C17.0996 6.75448 16.8877 6.66669 16.6667 6.66669H14.1667V5.83335C14.1667 3.53585 12.2975 1.66669 10 1.66669C7.7025 1.66669 5.83333 3.53585 5.83333 5.83335V6.66669H3.33333C3.11232 6.66669 2.90036 6.75448 2.74408 6.91077C2.5878 7.06705 2.5 7.27901 2.5 7.50002V16.6667C2.5 17.5859 3.2475 18.3334 4.16667 18.3334ZM7.5 5.83335C7.5 4.45502 8.62167 3.33335 10 3.33335C11.3783 3.33335 12.5 4.45502 12.5 5.83335V6.66669H7.5V5.83335ZM4.16667 8.33335H5.83333V10H7.5V8.33335H12.5V10H14.1667V8.33335H15.8333L15.835 16.6667H4.16667V8.33335Z"
              fill="#ffffff"
            />
          </svg>
        </motion.button>
      </motion.div>
    </>
  );
}

export default Product;
