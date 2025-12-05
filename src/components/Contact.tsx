/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import map from "../images/map.webp";
export default function Contact() {
  return (
    <>
      <div id="contact" className="bg-gradient-to-br from-white via-purple-50 to-blue-50 m-auto py-20 px-5">
        <div className="mx-auto max-sm:text-center max-lg:place-items-center grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className="max-w-75">
            <h1 className="text-center text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">Get In Touch</h1>
            <p className="text-center text-gray-600 mb-8 text-lg">Have a project in mind? Contact us for a free consultation and quote.</p>
            <div className="line">
              <div className="form-group mb-6">
                <label htmlFor="usr" className="text-xl font-semibold text-gray-700 mb-2 block">
                  Name
                </label>
                <input type="text" className="form-control w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-all duration-300" id="usr" placeholder="Your Name" />
              </div>
              <div className="form-group mb-6">
                <label htmlFor="mail" className="text-xl font-semibold text-gray-700 mb-2 block">
                  E-mail
                </label>
                <input type="email" className="form-control w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-all duration-300" id="mail" placeholder="your@email.com" />
              </div>
              <div className="form-group mb-6">
                <label htmlFor="comment" className="text-xl font-semibold text-gray-700 mb-2 block">
                  Message
                </label>
                <textarea
                  className="form-control w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-all duration-300"
                  rows={5}
                  id="comment"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button type="button" className="btn btn_color text-white px-8 py-4 mb-5 rounded-xl font-semibold text-lg w-full">
                <span>Send Message</span>
              </button>
              <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg">
                <p className="text-gray-800 font-bold text-xl mb-4 text-center">Or reach us directly</p>
                <div className="space-y-3">
                  <p className="text-gray-700 flex items-center justify-center gap-2">📞 <span className="font-medium">+91-9828101833</span></p>
                  <p className="text-gray-700 flex items-center justify-center gap-2">📧 <span className="font-medium">jangidpooranmal01@gmail.com</span></p>
                </div>
              </div>
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
