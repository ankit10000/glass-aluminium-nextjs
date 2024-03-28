/* eslint-disable @next/next/no-img-element */
// import slide1 from "../images/downloaded/1.jpg";
import { LuPhoneCall } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
function Headertop() {


  return (
    <div> 
      <div className="headbar" >
        <div className="container">
        <div className="inner_text_headbar1"><LuPhoneCall size={16} color="white" className="mt-1 mx-2"/>Talk with us +91-9828101833</div>
        <div className="inner_text_headbar2"><MdEmail size={16} color="white" className="mt-2 mx-2"/>jangidpooranmal01@gmail.com</div>
        <div className="inner_text_headbar3"></div>
        <div className="inner_text_headbar4"><FaRegClock size={16} color="white" className="mt-1 mx-2"/>Mon-Fri 8:00-18:00 / Sunday 8:00-14:00</div>
        </div>
      </div>
        {/* <img
          src={slide1.src}
          className="d-block carousels"
          alt={".."}
        /> */}
    </div>
  );
}

export default Headertop;
