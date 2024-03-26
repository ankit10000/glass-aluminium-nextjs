/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import map from "../images/map.png";
import slide1 from '../images/downloaded/7.jpg'
import slide2 from '../images/downloaded/8.jpg'
export default function Contact() {
  return (
    <>
      <div className=" bg-white m-auto  py-20 px-5">
        <div className="container inner_container_contact ">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  container">
            <h1 className="text-center text-5xl font-bold">Contact Us</h1>
            <div className="line">
              <div className="form-group">
                <label htmlFor="usr" className="text-2xl">
                  Name:
                </label>
                <input type="text" className="form-control" id="usr" />
              </div>
              <div className="form-group">
                <label htmlFor="mail" className="text-2xl">
                  E-mail
                </label>
                <input type="text" className="form-control" id="pwd" />
              </div>
              <div className="form-group">
                <label htmlFor="comment" className="text-2xl">
                  Message
                </label>
                <textarea
                  className="form-control"
                  rows={5}
                  id="comment"
                ></textarea>
              </div>
              <button type="button" className="btn btn-success px-5 py-3 mb-5">
                <span className="text-2xl">Call us</span>
              </button>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  container">
            {/* <img src={map.src} className="rounded-xl"/> */}
            <div className="flip-card1">
            <div className="flip-card-inner1">
              <div className="flip-card-front">
                <img
                  src={map.src}
                  alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                  className="rounded-lg bg-gray-100 work-video"
                />
              </div>
              <div className="flip-card-back">
              <img
                  src={map.src}
                  alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                  className="rounded-lg bg-gray-100 work-video opacity-25"
                />
                <button type="button" className="btn btn-success w-72 m-auto position-absolute right-40"><span className="text-4xl">Get Directions</span></button>
                
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
