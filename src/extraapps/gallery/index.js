import React from "react";
import "./js/app.js";
import "./css/style.css";
import BeefBurger from "../../assets/img/beefBurger.jpg";
import BeefSandwich from "../../assets/img/beefSandwich.jpg";
import TripleBeefBurger from "../../assets/img/tripleBeefBurger.jpg";
import OneBurgerSet from "../../assets/img/oneBurgerSet.jpg";
import SpicyBurger from "../../assets/img/spicyBurger.jpg";
import DoubleCheese from "../../assets/img/doubleCheeseburger.jpg";

function Gallery() {
  const panels = document.querySelectorAll(".panel");
  function addActive(e) {
    e.preventDefault();
    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
    } else {
      removeactivepreclass();
      e.target.classList.add("active");
    }
  }
  async function removeactivepreclass() {
    panels.forEach((panel) => {
      if (panel.classList.contains("active")) {
        panel.classList.remove("active");
      }
    });
  }

  return (
    <div className="gallery-container">
      <div
        className="panel"
        onClick={(e) => addActive(e)}
        style={{ backgroundImage: `url(${BeefBurger})` }}
      >
        <h3>Beef Burger</h3>
      </div>

      <div
        className="panel"
        onClick={(e) => addActive(e)}
        style={{ backgroundImage: `url(${BeefSandwich})` }}
      >
        <h3>Beef Hotdog</h3>
      </div>

      <div
        className="panel"
        onClick={(e) => addActive(e)}
        style={{ backgroundImage: `url(${TripleBeefBurger})` }}
      >
        <h3>Triple Beef Burger</h3>
      </div>

      <div
        className="panel"
        onClick={(e) => addActive(e)}
        style={{ backgroundImage: `url(${DoubleCheese})` }}
      >
        <h3>Double Cheese </h3>
      </div>

      <div
        className="panel"
        onClick={(e) => addActive(e)}
        style={{ backgroundImage: `url(${SpicyBurger})` }}
      >
        <h3>Spicy Burger</h3>
      </div>
    </div>
  );
}
export default Gallery;
