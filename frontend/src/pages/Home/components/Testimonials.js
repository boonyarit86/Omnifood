import React from "react";
import "./Testimonials.scss";

function Testimonials() {
  return (
    <section className="section-testimonials" id="testimonials">
      <div className="testimonials__container">
        <span className="subheading">Testimonials</span>
        <h2 className="heading-secondary">Once you try it, you can't go back</h2>

        <div className="testimonials">
          {testimonials.length !== 0 &&
            testimonials.map((testimonial, index) => (
              <figure className="testimonial" key={index}>
                <img
                  className="testimonial__img"
                  alt={testimonial.img.caption}
                  src={testimonial.img.url}
                />
                <blockquote className="testimonial__text">
                  {testimonial.description}
                </blockquote>
                <p className="testimonial__name">&mdash; {testimonial.username}</p>
              </figure>
            ))}
        </div>
      </div>

      <div className="gallery">
        {Array.from({ length: 12 }, (v, index) => (
          <figure className="gallery__item" key={index}>
            <img
              src={`/images/gallery/gallery-${index + 1}.jpg`}
              alt="Photo of beautifully arranged food"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

let testimonials = [
  {
    img: {
      url: "images/customers/dave.jpg",
      caption: "Photo of customer Dave Bryson",
    },
    description:
      "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.",
    username: "Dave Bryson",
  },
  {
    img: {
      url: "images/customers/ben.jpg",
      caption: "Photo of customer Ben Hadley",
    },
    description:
      "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
    username: "Ben Hadley",
  },
  {
    img: {
      url: "images/customers/steve.jpg",
      caption: "Photo of customer Steve Miller",
    },
    description:
      "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
    username: "Steve Miller",
  },
  {
    img: {
      url: "images/customers/hannah.jpg",
      caption: "Photo of customer Hannah Smith",
    },
    description:
      "I got Omnifood for the whole family, and it frees up so much time!. Plus, everything is organic and vegan and without plastic.",
    username: "Hannah Smith",
  },
];
