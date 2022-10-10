import React from "react";

const Menu = ({props, setPopup}) => {

  return (
    <nav>
      <div className={props ? "menubg overlay" : "menubg"}></div>
      <div className={props ? "menu overlay" : "menu"}>
        <button onClick={() => setPopup(false)}>close</button>
        <ul className="menu-content">
          <a href="/"><li>Home</li></a>
          <a href="#"><li>Work</li></a>
          <a href="#get_in_touch"><li>Get in touch</li></a>
        </ul>
      </div>
    </nav>
  );
};
 
export default Menu;