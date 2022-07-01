import * as React from "react"
import { graphql } from "gatsby"
 
import { StoryblokComponent, storyblokEditable, useStoryblokState } from "gatsby-source-storyblok"
 
import Layout from "../components/layout"
import useWindowSize from "../hooks/useWindowSize";

const IndexPage = ({ data }) => {
  let story = data.storyblokEntry
  story = useStoryblokState(story)
 
  const components = story.content.body.map(blok => (<StoryblokComponent blok={blok} key={blok._uid} />))
  const sectionNav = story.content.section_nav.map(blok => (<StoryblokComponent blok={blok} key={blok._uid} />))
 
  const { width, height } = useWindowSize();
  const windowWidth  = { 'width': width}

  return (
    <Layout>
      <div {...storyblokEditable(story.content)}>
        {components}
        {/* <div className="section-nav" style={windowWidth}>{sectionNav}</div> */}
      </div>
    </Layout>
  )
}
 
export default IndexPage
 
export const query = graphql`
  query HomeQuery {
    storyblokEntry(full_slug: { eq: "home" }) {
      content
      name
      full_slug
      uuid
      id
      internalId
    }
  }
`