import React, { useState, useEffect } from "react";

const Menu = ({props, setPopup}) => {

  return (
    <div className={props ? "menu overlay" : "menu"}>
      <button onClick={() => setPopup(false)} >open</button>
      <ul className="menu-content">
        <a href="/"><li>Home</li></a>
        <a href="#"><li>Work</li></a>
        <a href="#get_in_touch"><li>Get in touch</li></a>
      </ul>
    </div>
  );
};
 
export default Menu;