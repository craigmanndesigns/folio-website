import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import useWindowSize from "../hooks/useWindowSize";
import useMousePosition from "../hooks/useMousePosition";

import clsx from "clsx";
import Planchette from "../images/svgs/planchette.svg"

const ContactBg = ({ }) => {
  const  mousePosition  = useMousePosition();

  useEffect(() => {

  }, [mousePosition])
  

  return (
    <div className={clsx('contact')}>
      <Planchette className={clsx('planchette')} style={{left:mousePosition.x, top: mousePosition.y}} />
    </div>
  );
};

export default ContactBg;