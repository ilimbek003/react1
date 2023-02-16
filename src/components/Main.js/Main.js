import React, { useState } from "react";
import "../../index-css/Main.css/Main.css";
import { Link } from "react-router-dom";
import img from "../../img/Vector (4).svg";
import img1 from "../../img/vk.svg";
import img2 from "../../img/fb.png";

function Main(props) {
  // const [cart, setcart] = useState(a)

  // function setcart () {
  //   cart.style.dyspley = 'block'
  // }

  return (
    <div>
      {props.name.map((el) => (
        <div className="catalog">
          <div className="container">
            <div class="a-header">
              <input
                type="checkbox"
                name="main-nav"
                id="main-nav"
                class="burger-check"
              />
              <label for="main-nav" class="burger menu">
                <span></span>
              </label>
              <ul className="catalog">
                <div class="popover__wrapper">
                  <a href="#">
                    <h2 class="popover__title">{el.name1}</h2>
                  </a>
                  <div class="popover__content">
                    <div class="modal-area">
                      <div>
                        <h3 className="all">Все категории</h3>
                      </div>
                      <div className="popover">
                        <h6 className="magic">Настольные игры</h6>
                        <div className="content">
                          <div className="modal-area">
                            <h2>Warhammer 40000</h2>
                            <div className="hammer ">
                              <div>
                                <h4>Альтернативные миниатюры (69)</h4>
                                <h4>Warhammer 40k (400) </h4>
                                <h4>Age of Sigmar (263) </h4>
                                <h4>Warcry (49) </h4>
                              </div>
                              <div>
                                <h4>Альтернативные миниатюры (69)</h4>
                                <h4>Warhammer 40k (400) </h4>
                                <h4>Age of Sigmar (263) </h4>
                                <h4>Warcry (49) </h4>
                              </div>
                              <div>
                                <h4>Альтернативные миниатюры (69)</h4>
                                <h4>Warhammer 40k (400) </h4>
                                <h4>Age of Sigmar (263) </h4>
                                <h4>Warcry (49) </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <h6 className="magic">Warhammer 4000</h6>
                      <h6 className="magic">Magic: the Gathering</h6>
                      <h6 className="magic">Аксессуары для игр</h6>
                      <h6 className="magic">Краски</h6>
                      <h6 className="magic">Товары для детей</h6>
                      <h6 className="magic">Аксессуары для моделизма</h6>
                    </div>
                  </div>
                </div>
                <li>
                  <Link to="/about">{el.name2}</Link>
                </li>
                <li>
                  <a href="example.html">{el.name3}</a>
                </li>
                <li>
                  <a href="example.html">{el.name4}</a>
                </li>
                <li>
                  <a href="example.html">{el.name5}</a>
                </li>
              </ul>
              <div className="images">
                <a href="https://www.instagram.com/bihotel/">
                  <img className="main" src={img} />
                </a>
                <a href="https://www.instagram.com/bihotel/">
                  <img src={img1} />
                </a>
                <a href="https://www.instagram.com/bihotel/">
                  <img src={img2} />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Main;
