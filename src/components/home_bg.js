import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Window from '../images/window.svg'

const HomeBg = ({  }) => {
  gsap.registerPlugin(ScrollTrigger);

  let sections = gsap.utils.toArray(".main-sections");
  

  useEffect(() => {
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".section-layout",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        // markers: true,
        end: "+=3500",
      }
    });

    gsap.timeline({defaults: {duration: 1},
      scrollTrigger: {
        trigger: "#intro_id",
        scrub: true,
        start: "top center",
        end: "bottom center",
        markers: true,
      }})
    
    
  }, []);
  
  return (
    <>
    <Window />
    </>
  );
};
 
export default HomeBg;