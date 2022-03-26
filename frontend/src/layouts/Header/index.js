import React, { useEffect } from "react";
import "./index.scss";

function Header() {
  useEffect(() => {
    ///////////////////////////////////////////////////////////
    // Make mobile navigation work
    const btnNavEl = document.querySelector(".btn-mobile-nav");
    const headerEl = document.querySelector(".header");

    btnNavEl.addEventListener("click", function () {
      headerEl.classList.toggle("nav-open");
    });

    ///////////////////////////////////////////////////////////
    // Smooth scrolling animation
    const allLinks = document.querySelectorAll("a:link");
    allLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");

        // Scroll back to top
        if (href === "#")
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });

        // Scroll to other links
        if (href !== "#" && href.startsWith("#")) {
          const sectionEl = document.querySelector(href);
          sectionEl.scrollIntoView({ behavior: "smooth" });
        }

        // Close mobile naviagtion
        if (link.classList.contains("main-nav__link"))
          headerEl.classList.toggle("nav-open");
      });
    });

    ///////////////////////////////////////////////////////////
    // Sticky navigation
    const sectionHeroEl = document.querySelector(".section-hero");
    const obs = new IntersectionObserver(
      function (entries) {
        const ent = entries[0];

        if (ent.isIntersecting === false) {
          document.body.classList.add("sticky");
        }

        if (ent.isIntersecting === true) {
          document.body.classList.remove("sticky");
        }
      },
      {
        // In the viewport
        root: null,
        threshold: 0,
        rootMargin: "-80px",
      }
    );
    obs.observe(sectionHeroEl);
  }, []);

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
        <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
      </button>
    </header>
  );
}

export default Header;
