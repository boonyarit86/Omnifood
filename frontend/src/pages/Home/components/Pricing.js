import "./Pricing.scss";

function Pricing() {
  return (
    <section className="section-pricing" id="pricing">
      <div className="container">
        <span className="subheading">Pricing</span>
        <h2 className="heading-secondary">Eating well without breaking the bank</h2>
      </div>

      <div className="container grid grid--2-cols margin-bottom-md">
        <div className="pricing__plan pricing__plan--starter">
          <header className="plan__header">
            <p className="plan__name">Starter</p>
            <p className="plan__price">
              <span>$</span>399
            </p>
            <p className="plan__text">per month. That's just $13 per meal!</p>
          </header>
          <ul className="list">
            <li className="list__item">
              <ion-icon class="list__icon" name="checkmark-outline"></ion-icon>
              <span>1 meal per day</span>
            </li>
            <li className="list__item">
              <ion-icon class="list__icon" name="checkmark-outline"></ion-icon>
              <span>Order from 11am to 9pm</span>
            </li>
            <li className="list__item">
              <ion-icon class="list__icon" name="checkmark-outline"></ion-icon>
              <span>Delivery is free</span>
            </li>
            <li className="list__item">
              <ion-icon class="list__icon" name="close-outline"></ion-icon>
            </li>
          </ul>
          <div className="plan__sing-up">
            <a href="#" className="btn btn--full">
              Start eating well
            </a>
          </div>
        </div>

        <div className="pricing__plan pricing__plan--complete">
          <header className="plan__header">
            <p className="plan__name">Complete</p>
            <p className="plan__price">
              <span>$</span>649
            </p>
            <p className="plan__text">per month. That's just $11 per meal!</p>
          </header>
          <ul className="list">
            <li className="list__item">
              <ion-icon class="list__icon" name="checkmark-outline"></ion-icon>
              <span>
                <strong>2 meals</strong> per day
              </span>
            </li>
            <li className="list__item">
              <ion-icon class="list__icon" name="checkmark-outline"></ion-icon>
              <span>
                Order <strong>24/7</strong>
              </span>
            </li>
            <li className="list__item">
              <ion-icon class="list__icon" name="checkmark-outline"></ion-icon>
              <span>Delivery is free</span>
            </li>
            <li className="list__item">
              <ion-icon class="list__icon" name="checkmark-outline"></ion-icon>
              <span>Get access to latest recipes</span>
            </li>
          </ul>
          <div className="plan__sing-up">
            <a href="#" className="btn btn--full">
              Start eating well
            </a>
          </div>
        </div>
      </div>

      <div className="container grid">
        <aside className="plan__details">
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </aside>
      </div>

      <div className="container grid grid--4-cols">
        {features.length !== 0 &&
          features.map((feature, index) => (
            <div className="feature" key={index}>
              <ion-icon class="feature__icon" name={feature.iconName}></ion-icon>
              <p className="feature__title">{feature.title}</p>
              <p className="feature__text">{feature.text}</p>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Pricing;

let features = [
  {
    title: "Never cook again!",
    text: "Our subscriptions cover 365 days per year, even including major holidays.",
    iconName: "infinite-outline",
  },
  {
    title: "Local and organic",
    text: "Our cooks only use local, fresh, and organic products to prepare your meals.",
    iconName: "nutrition-outline",
  },
  {
    title: "No waste",
    text: "All our partners only use reusable containers to package all your meals.",
    iconName: "leaf-outline",
  },
  {
    title: "Pause anytime",
    text: "Going on vacation? Just pause your subscription, and we refund unused days.",
    iconName: "pause-outline",
  },
];
