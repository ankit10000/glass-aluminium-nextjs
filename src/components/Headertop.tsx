/* eslint-disable @next/next/no-img-element */
import slide1 from "../images/downloaded/1.jpg";
import { LuPhoneCall } from "react-icons/lu";
function Headertop() {


  return (
    <div> 
      <div className="headbar">
        <div className="container">
        <div className="inner_text_headbar1"><LuPhoneCall size={20} color="white"/>Talk with us</div>
        <div className="inner_text_headbar2"></div>
        <div className="inner_text_headbar3"></div>
        <div className="inner_text_headbar4"></div>
        </div>
      </div>
        <img
          src={slide1.src}
          className="d-block carousels"
          alt=".."
        />
    </div>
  );
}

export default Headertop;
