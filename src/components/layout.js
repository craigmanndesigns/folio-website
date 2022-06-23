import * as React from "react"
import PropTypes from "prop-types"
import { storyblokInit, apiPlugin } from "gatsby-source-storyblok"

import "../styles/main.scss"

import Teaser from './Teaser'
import configuration from '../../gatsby-config'
import Feature from "./feature"
import Grid from "./grid"
import Button from "./button"
import Section from "./section"


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
  }
});
 
const Layout = ({ children }) => {
  return (
    <div className="outer-wrapper">
        <div className="section-wrapper">{children}</div>
    </div>
  )
}
 
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
 
export default Layout