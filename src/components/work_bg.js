import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WorkBg = ({ }) => {

  useEffect(() => {
    var frame_count = 8,
      offset_value = 308;
    gsap.set(".card", { opacity: 0, y: 50 })
    let workT = gsap.timeline({
      scrollTrigger: {
        trigger: "#work",
        start: "bottom bottom-=200px",
        end: "bottom top+=160px",
        scrub: true,
        // markers: true,
      }
    })
    workT.to(".bg_anim.work", {
      backgroundPosition: (-offset_value * frame_count * 2) + "px 50%",
      ease: "steps(" + frame_count + ")",
    })
    ScrollTrigger.batch(".card", {
      onEnter: (elements, triggers) => {
        workT.to(elements, { opacity: 1, stagger: 0.15 });
      },
    });
  }, [])

  return (
    <div className="bg_anim work"></div>
  );
};

export default WorkBg;