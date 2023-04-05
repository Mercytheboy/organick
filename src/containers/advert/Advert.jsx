import React from "react";
import "./advert.css";
import Card from "../../components/cards/Card";
import banana from "../../assest/Image.png";
import fruit from "../../assest/Image2.png";

function Advert() {
  return (
    <div className="organick__advert">
      <Card
        img={banana}
        title="Natural!!"
        desc="Get Garden Fresh Fruits"
        style = {{color:'#fff'}}
      />
      <Card img={fruit} title="Offer!!!" desc="Get 10% off on Vegetables" />
    </div>
  ); 
}

export default Advert;
