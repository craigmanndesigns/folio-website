import React from "react";
import { StoryblokComponent, storyblokEditable } from "gatsby-source-storyblok";
 
const Grid = ({ blok }) => (
  <div {...storyblokEditable(blok)} key={blok._uid} className="section-nav">
    {blok.columns.map((blok) => (
      <li key={blok._uid}>
        <StoryblokComponent blok={blok} />
      </li>
    ))}
  </div>
);
 
export default Grid;