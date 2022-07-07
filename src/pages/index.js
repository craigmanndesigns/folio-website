import  React, { useState } from "react"
import { graphql } from "gatsby"
 
import { StoryblokComponent, storyblokEditable, useStoryblokState } from "gatsby-source-storyblok"
 
import Layout from "../components/layout"
import Menu from "../components/menu"
import useWindowSize from "../hooks/useWindowSize";

const IndexPage = ({ data }) => {
  let story = data.storyblokEntry
  story = useStoryblokState(story)
 
  const components = story.content.body.map(blok => (<StoryblokComponent blok={blok} key={blok._uid} />))
  const [popup, setPopup] = useState(false)

  return (
    <>
    <Layout>
      <button onClick={() => setPopup(true)} >open</button>
      <div {...storyblokEditable(story.content)}>
        {components}
      </div>
    </Layout>
    <Menu props={popup} setPopup={setPopup}></Menu>
    </>
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