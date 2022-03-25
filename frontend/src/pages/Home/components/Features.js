import "./Features.scss";

function Features() {
  return (
    <section className="section-features">
      <div className="container">
        <h2 className="heading-features-in">As featured in</h2>
        <div className="features__logos">
          <img src="/images/logos/techcrunch.png" alt="Techcrunch logo" />
          <img
            src="/images/logos/business-insider.png"
            alt="Business Insider logo"
          />
          <img
            src="/images/logos/the-new-york-times.png"
            alt="The New York Times logo"
          />
          <img src="/images/logos/forbes.png" alt="Forbes logo" />
          <img src="/images/logos/usa-today.png" alt="USA Today logo" />
        </div>
      </div>
    </section>
  );
}

export default Features;
