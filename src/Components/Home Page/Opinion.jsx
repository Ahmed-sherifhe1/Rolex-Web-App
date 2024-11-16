import { useSelector } from "react-redux";
import { motion } from "framer-motion";
function Opinion({ data }) {
  let isDarkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: [0, 0, 0, 1],
          transition: { duration: 0.7 },
        }}
        className="opinion"
      >
        <div className="content">
          <p className={isDarkMode ? "" : "text-light-theme-text-color"}>
            {data.comment}
          </p>
          <h3>{data.date}</h3>
        </div>
        <div className="person">
          <img
            loading="lazy"
            width={60}
            height={60}
            src={data.image}
            alt={data.name}
          />
          <div className="details">
            <h2>{data.name}</h2>
            <p
              className={
                isDarkMode
                  ? "text-dark-theme-text-color-dark"
                  : "text-light-theme-text-color"
              }
            >
              {data.position}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Opinion;
