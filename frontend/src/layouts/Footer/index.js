import "./index.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="container grid grid--footer">
        <div className="logo__col">
          <a href="#" className="footer__logo">
            <img alt="Omnifood logo" src="/images/omnifood-logo.png" />
          </a>

          <ul className="social__links">
            <li>
              <a className="footer__link" href="#">
                <ion-icon class="social__icon" name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li>
              <a className="footer__link" href="#">
                <ion-icon class="social__icon" name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a className="footer__link" href="#">
                <ion-icon class="social__icon" name="logo-twitter"></ion-icon>
              </a>
            </li>
          </ul>

          <p className="copyright">
            Copyright &copy; <span className="year">2022</span> by Omnifood, Inc.
            All rights reserved.
          </p>
        </div>

        <div className="address__col">
          <p className="footer__heading">Contact us</p>
          <address className="contacts">
            <p className="address">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a className="footer__link" href="tel:415-201-6370">
                415-201-6370
              </a>
              <br />
              <a className="footer__link" href="mailto:hello@omnifood.com">
                hello@omnifood.com
              </a>
            </p>
          </address>
        </div>

        <nav className="nav__col">
          <p className="footer__heading">Account</p>
          <ul className="footer__nav">
            <li>
              <a className="footer__link" href="#">
                Create account
              </a>
            </li>
            <li>
              <a className="footer__link" href="#">
                Sign in
              </a>
            </li>
            <li>
              <a className="footer__link" href="#">
                iOS app
              </a>
            </li>
            <li>
              <a className="footer__link" href="#">
                Android app
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav__col">
          <p className="footer__heading">Company</p>
          <ul className="footer__nav">
            <li>
              <a className="footer__link" href="#">
                About Omnifood
              </a>
            </li>
            <li>
              <a className="footer__link" href="#">
                For Business
              </a>
            </li>
            <li>
              <a className="footer__link" href="#">
                Cooking partners
              </a>
            </li>
            <li>
              <a className="footer__link" href="#">
                Careers
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav__col">
          <p className="footer__heading">Resources</p>
          <ul className="footer__nav">
            <li>
              <a className="footer__link" href="#">
                Recipe directory{" "}
              </a>
            </li>
            <li>
              <a className="footer__link" href="#">
                Help center
              </a>
            </li>
            <li>
              <a className="footer__link" href="#">
                Privacy & terms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
