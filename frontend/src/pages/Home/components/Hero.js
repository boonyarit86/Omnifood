import "./Hero.scss";

function Hero() {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero__text-box">
          <h1 className="heading-primary">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="hero__description">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <a href="#cta" className="btn btn--full margin-right-sm">
            Start eating well
          </a>

          <a href="#how" className="btn btn--outline">
            Learn more &darr;
          </a>
          <div className="delivered__meals">
            <div className="delivered__imgs">
              <img src="/images/customers/customer-1.jpg" alt="Customer photo" />
              <img src="/images/customers/customer-2.jpg" alt="Customer photo" />
              <img src="/images/customers/customer-3.jpg" alt="Customer photo" />
              <img src="/images/customers/customer-4.jpg" alt="Customer photo" />
              <img src="/images/customers/customer-5.jpg" alt="Customer photo" />
              <img src="/images/customers/customer-6.jpg" alt="Customer photo" />
            </div>
            <p className="delivered__text">
              <span>250,000+</span> meals delivered last year!
            </p>
          </div>
        </div>
        <div className="hero__img-box">
          <picture>
            <source srcset="/images/hero.webp" type="image/webp" />
            <source srcset="/images/hero-min.png" type="image/png" />

            <img
              src="/images/hero-min.png"
              className="hero__img"
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default Hero;
