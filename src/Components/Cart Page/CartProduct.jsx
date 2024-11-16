import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  deleteFromProducts,
  delFromQuantity,
} from "../../RTK/slices/cart-slice";

function CartProduct({ data }) {
  let isDarkMode = useSelector((state) => state.theme.isDarkMode);
  let dispatch = useDispatch();
  return (
    <>
      <div className="container-product-cart mediumLap:w-[80%] my-0 mx-auto ">
        <div
          className={`container-img  ${
            isDarkMode
              ? "bg-dark-theme-container-color-dark border-dark-theme-border-color-dark"
              : "bg-light-theme-container-color border-light-theme-border-color"
          }`}
        >
          <img
            loading="lazy"
            width={48.4}
            height={71.83}
            src={data.img}
            alt={data.title}
          />
        </div>
        <div className="container-details-trash ">
          <div className="container-details ">
            <div className="content ">
              <h3>{data.title}</h3>
              <span
                className={
                  isDarkMode
                    ? "text-dark-theme-first-color-dark"
                    : "text-light-theme-first-color"
                }
              >
                {data.price}
              </span>
            </div>
            <div className="buttons-container  flex gap-4 items-center">
              <button
                aria-label="Minus Num Of Products (-)"
                className={`size-6  flex justify-center items-center ${
                  isDarkMode
                    ? "bg-dark-theme-first-color-action-dark"
                    : "bg-light-theme-first-color-action-alt"
                } `}
                onClick={() => {
                  if (data.quantity > 1) {
                    dispatch(delFromQuantity(data));
                  } else {
                    dispatch(deleteFromProducts(data));
                  }
                }}
              >
                <svg
                  role="img"
                  aria-labelledby="titleID descID"
                  width="10"
                  height="2"
                  viewBox="0 0 10 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title id="titleID">Minus Shape</title>
                  <desc id="descID">Reduce Num of Products</desc>

                  <path
                    className={
                      isDarkMode
                        ? "fill-dark-theme-title-color-dark"
                        : "fill-light-theme-title-color"
                    }
                    d="M0.333374 0.333344H9.66671V1.66668H0.333374V0.333344Z"
                    fill="#F2F2F2"
                  />
                </svg>
              </button>
              <span
                className={`font-bold ${
                  isDarkMode ? "" : "text-light-theme-title-color"
                }`}
              >
                {data.quantity ? data.quantity : 1}
              </span>
              <button
                aria-label="Adding Num Of Products (+)"
                className={`size-6 flex justify-center items-center ${
                  isDarkMode
                    ? "bg-dark-theme-first-color-action-dark"
                    : "bg-light-theme-first-color-action-alt"
                } `}
                onClick={() => dispatch(addToCart(data))}
              >
                <svg
                  role="img"
                  aria-labelledby="titleID descID"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title id="titleID">Add button - Shape of +</title>
                  <desc id="descID">Adding Products</desc>

                  <path
                    className={
                      isDarkMode
                        ? "fill-dark-theme-title-color-dark"
                        : "fill-light-theme-title-color"
                    }
                    d="M9.66671 4.33334H5.66671V0.333344H4.33337V4.33334H0.333374V5.66668H4.33337V9.66668H5.66671V5.66668H9.66671V4.33334Z"
                    fill="#F2F2F2"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            className="trash cursor-pointer"
            onClick={() => {
              dispatch(deleteFromProducts(data));
            }}
          >
            <svg
              role="img"
              aria-labelledby="titleID descID"
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title id="titleID">Trash Icon</title>
              <desc id="descID">shape to delete the hole product</desc>

              <path
                className={
                  isDarkMode
                    ? "fill-dark-theme-first-color-dark"
                    : "fill-light-theme-first-color"
                }
                d="M10.5 0.666687H5.5C4.58083 0.666687 3.83333 1.41419 3.83333 2.33335V4.00002H0.5V5.66669H2.16667V15.6667C2.16667 16.5859 2.91417 17.3334 3.83333 17.3334H12.1667C13.0858 17.3334 13.8333 16.5859 13.8333 15.6667V5.66669H15.5V4.00002H12.1667V2.33335C12.1667 1.41419 11.4192 0.666687 10.5 0.666687ZM5.5 2.33335H10.5V4.00002H5.5V2.33335ZM12.1667 15.6667H3.83333V5.66669H12.1667V15.6667Z"
                fill="#EFBE8A"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartProduct;
