import "./index.scss";

function Header() {
  return (
    <header className="header">
      <a href="#">
        <img
          className="header__logo"
          alt="Omnifood logo"
          src="/images/omnifood-logo.png"
        />
      </a>

      <nav className="main-nav">
        <ul className="main-nav__list">
          <li>
            <a className="main-nav__link" href="#how">
              How it works
            </a>
          </li>
          <li>
            <a className="main-nav__link" href="#meals">
              Meals
            </a>
          </li>
          <li>
            <a className="main-nav__link" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="main-nav__link" href="#pricing">
              Pricing
            </a>
          </li>
          <li>
            <a className="main-nav__link nav-cta" href="#cta">
              Try for free
            </a>
          </li>
        </ul>
      </nav>

      <button className="btn-mobile-nav">
        <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
      </button>
    </header>
  );
}

export default Header;
