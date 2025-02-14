
import { useState } from "react";
import "./CartoonInfo.css";
import WonderWoman from "../assets/WonderWoman.jpg";
import Thor from "../assets/Thor.jpg";
import TheFlash from "../assets/TheFlash.jpg";
import SpiderMan from "../assets/SpiderMan.jpg";
import BatMan from "../assets/BatMan.jpg";
import BlackPanther from "../assets/BlackPanther.jpg";
import CaptionAmerica from "../assets/CaptionAmerica.jpg";
import IronMan from "../assets/IronMan.jpg";
import Hulk from "../assets/Hulk.jpg";

function CartoonInfo() {
  let [information, setInformation] = useState([
    { name: "Wonder Woman", Image: WonderWoman, email: "wonderwoman@gmail.com" },
    { name: "Iron Man", Image: IronMan, email: "ironman@gmail.com" },
    { name: "Spider Man", Image: SpiderMan, email: "spiderman@gmail.com" },
    { name: "Hulk", Image: Hulk, email: "hulk@gmail.com" },
    { name: "The Flash", Image: TheFlash, email: "flash@gmail.com" },
    { name: "Thor", Image: Thor, email: "thor@gmail.com" },
    { name: "Caption America", Image: CaptionAmerica, email: "capamerica@gmail.com" },
    { name: "Bat Man", Image: BatMan, email: "batman@gmail.com" },
    { name: "Black Panther", Image: BlackPanther, email: "blackpanther@gmail.com" },
  ]);

  let [searchBox, setSearchBox] = useState("");

  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchBox(e.target.value)}
          className="search-box"
        />
        <h1>Super Heroes</h1>
        <div className="grid-container">
          {information
            .filter((cartoon) =>
              cartoon.name.toLowerCase().includes(searchBox.toLowerCase())
            )
            .map((cartoon, index) => (
              <div key={index} className="card">
                <h3>{cartoon.name}</h3>
                <img src={cartoon.Image} alt={cartoon.name} />
                <p>{cartoon.email}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default CartoonInfo






























