import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../RTK/slices/search-slice";

export default function HeaderSupport() {
  let isDarkMode = useSelector((state) => state.theme.isDarkMode);
  let search = useSelector((state) => state.search);
  let dispatch = useDispatch();
  return (
    <>
      <header
        className={`py-16 text-light-theme-title-color font-custRoboto ${
          isDarkMode
            ? "bg-dark-theme-first-color-dark"
            : "bg-light-theme-first-color"
        }`}
      >
        <div className="container text-center flex flex-col gap-4">
          <div className="title flex flex-col gap-2">
            <h2 className="text-4xl font-semibold">Support Center</h2>
            <hr className="h-[2px] border-0 bg-light-theme-title-color w-[10vw] my-0 mx-auto endMediumLap:w-[15vw] endTablentMinMax:w-[20vw] endPhone:w-3/5" />
          </div>
          <p className="endPhone:text-sm">
            Ask us anything, We&apos;re here to assist you.
          </p>
          <div className="relative w-[20vw] mmy-0 mx-auto rounded-lg py-2 endMediumLap:w-[25vw] endTablentMinMax:w-[30vw] endPhone:w-full">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={` top-3 z-50 absolute left-4 ${
                isDarkMode
                  ? "text-dark-theme-first-color-dark"
                  : "text-light-theme-first-color"
              }`}
            />
            <input
              type="text"
              value={search}
              onChange={(e) => dispatch(setSearch(e.target.value))}
              placeholder="Have any questions?"
              className={`absolute w-full font-medium top-0 left-0 rounded-lg py-2 pl-12 ${
                isDarkMode
                  ? "text-dark-theme-text-color-dark bg-dark-theme-body-color-dark"
                  : "text-light-theme-text-color bg-light-theme-body-color"
              }`}
            />
          </div>
        </div>
      </header>
    </>
  );
}
