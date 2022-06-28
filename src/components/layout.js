import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"
import { storyblokInit, apiPlugin } from "gatsby-source-storyblok"
import HorizontalScroll from 'react-scroll-horizontal'
import useWindowSize from "../hooks/useWindowSize";
import "../styles/main.scss"

import Teaser from './Teaser'
import configuration from '../../gatsby-config'
import Feature from "./feature"
import Grid from "./grid"
import Button from "./button"
import Section from "./section"
import BigText from "./bigtext";


const sbConfig = configuration.plugins.find((item) => item.resolve === 'gatsby-source-storyblok')
 
storyblokInit({
  accessToken: sbConfig.options.accessToken,
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    button: Button,
    section: Section,
    bigtext: BigText,
  }
});
 
const Layout = ({ children }) => {

  const { width, height } = useWindowSize();
  const parent  = { width: width, height: height}

  return (
    <div className="outer-wrapper">
      <div className="pin">
        <div className="section-wrapper" style={parent}>
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