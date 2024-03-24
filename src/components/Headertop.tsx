/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import slide1 from "../images/downloaded/1.jpg";
import slide2 from "../images/downloaded/3d-render-modern-home-office.jpg";
import slide3 from "../images/downloaded/5966920_20959.jpg";

function Headertop() {
  // const carouselImages = [
  //   {
  //     imageUrl: slide1.src, // Use slide1.src instead of slide1 directly
  //     text: "First slide",
  //   },
  //   {
  //     imageUrl: slide2.src, // Use slide2.src instead of slide2 directly
  //     text: "Second slide",
  //   },
  //   {
  //     imageUrl: slide3.src, // Use slide3.src instead of slide3 directly
  //     text: "Third slide",
  //   },
  // ];

  return (
    <div>        
              <img
                src={slide1.src}
                className="d-block carousels"
                alt=".."
              />
              <div></div>
    </div>
  );
}

export default Headertop;
