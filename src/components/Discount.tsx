/* eslint-disable @next/next/no-img-element */
import slide1 from "../images/downloaded/4v.jpg";
import slide2 from "../images/downloaded/2v.jpg";
import slide3 from "../images/downloaded/16-v.jpg";
import {Link} from 'react-router-dom'
const callouts = [
  {
    name: "Glass",
    description: "Work from home accessories",
    imageSrc: slide1.src,
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Furniture",
    description: "Journals and note-taking",
    imageSrc: slide2.src,
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Aluminium",
    description: "Daily commute essentials",
    imageSrc: slide3.src,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  // {
  //   name: "Iron",
  //   description: "Daily commute essentials",
  //   imageSrc: slide3.src,
  //   imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
  //   href: "#",
  // },
];

export default function Example() {
  return (
    <div className="bg-gray-100">
      <div className="m-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className=" m-auto py-16  lg:max-w-none lg:pb-32 ">
          <h2 className="text-5xl font-bold text-gray-900 text-center">
            Trending Categories
          </h2>

          <div className="mt-6 gap-x-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative w-96 m-auto">
                <a href={"#"}>

                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src={callout.imageSrc}
                        alt={callout.imageAlt}
                        className="h-full w-full rounded-lg"
                      />
                    </div>
                    <div className="flip-card-back">
                      <img
                        src={callout.imageSrc}
                        alt={callout.imageAlt}
                        className="h-full w-full "
                      />
                    </div>
                  </div>
                  {/* <p className="text-base font-semibold text-gray-900">{callout.description}</p> */}
                </div>
                      <h2 className="mt-6 dis_work_h1 text-center text-gray-900" >{callout.name}</h2> 
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
