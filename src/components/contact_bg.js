import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import useWindowSize from "../hooks/useWindowSize";
import useMousePosition from "../hooks/useMousePosition";

import clsx from "clsx";
import Planchette from "../images/svgs/planchette.svg"
import Ouija from "../images/svgs/ouija_1.svg"

const ContactBg = ({ }) => {
  const mousePosition  = useMousePosition();
  const [onOuija, setOnOuija] = useState(false);
  const [planchettePosition, setPlanchettePosition] = useState();
  
  // let planchettePosition;


  useEffect(() => {
    if (onOuija) {
      setPlanchettePosition(
        {
          left:mousePosition.x,
          top: mousePosition.y,
        })
        console.log(onOuija)
    }
  }, [mousePosition])
  
  function turnOnFollow () {
    setOnOuija(true);
  }
  function turnOffFollow () {
    setOnOuija(false);
  }
  return (
    <div className={clsx('contact')}>
      <Planchette className={clsx('planchette')} style={planchettePosition} />
      <div className={clsx('ouija', onOuija && 'hide-cursor')} onMouseEnter={turnOnFollow} onMouseLeave={turnOffFollow}>
        <Ouija />
      </div>
    </div>
  );
};

export default ContactBg;