import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Window from '../images/window_1.svg'

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
        end: "+=3500",
      }
    });
    gsap.set("#clippath", {transformOrigin: 'top left', scaleY: 0, scaleX: 0.16, rotate: '66deg'})
    let t = gsap.timeline({
      scrollTrigger: {
        trigger: "#light",
        scrub: true,
        start: "top center",
        end: "top 35%",
        markers: true,
      }
    })
    // t 
    t.to("#clippath",{ scaleY: .7, duration: 0.5})
    t.to("#clippath",{ scaleY: 1, scaleX: 1, rotate: '0deg', duration: 1}, ">")
    t.to("#light", { opacity: 1, duration: 3}, "<");

    
    
  }, []);
  
  return (
    <div className="bg_anim home">
      <Window />
    </div>
  );
};
 
export default HomeBg;