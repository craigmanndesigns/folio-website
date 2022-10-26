import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import useWindowSize from "../hooks/useWindowSize";

import clsx from "clsx";

import Ufo from "../images/svgs/ufo.svg"

const InterestBg = ({ }) => {
  const { height } = useWindowSize();
  const scrollPos = height * 2;

  useEffect(() => {
    var frame_count = 14, offset_value = 64;

    gsap.set('.bigfoot', { left: "50%", })
    gsap.set('.ufo', { scale:0, left:"0%", top:"0%" })


    let intT = gsap.timeline({
      scrollTrigger: {
        trigger: "#interests",
        start: "bottom bottom-=" + (scrollPos + 100) + "px",
        end: "bottom top-=" + (scrollPos + 200) + "px",
        scrub: true,
        // markers: true,
      }
    })
    intT.to(".bigfoot", { backgroundPosition: (-offset_value * frame_count * 2) + "px 50%", ease: "steps(" + frame_count + ")", left: "95%", },".ufo", {scale:1, translateX:"100%", translateY:0}, 0)

    intT.to(".ufo", {scale:1.3, left:"20%", top:"10%"}, 0)
    intT.to(".ufo", {scale:0, left:"100%", top:"0%"}, ">")
  }, [height])
  

  return (
    <div className={clsx('bg_anim interests')}>
      <div className={clsx('foreground')} />
      <div className={clsx('bigfoot')} />
      <Ufo />
    </div>
  );
};

export default InterestBg;