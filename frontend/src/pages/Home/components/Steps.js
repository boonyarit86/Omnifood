import React from "react";
import "./Steps.scss";

function Steps() {
  return (
    <section className="section-how" id="how">
      <div className="container">
        <span className="subheading">How it works</span>
        <h2 className="heading-secondary">
          Your daily dose of health in 3 simple steps
        </h2>
      </div>

      <div className="container grid grid--2-cols grid--center-v">
        {steps.map((step, index) => {
          if (index % 2 === 0) {
            return (
              <React.Fragment key={index}>
                <div className="step__text-box">
                  <p className="step__number">0{index+1}</p>
                  <h3 className="heading-tertiary">
                    {step.title}
                  </h3>
                  <p className="step__description">
                   {step.description}
                  </p>
                </div>
                <div className="step__img-box">
                  <img
                    src={step.img.url}
                    className="step__img"
                    alt={step.img.description}
                  />
                </div>
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={index}>
                <div className="step__img-box">
                  <img
                    src={step.img.url}
                    className="step__img"
                    alt={step.img.description}
                  />
                </div>
                <div className="step__text-box">
                  <p className="step__number">0{index+1}</p>
                  <h3 className="heading-tertiary">
                    {step.title}
                  </h3>
                  <p className="step__description">
                   {step.description}
                  </p>
                </div>
              </React.Fragment>
            );
          }
        })}
      </div>
    </section>
  );
}

export default Steps;

let steps = [
  {
    id: "s1",
    title: "Tell us what you like (and what not)",
    description:
      "Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!.",
    img: {
      url: "/images/app/app-screen-1.png",
      description: "iPhone app preferences selection screen",
    },
  },
  {
    id: "s2",
    title: "Approve your weekly meal plan",
    description:
      "Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.",
    img: {
      url: "/images/app/app-screen-2.png",
      description: "iPhone app meal approving plan screen",
    },
  },
  {
    id: "s3",
    title: "Receive meals at convenient time",
    description:
      "Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!.",
    img: {
      url: "/images/app/app-screen-3.png",
      description: "iPhone app delivery screen",
    },
  },
];
