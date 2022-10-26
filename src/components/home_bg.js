import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Window from '../images/svgs/window_1.svg'

const HomeBg = ({  }) => {
  
  useEffect(() => {
    // const horizontalSections = gsap.utils.toArray('.pin-wrap');

    // horizontalSections.forEach((section, i) => {
      // const thisPinWrap = section.querySelector('.section-layout > div');
  gsap.set("#clippath", {transformOrigin: 'top left', scaleY: 0, scaleX: 0.16, rotate: '66deg'})
  let t = gsap.timeline({
    scrollTrigger: {
      trigger: "#intro",
      // containerAnimation: scrollTween,
      scrub: true,
      start: "top top",
      end: "top top-=200px",
      // pin: thisPinWrap.querySelector('.intro'),
      // markers: true
    }
  })
  t.to("#clippath",{ scaleY: .7, duration: 0.5}, 0.3)
  t.to("#clippath",{ scaleY: 1, scaleX: 1, rotate: '0deg', duration: 1}, ">")
  t.to("#light", { opacity: 1, duration: 3}, "<");

  // });
  },[])

  return (
    <div className="bg_anim home">
      <Window />
    </div>
  );
};
 
export default HomeBg;