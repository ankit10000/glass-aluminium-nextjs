/* eslint-disable @next/next/no-img-element */
import slide1 from "../images/downloaded/4v.webp";
import slide2 from "../images/downloaded/2v.webp";
import slide3 from "../images/downloaded/16-v.webp";
import Link from "next/link";
const callouts = [
  {
    id: 1,
    name: "Glass",
    description: "Work from home accessories",
    imageSrc: "https://lh3.googleusercontent.com/pw/AP1GczOnWfKWeOemfXrFk0LXfR41TMAyaaHLkOEtUCIVoiNn8M8KXcN-9fbh1fqexgfNNqPxww6Y4FvUaiIGO41jn6ZqxxMcSSKFU9TOcs3noNkNldcCtOMiJC-9iudXXw_JkSHosEQf1gepqdpKX8PtcZBs=w926-h618-s-no-gm?authuser=0",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#glass",
  },
  {
    id: 2,
    name: "Furniture",
    description: "Journals and note-taking",
    imageSrc: "https://lh3.googleusercontent.com/pw/AP1GczO0Vt7xp8Ap_4sJdH9aQXoVTzwj3l9wQ8nXlSRTMM3nWPv6PDbNvZ8j9CdQGHnPxCyyRTWvOQw83hJ71u-tvPz9etrmjXrACh7H5PLtFPLuaSfPpMPEv3qAX0lT-gI-ZV980y0h42QC8Wg-GsDgVfV28IdweiLrRFoaM1T6A8p_J4-wVa879b7fQQFsM85h08tn7iNMvWc0y0KuaLBVKXVIq_oMjjv_1APZfj-HMlaKcj7Zx3WuEaehrFdo9_-7Ih5xVyIR5lPvBmjRVd_KXgyfsPSc-ea-6pP8j6avu-ZX3RRIYzdWMY7c-QFQu8Tf1Rl5C7R7zfrt4-RsRDSHOUmmD2IYFMh3IucmmQxy7C35l17dxW1V34j5tJQqpToMD0ybdB5UqyKpXwAJ1zk25eJ-3fO-OCrxH48KziYMn1fhi-52rWACWgn9P_Sbop0ejTS9G6oU1n3-OifP5HDdA_Rsvcf1oFDv-R1X_QysQS82g0Ew6bmVSLuam9wedtyFKShgGeZMFmrI1DilI77u8NjrvNf-Fj2drrX4rX-fol4jWCoP6a_rSZhxPf1Nsn-bDKP8yIOG1aliHCfPmaESBMfv03FtF8asNgFLqnKFgH49-8IYvW7I2kRWl5Kgnkn2tWa8ttY5F6kmheeyqdQSx59Sm8Lzn0FkaZ690QVU_z9HdHsGazrMaTrjPENozokXc93FynfNAyG6BDOEn1bawGTTFg3FWxTFTm73p03VUdyvWF6JIRUxJRPxgB4aAb78_-n0rZQQAPpfcjkvAtRqpDyU8isLwEF2TpGuxqvzZz8fUEn41xRSsx0K2LttxYedtuL56sxj1ScweZYo9dk0HD-yyNSSgIR4kLFRRsuID1yQxQW_eu4eNP6SFcK0fPzJw6W9pVWfXaB6B2qIkSuz9yVhX6LiM25rcXtEaquWMNbbwLPLKKsgJmhRu0ujYd4jIJofOym_EBsHAT-ggrknltIwF-rXlRixmoq6GyQ7spkEgJxtMQQ2XL4zq2l18eumYBeueF0el3LAU9Vpeyb7u9Ro4rCWCzTQor5k=w618-h618-s-no-gm?authuser=0",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#furniture",
  },
  {
    id: 3,
    name: "Aluminium",
    description: "Daily commute essentials",
    imageSrc: "https://lh3.googleusercontent.com/pw/AP1GczMkuI-dNVTgeIoMuz-XQfiwNZZSADcJnaDQ5mDJC5oJcBTA3hBi7ifgJBfXrVlhtZNwgp9s_FJQOerzP6CV69wNpfCDYBhw4ayB_qIRwX2XIvYoE9vD0ICsome4hhWd5sCpNWXCnZUMj9GtGH3JpKn3=w691-h500-s-no-gm?authuser=0",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#aluminium",
  },
  {
    id: 4,
    name: "Iron",
    description: "Daily commute essentials",
    imageSrc: "https://i.pinimg.com/originals/79/92/96/7992968e3df23a326ad4e45e7519aff1.png",
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
