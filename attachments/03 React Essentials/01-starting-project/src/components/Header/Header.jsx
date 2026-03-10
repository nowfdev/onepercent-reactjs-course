import React from "react";
import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const Header = () => {
  const reactDesc = ["Fundametal", "Core", "Crucial"];
  const description = reactDesc[getRandomWord(2)];
  function getRandomWord(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

export default Header;
