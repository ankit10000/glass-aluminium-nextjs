/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import map from "../images/map.webp";
export default function Contact() {
  return (
    <>
      <div className=" bg-white m-auto  py-20 px-5 ">
        <div className="mx-auto max-sm:text-center max-lg:place-items-center grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className="max-w-75">
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
                <input type="text" className="form-control" id="mail" />
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
          <div className="">
            {/* <img src={map.src} className="rounded-xl"/> */}
            <div className="flip-card1">
              <div className="flip-card-inner1 ">
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
                  <button
                    type="button"
                    className="btn btn-success w-72 m-auto position-absolute right-40"
                  >
                    <span className="text-4xl">Get Directions</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
