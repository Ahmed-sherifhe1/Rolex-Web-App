import { useSelector } from "react-redux";
import emailDb from "../../Config/Firebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faX } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

export default function SecSubs() {
  let isDarkMode = useSelector((state) => state.theme.isDarkMode);
  let [old, setOld] = useState(false);
  let [New, setNew] = useState(false);
  const [inputValue, setInputValue] = useState("");
  let formRef = useRef();
  return (
    <>
      <section className="sec-subscribe ">
        <div
          className={`container container-subs  ${
            isDarkMode
              ? "bg-dark-theme-first-color-dark"
              : "bg-light-theme-first-color"
          }`}
        >
          <AnimatePresence>
            {old && (
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: [0, 0, 0, 1], y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
                className="fixed top-3 flex justify-between gap-8 right-6 p-4 rounded-lg bg-dark-theme-first-color-dark text-light-theme-title-color "
              >
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faEnvelope} />
                  The email has been subscribed
                </div>
                <button
                  onClick={() => {
                    setOld(false);
                  }}
                >
                  <FontAwesomeIcon icon={faX} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {New && (
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: [0, 0, 0, 1], y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
                className="fixed top-3 flex justify-between gap-8 right-6 p-4 rounded-lg bg-dark-theme-first-color-dark text-light-theme-title-color "
              >
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faEnvelope} />
                  You have successfully subscribed!
                </div>
                <button
                  onClick={() => {
                    setNew(false);
                  }}
                >
                  <FontAwesomeIcon icon={faX} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="content ">
            <h2>
              Subscribe Our<br></br>
              Newsletter
            </h2>
            <p>
              Don&apos;t miss out on your discounts. Subscribe to our email
              newsletter to get the best offers, discounts, coupons, gifts and
              much more.
            </p>
          </div>
          <div className="subscribe">
            <form ref={formRef}>
              <input
                className={`emailInput  ${
                  isDarkMode
                    ? "caret-dark-theme-first-color-dark"
                    : "caret-light-theme-first-color"
                }`}
                placeholder="Enter your email"
                value={inputValue}
                onChange={(event) => {
                  setInputValue(event.target.value);
                }}
                type="email"
                name="user_email"
                required
                title="Enter Your Email"
              />
            </form>
            <button
              aria-label="Subscribe With Email"
              className={`${
                isDarkMode
                  ? "bg-dark-theme-first-color-action-dark"
                  : "bg-light-theme-button-color"
              }`}
              onClick={async () => {
                let emailVal = document.querySelector(".emailInput").value;
                let CollectionRef = collection(emailDb, "subscription_email");

                const querySnapshot = await getDocs(
                  query(CollectionRef, where("email", "==", emailVal))
                );

                if (!querySnapshot.empty) {
                  console.log("The email has been subscribed");
                  setOld(true);
                  setTimeout(() => {
                    setOld(false);
                  }, 3000);
                  setInputValue("");
                } else {
                  let payload = { email: emailVal, subscribedAt: new Date() };
                  if (emailVal.length > 0) {
                    await addDoc(CollectionRef, payload);
                    emailjs
                      .sendForm(
                        "service_8uz93xb",
                        "template_u7roqni",
                        formRef.current,
                        "Er1Lb3uN24ROtrWxO"
                      )
                      .then(
                        // (result) => {
                        //   console.log(result.text);
                        //   alert(
                        //     "Subscription successful! A thank you email has been sent."
                        //   );
                        // },
                        // (error) => {
                        //   console.log(error.text);
                        //   alert("Failed to send email. Please try again.");
                        // }
                      );
                    // console.log("You have successfully subscribed!");
                    setNew(true);
                    setTimeout(() => {
                      setNew(false);
                    }, 3000);
                    setInputValue("");
                  }
                }
              }}
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
