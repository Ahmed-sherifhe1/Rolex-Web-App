import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { lazy, useEffect } from "react";
import Reciept from "./Reciept";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { clearCart } from "../../RTK/slices/cart-slice";
import ConverterTo404 from "../Main Components/ConverterTo404";
import Inner from "../Main Components/layout/Inner/Inner";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
// let Reciept = lazy(() => import("./Reciept"));
// let Confetti = lazy(() => import("react-confetti"));
import { auth } from "../../Config/Firebase";
export default function ReceiptPage() {
  let Navigate = useNavigate();
  let isDarkMode = useSelector((state) => state.theme.isDarkMode);
  let cartProducts = useSelector((state) => state.cart);
  let user = useSelector((state) => state.user);
  let dispatch = useDispatch();
  const { width, height } = useWindowSize();
  document.querySelector("body").style.overflowX = "hidden";
  useEffect(() => {
    localStorage.removeItem("colorNavItem");
  });
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
  });
  return (
    <>
      {auth.currentUser ? (
        <>
          <Confetti
            width={width}
            style={{ width: "100%", height: "135%" }}
            height={height}
            colors={["#efbe8a", "#ffb568"]}
          />
          <Inner extraCheese={true} refresh={true} id="receiptPage">
            <div className="container overflow-x-hidden container-recieptPage">
              <div className="flex flex-col gap-4">
                <h2
                  className={`text-4xl text-center font-medium ${
                    isDarkMode
                      ? "text-dark-theme-title-color-dark"
                      : "text-light-theme-title-color"
                  }`}
                >
                  Receipt
                </h2>
                <hr
                  className={`w-20 h-[2px] border-0 my-0 mx-auto ${
                    isDarkMode
                      ? "bg-dark-theme-first-color-dark"
                      : "bg-light-theme-first-color"
                  }`}
                />
              </div>

              <div className="container-pdf ">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  exit={{ opacity: 0 }}
                  className={`container-account  ${
                    isDarkMode
                      ? "border-dark-theme-first-color-dark"
                      : "border-light-theme-first-color"
                  }`}
                >
                  <img
                    width={"70px"}
                    height={"70px"}
                    className={` ${
                      isDarkMode
                        ? "border-dark-theme-first-color-dark text-dark-theme-first-color-dark"
                        : "border-light-theme-first-color text-transparent"
                    }`}
                    src={auth.currentUser.photoURL}
                    alt={`${auth.currentUser.displayName} image`}
                  />
                  <div className={`flex flex-col gap-2 endPhone:w-full `}>
                    <div
                      className={`py-2 pl-2 pr-4 flex flex-col gap-1 text-light-theme-title-color ${
                        isDarkMode
                          ? "bg-dark-theme-first-color-dark"
                          : "bg-light-theme-first-color"
                      }`}
                    >
                      <h2 className="font-medium">
                        {auth.currentUser.displayName.length > 18
                          ? `${auth.currentUser.displayName.slice(0, 16)}...`
                          : auth.currentUser.displayName}
                      </h2>
                      <hr className="w-[60%] border-0 h-[2px] bg-light-theme-title-color" />
                    </div>
                    <p
                      className={
                        isDarkMode
                          ? "text-dark-theme-text-color-dark"
                          : "text-light-theme-text-color-light"
                      }
                    >{`${auth.currentUser.email.slice(
                      0,
                      3
                    )}***${auth.currentUser.email.slice(-12)}`}</p>
                  </div>
                </motion.div>
                <div className="container-pdf-btn flex flex-col gap-2 justify-center">
                  <div>
                    <div
                      className={`text-light-theme-title-color font-bold text-2xl flex gap-2 items-center py-4 px-2 ${
                        isDarkMode
                          ? "bg-dark-theme-first-color-dark"
                          : "bg-light-theme-first-color"
                      }`}
                    >
                      <FontAwesomeIcon icon={faReceipt} />
                      <h3>Your Receipt</h3>
                    </div>
                    <PDFViewer
                      className={`w-auto h-80 border-2 ${
                        isDarkMode
                          ? "border-dark-theme-first-color-dark dark-scroll"
                          : "border-light-theme-first-color light-scroll"
                      }`}
                    >
                      <Reciept
                        cartProducts={cartProducts}
                        accountName={user.UserName}
                        accountAddress={
                          user.address || "Fu*k You There's No address"
                        }
                        isDarkMode={isDarkMode}
                      />
                    </PDFViewer>
                  </div>
                  <PDFDownloadLink
                    className={`py-4 my-8 px-4 border-2 relative ${
                      isDarkMode
                        ? "text-dark-theme-first-color-dark border-dark-theme-first-color-dark"
                        : "text-light-theme-first-color border-light-theme-first-color"
                    }`}
                    document={
                      <Reciept
                        cartProducts={cartProducts}
                        accountName={user.UserName}
                        accountAddress={user.address}
                        isDarkMode={isDarkMode}
                      />
                    }
                    fileName="recit.pdf"
                  >
                    {({ loading }) =>
                      loading ? (
                        "Loading document..."
                      ) : (
                        <button
                          aria-label="Download Receipt Button"
                          className="absolute h-full w-full top-0 left-0"
                          onClick={() => {
                            setTimeout(() => {
                              Navigate("/");
                              dispatch(clearCart());
                            }, 1000);
                          }}
                        >
                          Download Receipt
                        </button>
                      )
                    }
                  </PDFDownloadLink>
                </div>
              </div>
            </div>
          </Inner>
        </>
      ) : (
        <ConverterTo404 />
      )}
    </>
  );
}
