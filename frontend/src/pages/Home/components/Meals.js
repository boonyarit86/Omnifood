import React from "react";
import "./Meals.scss";

function Meals() {
  return (
    <section className="section-meals" id="meals">
      <div className="container center-text">
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>

      <div className="container grid grid--3-cols margin-bottom-md">
        {meals &&
          meals.map((meal, index) => (
            <div className="meal" key={index}>
              <img src={meal.img} className="meal__img" alt={meal.name} />
              <div className="meal__content">
                <div className="meal__tags">
                  {meal.tags.map((tag) => (
                    <span className={`tag tag--${tag}`} key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="meal__title">{meal.name}</p>
                <ul className="meal__attributes">
                  <li className="meal__attribute">
                    <ion-icon
                      class="meal__icon"
                      name="flame-outline"
                    ></ion-icon>
                    <span>
                      <strong>{meal.attributes.value}</strong>{" "}
                      {meal.attributes.unit}
                    </span>
                  </li>
                  <li className="meal__attribute">
                    <ion-icon
                      class="meal__icon"
                      name="restaurant-outline"
                    ></ion-icon>
                    <span>
                      NutriScore &reg; <strong>{meal.score}</strong>
                    </span>
                  </li>
                  <li className="meal__attribute">
                    <ion-icon
                      class="meal__icon"
                      name="star-outline"
                    ></ion-icon>
                    <span>
                      <strong>{meal.rating.avg}</strong> rating (
                      {meal.rating.total})
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          ))}

        <div className="diets">
          <h3 className="heading-tertiary">Works with any diet:</h3>
          <ul className="list">
            {diets &&
              diets.map((diet, index) => (
                <li className="list__item" key={index}>
                  <ion-icon
                    class="list__icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>{diet.name}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>

      <div className="container all-recipes">
        <a href="#" className="link">
          See all recipes &rarr;
        </a>
      </div>
    </section>
  );
}

export default Meals;

let diets = [
  { name: "Vegetarian" },
  { name: "Vegan" },
  { name: "Pescatarian" },
  { name: "Gluten-free" },
  { name: "Lactose-free" },
  { name: "Keto" },
  { name: "Paleo" },
  { name: "Low FODMAP" },
  { name: "Kid-friendly" },
];

let meals = [
  {
    img: "/images/meals/meal-1.jpg",
    name: "Japanese Gyozas",
    tags: ["vegetarian"],
    attributes: { value: 650, unit: "calories" },
    score: 74,
    rating: { total: 537, avg: 4.9 },
  },
  {
    img: "/images/meals/meal-2.jpg",
    name: "Avocado Salad",
    tags: ["vegan", "paleo"],
    attributes: { value: 650, unit: "calories" },
    score: 92,
    rating: { total: 441, avg: 4.8 },
  },
];
