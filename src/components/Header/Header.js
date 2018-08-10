import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
  {/* Base Memory Game */}
    <div className="title animated slideInDown delay-2s">{props.children}</div>
    <div className="scores animated slideInRight delay-2s">
       Score: {props.score}  |  Highscore: {props.highscore}
    </div>
  </div>
);

export default Header;