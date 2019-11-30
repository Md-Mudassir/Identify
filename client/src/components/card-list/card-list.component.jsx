import React from "react";
import "./card-list.css";
import { Card } from "../card/card.component";

export const CardList = props => {
  return (
    <div className="card-list">
      <Card />
      <Card />
      <Card />
      <Card />
      <h2>hello</h2>
    </div>
  );
};
