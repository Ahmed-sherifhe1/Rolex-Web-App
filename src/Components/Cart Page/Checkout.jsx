import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { faCircleInfo, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Inner from "../Main Components/layout/Inner/Inner";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../../Config/Firebase";
import { setUserData } from "../../RTK/slices/user-slice";
export default function Checkout() {
  let isDarkMode = useSelector((state) => state.theme.isDarkMode);
  let cartProducts = useSelector((state) => state.cart);
  let signInAnimation = useAnimation();
  let UseNameGmail = useAnimation();
  let UseAdressGmail = useAnimation();
  let dispatch = useDispatch();

  let [signIn, setSignIn] = useState(false);

  let Navigate = useNavigate();

  let [UserName, setUserName] = useState("");
  let [address, setAddress] = useState("");
  useEffect(() => {
    setUserName(auth.currentUser && auth.currentUser.displayName.toString());
  }, []);
  let signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider).then(() => {
        Navigate("/cart/checkout");
      });
    } catch (err) {
      console.error(err);
    }
    setUserName(auth.currentUser && auth.currentUser.displayName.toString());
  };

  // console.log(auth.currentUser && auth.currentUser);

  let totalPrice = cartProducts.reduce((initialVal, product) => {
    initialVal += +product.price.slice(1) * product.quantity;
    return initialVal;
  }, 0);

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
      <Inner extraCheese={true} refresh={true} id="checout">
        <div
          className={`container container-checkOut
           ${
             isDarkMode
               ? "text-dark-theme-title-color-dark"
               : "text-light-theme-title-color"
           }
            `}
        >
          <table className="">
            <thead
              className={` ${
                isDarkMode
                  ? "bg-dark-theme-first-color-dark"
                  : "bg-light-theme-first-color"
              }`}
            >
              <tr>
                <th>#Id</th>
                <th>Title</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {cartProducts.map((e) => [
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>
                    {e.title.length > 10
                      ? `${e.title.slice(0, 7)}...`
                      : e.title}
                  </td>
                  <td>{e.quantity}</td>
                  <td>{e.price}</td>
                  <td
                    className={` font-bold ${
                      isDarkMode
                        ? "text-dark-theme-first-color-dark"
                        : "text-light-theme-first-color"
                    }`}
                  >
                    ${e.quantity * +e.price.slice(1)}
                  </td>
                </tr>,
              ])}
            </tbody>
          </table>
          <div className="container-total-account ">
            <div
              className={`totalPrice  ${
                isDarkMode
                  ? "border-dark-theme-first-color-dark text-dark-theme-first-color-dark"
                  : "border-light-theme-first-color text-light-theme-first-color"
              }`}
            >
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="gmail-name flex flex-col gap-4">
              <AnimatePresence>
                {auth.currentUser ? (
                  <>
                    {/* container of user data from his gamil account */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
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
                              ? `${auth.currentUser.displayName.slice(
                                  0,
                                  16
                                )}...`
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
                    {/* button for log out from the website */}
                    <button
                      aria-label="Sign Out Button"
                      className={`border-2 flex w-full items-center gap-4 py-2 px-7 justify-center endPhone:w-full active:translate-x-3 active:translate-y-3 
                        
                           border-red-500 text-red-500`}
                      title="Sign in with Google"
                      onClick={() => {
                        signOut(auth)
                          .then(() => {
                            console.log("User signed out successfully");
                            Navigate("/cart/checkout");
                          })
                          .catch((error) => {
                            console.error("Error signing out: ", error);
                          });
                      }}
                    >
                      Log Out
                    </button>
                  </>
                ) : (
                  <div>
                    {/* button for sign in to website to can check out and ge receipt */}
                    <motion.button
                      aria-label="Google Sign In Button"
                      animate={signInAnimation}
                      transition={{
                        duration: 0.5,
                      }}
                      initial={{ x: -50, scale: 1 }}
                      whileTap={{
                        scale: [0.9, 0.7, 0.9, 1.5, 0.9, 0.7, 0.9, 1],
                      }}
                      className={`border-2 flex w-60 items-center gap-4 py-2 px-7 justify-center endPhone:w-full active:translate-x-3 active:translate-y-3 ${
                        isDarkMode && signIn
                          ? "border-red-500 text-red-500"
                          : isDarkMode
                          ? "border-dark-theme-first-color-dark text-dark-theme-first-color-dark"
                          : "border-light-theme-first-color text-light-theme-first-color"
                      }`}
                      title="Sign in with Google"
                      onClick={() => {
                        signInWithGoogle();
                      }}
                    >
                      <svg
                        role="img"
                        aria-labelledby="titleID descID"
                        width={"1.5rem"}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title id="titleID">Google Icon</title>
                        <desc id="descID">
                          Icon to explain for user to sign in with gmail account
                        </desc>

                        <path
                          className={
                            isDarkMode && signIn
                              ? "fill-red-500"
                              : isDarkMode
                              ? "fill-dark-theme-first-color-dark"
                              : "fill-light-theme-first-color"
                          }
                          d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                        />
                      </svg>
                      Sign in with Google
                    </motion.button>

                    {signIn && (
                      // showin message if not sign in and try to checkout
                      <motion.span
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, type: "spring" }}
                        className="flex gap-2 text-red-500 items-center text-xs justify-between py-4"
                      >
                        <FontAwesomeIcon icon={faCircleInfo} />
                        <span>
                          Note : you should sign in to get your receipt
                        </span>
                      </motion.span>
                    )}
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
          {/* form to get more info about user to can checkout */}
          {auth.currentUser && (
            <>
              <hr
                className={`w-[180%] h-[2px] border-0  -translate-x-[20%] my-4 ${
                  isDarkMode
                    ? "bg-dark-theme-first-color-dark"
                    : "bg-light-theme-first-color"
                }`}
              />
              <form action="" className="text-center">
                <h2
                  className={`text-3xl inline-block  text-light-theme-title-color   p-4 ${
                    isDarkMode
                      ? "bg-dark-theme-first-color-dark"
                      : "bg-light-theme-first-color"
                  }`}
                >
                  Give Us Some Info About You
                </h2>
                <div className="py-12 flex gap-8 justify-between items-center flex-wrap endPhone:flex-col">
                  <motion.input
                    animate={UseNameGmail}
                    transition={{
                      duration: 0.5,
                    }}
                    value={UserName}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                    type="text"
                    placeholder="Enter Your Name"
                    className={`w-1/3 p-4 endPhone:w-full rounded-xl border-2 outline-0 inputNotShadow transition-all duration-700 ${
                      isDarkMode
                        ? "bg-dark-theme-body-color-dark text-dark-theme-first-color-dark border-dark-theme-first-color-dark placeholder:text-dark-theme-text-color-dark inputShadow "
                        : "bg-light-theme-body-color text-light-theme-title-color border-light-theme-title-color placeholder:text-light-theme-text-color"
                    }`}
                  />
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    placeholder="Address"
                    className={`w-1/3 p-4 endPhone:w-full rounded-xl border-2 outline-0 inputNotShadow transition-all duration-700 ${
                      isDarkMode
                        ? "bg-dark-theme-body-color-dark text-dark-theme-first-color-dark border-dark-theme-first-color-dark placeholder:text-dark-theme-text-color-dark inputShadow "
                        : "bg-light-theme-body-color text-light-theme-title-color border-light-theme-title-color placeholder:text-light-theme-text-color"
                    }`}
                  />
                  <div className="flex flex-col endPhone:w-full gap-4 w-1/3 items-start">
                    <label
                      htmlFor="payMethod"
                      className={` pb-2 border-b-2 flex gap-2 items-center ${
                        isDarkMode
                          ? "text-dark-theme-first-color-dark border-dark-theme-first-color-dark"
                          : "text-light-theme-first-color border-light-theme-first-color"
                      }`}
                    >
                      <FontAwesomeIcon icon={faWallet} />
                      <span>Choose a Pay Method</span>
                    </label>
                    <select
                      name="methodsPay"
                      id="payMethod"
                      className={`w-full p-4 rounded-xl border-2 outline-0 inputNotShadow transition-all duration-700 ${
                        isDarkMode
                          ? "bg-dark-theme-body-color-dark text-dark-theme-first-color-dark border-dark-theme-first-color-dark placeholder:text-dark-theme-text-color-dark inputShadow "
                          : "bg-light-theme-body-color text-light-theme-title-color border-light-theme-title-color placeholder:text-light-theme-text-color"
                      }`}
                    >
                      <option
                        value="cashOnDelivry"
                        className="p-4 flex items-center"
                      >
                        <span>Cash On Delivry</span>
                      </option>
                    </select>
                  </div>
                </div>
              </form>
            </>
          )}
          <AnimatePresence>
            {cartProducts.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
                className="text-center "
              >
                <button
                  aria-label="Check Out"
                  onClick={() => {
                    if (
                      auth.currentUser != null &&
                      UserName?.length > 0 &&
                      address?.length > 0
                    ) {
                      Navigate("/cart/checkout/receiptpage");
                      dispatch(setUserData({ UserName, address }));
                    } else if (UserName?.length < 0) {
                      UseNameGmail.start({ x: [0, -10, 10, -10, 10, 0] });
                    } else {
                      setSignIn(true);
                      signInAnimation.start({ x: [0, -10, 10, -10, 10, 0] });
                    }
                  }}
                  className={`w-60 py-2 px-4 border-2 transition-all duration-700 font-bold text-light-theme-title-color ${
                    isDarkMode
                      ? "border-dark-theme-first-color-dark bg-dark-theme-first-color-dark hover:bg-transparent hover:text-dark-theme-first-color-dark"
                      : "border-light-theme-first-color bg-light-theme-first-color hover:bg-transparent hover:text-light-theme-first-color"
                  }`}
                >
                  Check Out !
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Inner>
    </>
  );
}
