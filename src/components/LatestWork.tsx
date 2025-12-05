/* eslint-disable @next/next/no-img-element */
// import Video from 'next-video';
// import Videoplay from '../videos/Work.mp4';
import slide1 from '../images/downloaded/7.webp'
import slide2 from '../images/downloaded/8.webp'
const features = [
  { name: "Custom Design", description: "Tailored solutions for your specific space and style requirements" },
  {
    name: "Quality Materials",
    description:
      "Premium wood, glass, aluminum, and iron materials sourced from trusted suppliers",
  },
  { name: "Expert Craftsmanship", description: "Skilled artisans with years of experience in furniture and interior work" },
  { name: "Onsite Installation", description: "Professional installation team ensuring perfect fit and finish" },
  { name: "Warranty", description: "Comprehensive warranty on all our manufactured products" },
  {
    name: "Timely Delivery",
    description:
      "Efficient project management ensuring on-time completion of your projects",
  },
];

export default function LatestWorks() {
  return (
    <div className="bg-white ">
      <div className="mx-auto max-sm:text-center grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className=''>
          <h2 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent sm:text-5xl">
             Why Choose Us
          </h2>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            With over 15 years of experience in furniture manufacturing and interior design,
            we bring expertise, quality, and reliability to every project. Our commitment to
            excellence has made us a trusted partner for homes and businesses alike.
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
                  src="/images/7.webp"
                  alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                  className="rounded-lg bg-gray-100 work-video"
                />
              </div>
              <div className="flip-card-back">
                <img
                  src="/images/8.webp"
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
