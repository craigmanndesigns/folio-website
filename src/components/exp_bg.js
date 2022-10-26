import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useWindowSize from "../hooks/useWindowSize";

import clsx from "clsx";
import Light from '../images/svgs/hanging_light.svg';

const ExpBg = ({ }) => {
  const { height } = useWindowSize();

  useEffect(() => {
    var frame_count = 15,
    offset_value = 280;
    gsap.set(".h-light-beam", { opacity: 0 })
    let expT = gsap.timeline({
      scrollTrigger: {
        trigger: "#experience",
        start: "bottom bottom-=" + (height + 100) + "px",
        end: "bottom top-=" + (height + 200) + "px",
        scrub: true,
        markers: true,
      }
    })
    expT.to(".h-light-beam", { opacity: 1 })
    expT.to(".h-light-beam", { opacity: 0 })
    expT.to(".h-light-beam", { opacity: 1 })
    expT.to(".h-light-beam", { opacity: 0 })
    expT.to(".h-light-beam", { opacity: 1 })
    expT.to(".h-light-beam", { opacity: 1 })
    expT.to(".h-light-beam", { opacity: 1 })
    expT.to(".bookshelf", {
      backgroundPosition: (-offset_value * frame_count * 2) + "px 50%",
      duration: 2,
      ease: "steps(" + frame_count + ")",
    }, 0)
  }, [height])

  return (
    <div className={clsx('bg_anim exp')}>
      <div className={clsx('hanging-light')}><Light /></div>
      <div className={clsx('bookshelf')}></div>
    </div>
  );
};

export default ExpBg;