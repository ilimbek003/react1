import logo from "../../img/logo1.svg";
import vector from "../../img/Vector.svg";
import Vertor from "../../img/Vector (1).svg";
import Vertor1 from "../../img/Vector (2).svg";
import Vertor2 from "../../img/Vector (3).svg";

function Header() {
  return (
    <div className="header">
      <div className="conatiner">
        <div className="big">
          <div className="item">
            <img src={logo} />
            <img className="logo" src={vector} />
            <input className="input" placeholder="Найти игру" />
          </div>
          <div className="item">
            <img src={Vertor} />
            <a href="tel:+996 700-341-400" class="navbar">
              +996505003033{" "}
            </a>
          </div>
          <div className="item">
            <img src={Vertor1} />
            <img className="next" src={Vertor2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
