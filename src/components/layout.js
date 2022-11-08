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
import ContactBg from "./contact_bg"




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
  const parent = { width: width, height: height }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // let sections = gsap.utils.toArray(".to-right");

    // gsap.to(sections, {
    //   xPercent: -100 * (sections.length - 1),
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".section-layout",
    //     pin: true,
    //     scrub: 1,
    //     snap: 1 / (sections.length - 1),
    //     // base vertical scrolling on how wide the container is so it feels more natural.
    //     start: "0",
    //     end: "+=3000",
    //   }
    // });
    let sections = gsap.utils.toArray(".to-right");
    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 0),
      ease: "none", // <-- IMPORTANT!
      scrollTrigger: {
        trigger: ".section-layout",
        pin: true,
        scrub: 0.1,
        snap: directionalSnap(1 / (sections.length - 0)),
        end: "+=3000"
      }
    });
    function directionalSnap(increment) {
      let snapFunc = gsap.utils.snap(increment);
      return (raw, self) => {
        let n = snapFunc(raw);
        return Math.abs(n - raw) < 1e-4 || (n < raw) === self.direction < 0 ? n : self.direction < 0 ? n - increment : n + increment;
      };
    }

  }, []);

  return (
    // <div className="outer-wrapper">
    //   <div className="section-wrapper" style={parent}>
    //     <div className="section-nav" style={{ width: width }}>
    //       <a href="#intro"><button className={clsx(buttonStyles.buttonTertiary)}>Intro</button></a>
    //       <a href="#work"><button className={clsx(buttonStyles.buttonTertiary)}>Work</button></a>
    //       <a href="#experience"><button className={clsx(buttonStyles.buttonTertiary)}>Experience</button></a>
    //       <a href="#interests"><button className={clsx(buttonStyles.buttonTertiary)}>Interests</button></a>
    //       <a href="#get_in_touch"><button className={clsx(buttonStyles.buttonTertiary)}>Get in touch</button></a>
    //     </div>
    //     <div className="pin-wrap">
    //       <div className="section-layout">{children}</div>
    //       <footer>
    //         <div class="scrollbar"></div>
    //       </footer>
    //     </div>
    //     <div className="final">
    //       hi there
    //     </div>
    //   </div>

    // </div>
    <>
      <div className="section-nav" style={{ width: width }}>
        <a href="#intro"><button className={clsx(buttonStyles.buttonTertiary)}>Intro</button></a>
        <a href="#work"><button className={clsx(buttonStyles.buttonTertiary)}>Work</button></a>
        <a href="#experience"><button className={clsx(buttonStyles.buttonTertiary)}>Experience</button></a>
        <a href="#interests"><button className={clsx(buttonStyles.buttonTertiary)}>Interests</button></a>
        <a href="#get_in_touch"><button className={clsx(buttonStyles.buttonTertiary)}>Get in touch</button></a>
      </div>
      <div className="section-layout">{children}</div>
      <div className="final">
        <ContactBg />
      </div>
    </>
  )
}





Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout