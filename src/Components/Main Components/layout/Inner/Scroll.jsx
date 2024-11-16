import { useSelector } from "react-redux";

export default function Scroll() {
  let isDarkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <>
      <div
        className={`scroll-top ${
          isDarkMode
            ? "bg-dark-theme-first-color-dark"
            : "bg-light-theme-first-color"
        }`}
      ></div>
    </>
  );
}
