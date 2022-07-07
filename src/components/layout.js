import React from "react";
import PropTypes from "prop-types"
import { storyblokInit, apiPlugin } from "gatsby-source-storyblok"
import HorizontalScroll from 'react-scroll-horizontal'
import useWindowSize from "../hooks/useWindowSize";
import clsx from "clsx";

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

  const { width, height } = useWindowSize();
  const parent  = { width: width, height: height}

  return (
    <div className="outer-wrapper">
      <div className="pin">
        <div className="section-wrapper" style={parent}>
        <div className="section-nav" style={{width: width}}>
          <a href="#intro"><button className={clsx(buttonStyles.buttonTertiary)}>Intro</button></a>
          <a href="#work"><button className={clsx(buttonStyles.buttonTertiary)}>Work</button></a>
          <a href="#experience"><button className={clsx(buttonStyles.buttonTertiary)}>Experience</button></a>
          <a href="#interests"><button className={clsx(buttonStyles.buttonTertiary)}>Interests</button></a>
          <a href="#get_in_touch"><button className={clsx(buttonStyles.buttonTertiary)}>Get in touch</button></a>
        </div>
          <HorizontalScroll>
            <div className="section-layout">{children}</div>
          </HorizontalScroll>
        </div>
      </div>
    </div>
  )
}
 
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
 
export default Layout