/* eslint-disable @next/next/no-img-element */
import slide1 from "../images/downloaded/4v.jpg";
import slide2 from "../images/downloaded/2v.jpg";
import slide3 from "../images/downloaded/16-v.jpg";
import Link from "next/link";
const callouts = [
  {
    id: 1,
    name: "Glass",
    description: "Work from home accessories",
    imageSrc: slide1.src,
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#glass",
  },
  {
    id: 2,
    name: "Furniture",
    description: "Journals and note-taking",
    imageSrc: slide2.src,
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#furniture",
  },
  {
    id: 3,
    name: "Aluminium",
    description: "Daily commute essentials",
    imageSrc: slide3.src,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#aluminium",
  },
  {
    id: 4,
    name: "Iron",
    description: "Daily commute essentials",
    imageSrc: slide3.src,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#iron",
  },
];

export default function Category() {
  return (
    <div className="bg-gray-100">
      <div className="m-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className=" m-auto py-16  lg:max-w-none lg:pb-32 ">
          <h2 className="text-5xl font-bold text-black text-center">
            Trending Categories
          </h2>

          <div className="mt-6 gap-x-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div
                key={callout.id}
                className="group relative w-97 m-auto"
              >
                <div className="">
                  <Link href={callout.href}>
                  <div className="flip-card">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full rounded-lg"
                    />
                  </div>
                  <h2 className="mt-6 dis_work_h1 text-center text-black">
                    {callout.name}
                  </h2>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
