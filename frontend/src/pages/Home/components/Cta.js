import "./Cta.scss";

function Cta() {
  return (
    <section className="section-cta" id="cta">
      <div className="container">
        <div className="cta">
          <div className="cta__text-box">
            <h2 className="heading-secondary">Get your first meal for free!</h2>
            <p className="cta__text">
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>

            <form className="cta__form" name="sign-up">
              <div>
                <label htmlFor="full-name">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="John Smith"
                  name="full-name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="me@example.com"
                  name="email"
                  required
                />
              </div>

              <div>
                <label htmlFor="select-where">
                  Where did you hear from us?
                </label>
                <select id="select-where" name="select-where" required>
                  <option value="">Please choose one option:</option>
                  <option value="friends">Friends and family</option>
                  <option value="youtube">YouTube video</option>
                  <option value="podcast">Podcast</option>
                  <option value="ad">Facebook ad</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <button className="btn btn--form">Sign up now</button>
            </form>
          </div>
          <div
            className="cta__img-box"
            style={{
              backgroundImage:
                "linear-gradient(to right bottom, rgba(235, 151, 78, 0.35), rgba(230, 125, 34, 0.35)), url(/images/eating.jpg)",
            }}
            role="img"
            aria-label="Woman enjoying food"
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
