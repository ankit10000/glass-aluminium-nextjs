/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import slide1 from "../images/downloaded/1.jpg";
import slide2 from "../images/downloaded/3.jpg";
import slide3 from "../images/downloaded/8.jpg";

function ControlledCarousel() {
  const callouts = [
    {
      name: "Glass Railling",
      description: "Work from home accessories",
      imageSrc: slide1.src,
      imageAlt:
        "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
      href: "#",
    },
    {
      name: "Study Setup",
      description: "Journals and note-taking",
      imageSrc: slide2.src,
      imageAlt:
        "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
      href: "#",
    },
    {
      name: "Bathroom",
      description: "Daily commute essentials",
      imageSrc: slide3.src,
      imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
      href: "#",
    },
  ];

  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide w-full"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner w-full">
        {callouts.map((callout) => (
          <div key={callout.name} className="carousel-item active">
            <img
              src={callout.imageSrc}
              className="d-block w-100 carsoul-img"
              alt="..."
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default ControlledCarousel;
