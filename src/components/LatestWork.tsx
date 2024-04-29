/* eslint-disable @next/next/no-img-element */
// import Video from 'next-video';
// import Videoplay from '../videos/Work.mp4';
import slide1 from '../images/downloaded/7.webp'
import slide2 from '../images/downloaded/8.webp'
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

export default function LatestWorks() {
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
                  src="https://lh3.googleusercontent.com/pw/AP1GczNTaRyu2SsdBq3k7_CRMo9Qun8WhEkNTmB_foa_ExGyJGuiozLgaiXbSgxauxwT3UDE9tJKrtMHNYuNn5AOvdkkGlLAuHsdpT-1H8YxsRqylDNhOk2dvnWozrl30GJ4LrakNg4D4EB-txfLyYiwpphk=w927-h618-s-no-gm?authuser=0"
                  alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                  className="rounded-lg bg-gray-100 work-video"
                />
              </div>
              <div className="flip-card-back">
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczNUFgd7dQisyFR2qiuVLrT_nxYU2m93aXsyM6cYB-EPyDvMokswegqQ1U4_8LNb8h1TRcKMkdkhtN9f8uXFrttopAY6XR67OfGj5w8efH7g7rXfdgi-_uROozP3OaDRXdkA5gGhuDOGmjw0ICXuRFjg7N_gINpSehY5TTJhFEDS0KFNKdK9Xg9kTPRj-DX8d6US7kru8pANn_cpy1LYUWhvCAHaXQDQGKxbbG1mZmLVToXBZD57_VkCVmS3mKRMQZWkk8FC0Y8fV_Fa-IYxGvGjhDgmIiHb8Nosw-qxJzCHGz_hIXakamRmayz5rBZfDQpcywjWLxyzBVLQwSJyuxvh2lkjxvhxwEy79JS-enm3bWvppEBVXXucSZNO4PT_1Tsr4Xw82hbZUOfdcflJkMXvzcfu8s3faYYah4W6GGlaio9SxDCiZfXRgroYnCpIhC0Udy_Fy9O5QaOYSgzHoSLbU4zZKZOxSszwmPilc91XhmMKngEvroFMi1VLXVDxvSygZCLg6SyJ0O7OytJiRsRbiICRpCY2qKSwTZVztwDZdT0cl3Wxo5zJ_h36vsTWJejUxbKH30HWxFkLBnlZAyxerzthrldU9l4DqRXor7YmTztfFh1spCkZDCSwds371doU0qamWXGVIhZFu2SOe5W_RgoZ2SREcc1lYULhC1NYLT1ujyv7pwQHCFSof2w5cQgHqQ5EawkSz9ZHgf0hjt1Sup9gcQUBsiCQBeUIDG86RRCkD8EHtZ8GDaFdf_iuC21PmpNJ1Y5t_ieV3HFwRUIUlmASGLwwJyjdaWkAEuQETIexecel8PLKWKv8OxsFhcohroSLZpTFThoK9bAoBpRgjG1bKQIP7ZRMrB9prKT6XnlXa0FV538Mo2Jfct1oyeov3LncejztDrHlIEf_aO3POwe7wXIs0wr0brrEsUVFHRrFZKl1z2nw8Ni6HLaVuBbUG8HIO692RwBluiIKxPYXsYD860jJGIvKhLet2qqLGGyTKrjWQYlif-msujRHnZWZe5nZhuKiVjrCZyID3AGqTy_ryO3IkoB4uw=w927-h618-s-no-gm?authuser=0"
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
