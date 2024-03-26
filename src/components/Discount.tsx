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
      <div className="mx-auto width_discount px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl pb-16 sm:pb-24 lg:max-w-none lg:pb-32 lg:pt-20 ">
          <h2 className="text-5xl font-bold text-gray-900 text-center">
            Trending Categories
          </h2>

          <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3  lg:space-y-0 gap-y-28 ">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <a href={"#"}>

                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src={callout.imageSrc}
                        alt={callout.imageAlt}
                        className="h-full w-full rounded-lg"
                      />
                      <h2 className="mt-6 dis_work_h1 text-gray-900" >{callout.name}</h2>
                    </div>
                    <div className="flip-card-back">
                      <img
                        src={callout.imageSrc}
                        alt={callout.imageAlt}
                        className="h-full w-full "
                      />
                      <h2 className="mt-6 dis_work_h1 text-gray-900" >{callout.name}</h2>
                    </div>
                  </div>
                  {/* <p className="text-base font-semibold text-gray-900">{callout.description}</p> */}
                </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
