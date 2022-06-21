import * as React from "react"
import PropTypes from "prop-types"
import { storyblokInit, apiPlugin } from "gatsby-source-storyblok"
import Teaser from './Teaser'
import configuration from '../../gatsby-config'
import Feature from "./feature"
import Grid from "./grid"
 
const sbConfig = configuration.plugins.find((item) => item.resolve === 'gatsby-source-storyblok')
 
storyblokInit({
  accessToken: sbConfig.options.accessToken,
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
  }
});
 
const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  )
}
 
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
 
export default Layout