import { useSelector } from "react-redux";
import new1 from "../../assets/new-1.webp";
import new2 from "../../assets/new-2.webp";
import new3 from "../../assets/new-3.webp";
import new4 from "../../assets/new-4.webp";
import NewArival from "./NewArival";
import FlipText from "../Main Components/layout/Inner/FlipText";
export default function SecNewArivals() {
  let FeaturedWatches = [
    { id: 1, img: new1, title: "LONGINES ROSE", price: "$980", num: 1 },
    { id: 2, img: new2, title: "JAZZMASTER", price: "$1150", num: 3 },
    { id: 3, img: new3, title: "DREYFUSS GOLD", price: "$750", num: 6 },
    { id: 4, img: new4, title: "PORTUGUESE ROSE", price: "$1590", num: 9 },
  ];
  let isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <>
      <section className="sec-new-arivals " id="NewArivals">
        <div className="container">
          <hr
            className={` ${
              isDarkMode
                ? "bg-dark-theme-first-color-dark"
                : "bg-light-theme-first-color"
            }`}
          ></hr>
          <h3
            className={` ${
              isDarkMode
                ? "text-dark-theme-title-color-dark"
                : "text-light-theme-title-color"
            }`}
          >
            <FlipText>NEW &nbsp; ARRIVALS</FlipText>
          </h3>
          <div className="container-cards ">
            {FeaturedWatches.map((watch) => (
              <NewArival key={watch.id} data={watch} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
