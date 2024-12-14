import hero from "./images/about-hero.png";

export default function About() {
  return (
    <>
      <div className="about-container">
        <img src={hero} alt="about-hero" />
        <div className="text-area">
          <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉) Our
            team is full of vanlife enthusiasts who know firsthand the magic of
            touring the world on 4 wheels.
          </p>
        </div>
        <div className="order-area">
          <h1>Your destination is waiting. Your van is ready.</h1>
          <button>Explore our vans</button>
        </div>
      </div>
    </>
  );
}
