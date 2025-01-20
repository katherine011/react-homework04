import React from "react";
import "./MainCard.css";
import Card from "../../__molecules/Card/Card";
import Wheat from "../../assets/icons/wheat.png";

const MainCard = (props) => {
  return (
    <div className="MainCard">
      <Card
        src={"src/assets/images/Pizza Photo.png"}
        wheat={"src/assets/icons/wheat.png"}
        fire={"src/assets/icons/fire.png"}
        h1={"Pepperoni Pizza"}
        text={
          "Premium pepperoni and cheese is made with real mozzarella on original hand-tossed crust."
        }
        p1={"265 Cal"}
        p2={"P/F/C: 12/10/31"}
        p3={"53.8 °C"}
        price1={"$23.90"}
        price2={"$29.90"}
      />
      <Card
        src={"src/assets/images/Tortellini Photo.png"}
        wheat={"src/assets/icons/wheat.png"}
        fire={"src/assets/icons/fire.png"}
        leaf={"src/assets/icons/leaf.png"}
        h1={"Tortellini"}
        text={
          "Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon, bolognese or marinara sauce."
        }
        p1={"270 Cal"}
        p2={"P/F/C: 18/4/41"}
        p3={"42.4 °C"}
        price1={"$17.90"}
        price2={"$22.90"}
      />
      <Card
        src={"src/assets/images/Strawberry cake Photo.png"}
        wheat={"src/assets/icons/wheat.png"}
        h1={"Strawberry Cake"}
        text={
          "Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer."
        }
        p1={"346 Cal"}
        p2={"P/F/C: 6/14/49"}
        p3={"13.9 °C"}
        price1={"$13.90"}
        price2={"$18.90"}
      />
    </div>
  );
};

export default MainCard;
