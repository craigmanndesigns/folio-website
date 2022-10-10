import React, { useEffect } from "react";
import PropTypes from "prop-types"
import { storyblokInit, apiPlugin } from "gatsby-source-storyblok"
import useWindowSize from "../hooks/useWindowSize";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../styles/main.scss"
import * as buttonStyles from "../components/styles/button.module.scss"

import Teaser from './Teaser'
import configuration from '../../gatsby-config'
import Feature from "./feature"
import Button from "./button"
import Section from "./section"
import BigText from "./bigtext";
import Content from "./content";
import Carousel from "./carousel";
import Card from "./card";
import ContentContainer from "./contentContainer";




const sbConfig = configuration.plugins.find((item) => item.resolve === 'gatsby-source-storyblok')
 
storyblokInit({
  accessToken: sbConfig.options.accessToken,
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    feature: Feature,
    button: Button,
    section: Section,
    bigtext: BigText,
    content: Content,
    carousel: Carousel,
    card: Card,
    contentContainer: ContentContainer,
  }
});
 
const Layout = ({ children }) => {
  gsap.registerPlugin(ScrollTrigger);

  const { width, height } = useWindowSize();
  const parent  = { width: width, height: height}
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(".to-right");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".section-layout > div",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        start:"0",
        end: "+=3500",
      }
    });

    
  }, []);

//   useEffect(() => {

// //const scrubValue = true;
// const scrubValue = 0.5;

// let container = document.querySelector('.section-layout')

// const scrollBar = gsap.to('.scrollbar', { x: () => { return window.innerWidth - (150 + 20) }, ease: "none" })

// ScrollTrigger.create({
//     trigger: ".section-layout",
//     start: "top top",
//     end: () => (container.scrollWidth - window.innerWidth),
//     pin: true,
//     anticipatePin: 1,
//     scrub: scrubValue,
//     animation: scrollBar,
//     invalidateOnRefresh: true,
// })



// let thumbNails = gsap.utils.toArray(".to-right");

// thumbNails.forEach((thumb, i) => {
 
//   if (thumb.classList.contains('intro')) {
                
//     function prevAll(element) {
//       var result = [];

//       while (element = element.previousElementSibling)
//           result.push(element);
//       return result;
//     }    
    
//     console.log(prevAll(thumb))
    
//     var totalWidthToMove;
    
//     function getTotalWidthToMove() {
        
//       totalWidthToMove = 0;
      
//       prevAll(thumb).forEach((thumbBefore, i) => {

//         let style = thumbBefore.currentStyle || window.getComputedStyle(thumbBefore);      
//         let marginRight = parseInt(style.marginRight);

//         totalWidthToMove += thumbBefore.offsetWidth + marginRight;

//       });    

//       return totalWidthToMove;
      
//     }
//     //getTotalWidthToMove();
//     //console.log(totalWidthToMove)
    
//     gsap.to(thumb, {
//       x: () => { return - getTotalWidthToMove() },
//       ease: "none",
//       scrollTrigger: {
//         trigger: ".section-layout > div",
//         start: 'top top',
//         scrub: scrubValue,
//         invalidateOnRefresh: true,
//         end: () => "+=" + getTotalWidthToMove(),
//       }
//     });
    
//   }
//   else {
    
//     gsap.to(thumb, {
//       x: () => { return - (container.scrollWidth) },
//       ease: "none",
//       scrollTrigger: {
//         trigger: ".section-layout > div",
//         start: 'top top',
//         scrub: scrubValue,
//         invalidateOnRefresh: true,
//         end: () => "+=" + (container.scrollWidth),
//       }
//     });
    
//   }
    
//   //console.log(thumb.offsetWidth)
  
// });
//   }, []);
  return (
    <div className="outer-wrapper">
        <div className="section-wrapper" style={parent}>
          <div className="section-nav" style={{width: width}}>
            <a href="#intro"><button className={clsx(buttonStyles.buttonTertiary)}>Intro</button></a>
            <a href="#work"><button className={clsx(buttonStyles.buttonTertiary)}>Work</button></a>
            <a href="#experience"><button className={clsx(buttonStyles.buttonTertiary)}>Experience</button></a>
            <a href="#interests"><button className={clsx(buttonStyles.buttonTertiary)}>Interests</button></a>
            <a href="#get_in_touch"><button className={clsx(buttonStyles.buttonTertiary)}>Get in touch</button></a>
          </div>
          <div className="pin-wrap">
            <div className="section-layout">{children}</div>
          <footer>
            <div class="scrollbar"></div>
          </footer>
          </div>
        </div>
    </div>
  )
}
 
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
 
export default Layout