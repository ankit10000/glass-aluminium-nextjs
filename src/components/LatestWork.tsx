/* eslint-disable @next/next/no-img-element */
// import Video from 'next-video';
// import Videoplay from '../videos/Work.mp4';
import slide1 from '../images/downloaded/7.jpg'
import slide2 from '../images/downloaded/8.jpg'
const features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  {
    name: "Material",
    description:
      "Solid walnut base with rare earth magnets and powder coated steel card cover",
  },
  { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  { name: "Includes", description: "Wood card tray and 3 refill packs" },
  {
    name: "Considerations",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];

export default function Example() {
  return (
    <div className="bg-white ">
      <div className="mx-auto max-sm:text-center grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className=''>
          <h2 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl">
             Recent Work
          </h2>
          <p className="mt-4 text-gray-500">
            The walnut wood card tray is precision milled to perfectly fit a
            stack of Focus cards. The powder coated steel divider separates
            active cards from new ones, or can be used to archive important task
            lists.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-1 grid-rows-1 place-items-center">
          <div className="flip-card2 max-sm:justify-center">
            <div className="flip-card-inner1">
              <div className="flip-card-front">
                <img
                  src={slide1.src}
                  alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                  className="rounded-lg bg-gray-100 work-video"
                />
              </div>
              <div className="flip-card-back">
                <img
                  src={slide2.src}
                  alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                  className="rounded-lg bg-gray-100 work-video"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact"></div>
    </div>
  );
}
