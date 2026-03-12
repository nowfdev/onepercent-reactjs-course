import React from "react";

const TabButton = (props) => {
  function clickHandler() {
    console.log("Hello World");
  }
  return (
    <li>
      <button onClick={props.onSelect}>{props.children}</button>
    </li>
  );
};

export default TabButton;
