import {
  faBan,
  faCreditCard,
  faDollarSign,
  faEnvelope,
  faTag,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function Questions() {
  let isDarkMode = useSelector((state) => state.theme.isDarkMode);
  let search = useSelector((state) => state.search);
  let questionsData = [
    {
      id: 1,
      icon: <FontAwesomeIcon icon={faEnvelope} />,
      title: "How do I change my account email?",
      titleGate: "Account Email",
      par: `You can log in to your account and change it from your Profile &gt;
            Edit Profile. Then go to the general tab to change your email.`,
    },
    {
      id: 2,
      icon: <FontAwesomeIcon icon={faCreditCard} />,
      title: "What should I do if my payment fails?",
      titleGate: "Payment",
      par: `If your payment fails, you can use the (COD) payment option, if
            available on that order. If your payment is debited from your
            account after a payment failure, it will be credited back within
            7-10 days.`,
    },
    {
      id: 3,
      icon: <FontAwesomeIcon icon={faBan} />,
      title: "What is your cancellation policy?",
      titleGate: "Policy",
      par: `You can now cancel an order when it is in packed/shipped status. Any
            amount paid will be credited into the same payment mode using which
            the payment was made`,
    },
    {
      id: 4,
      icon: <FontAwesomeIcon icon={faTruck} />,
      title: "How do I check order delivery status ?",
      titleGate: "Delivery Status",
      par: `Please tap on “My Orders” section under main menu of
            App/Website/M-site to check your order status.`,
    },
    {
      id: 5,
      icon: <FontAwesomeIcon icon={faDollarSign} />,
      title: "What is Instant Refunds?",
      titleGate: "Instant Refunds",
      par: `Upon successful pickup of the return product at your doorstep,
            Myntra will instantly initiate the refund to your source account or
            chosen method of refund. Instant Refunds is not available in a few
            select pin codes and for all self ship returns.`,
    },
    {
      id: 6,
      icon: <FontAwesomeIcon icon={faTag} />,
      title: "How do I apply a coupon on my order?",
      titleGate: "coupon on order",
      par: `You can apply a coupon on cart page before order placement. The
            complete list of your unused and valid coupons will be available
            under “My Coupons” tab of App/Website/M-site.`,
    },
  ];
  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container py-8 flex flex-wrap justify-between gap-8"
      >
        <AnimatePresence>
          {questionsData
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.par.toLowerCase().includes(search.toLowerCase());
            })
            .map((card) => (
              <motion.div
                exit={{ opacity: 0, transition: { duration: 0.6 } }}
                variants={childVariants}
                whileHover={{
                  boxShadow: `0px 0px 100px 0px #efbe8a`,
                  transition: { delay: 0 },
                }}
                key={card.id}
                className={`group card-support-${
                  card.id
                } w-[30%] relative endPhone:w-full endTablentMinMax:w-[45%] overflow-hidden endMediumLap:w-[250px] p-4 flex flex-col gap-2 rounded-lg border-2 ${
                  isDarkMode
                    ? "border-dark-theme-first-color-dark text-dark-theme-text-color-dark hover:text-white"
                    : "border-light-theme-first-color text-light-theme-text-color hover:text-light-theme-title-color"
                }  transition-all duration-500 `}
              >
                <div
                  className={`icon-support size-8 flex items-center justify-center text-light-theme-title-color ${
                    isDarkMode
                      ? "bg-dark-theme-first-color-dark"
                      : "bg-light-theme-first-color"
                  }`}
                >
                  {card.icon}
                </div>
                <h3
                  className={`font-semibold border-b-2 pb-2 ${
                    isDarkMode
                      ? "border-dark-theme-first-color-dark"
                      : "border-light-theme-first-color"
                  }`}
                >
                  {card.title}
                </h3>
                <p>{card.par}</p>
                <div
                  className={`gate absolute top-0 left-0 text-3xl transition-all duration-700 text-light-theme-title-color gap-2 flex-col flex justify-center items-center h-full w-full group-hover:-translate-y-full  ${
                    isDarkMode
                      ? "bg-dark-theme-first-color-dark "
                      : "bg-light-theme-first-color"
                  }`}
                >
                  <div>{card.icon}</div>
                  <h2>{card.titleGate}</h2>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
