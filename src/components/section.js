import React from "react";
import { StoryblokComponent, storyblokEditable } from "gatsby-source-storyblok";

import * as sectionStyles from "./styles/section.module.scss"

const Section = ({ blok }) => {
  return (
    <div  {...storyblokEditable(blok)} key={blok._uid} className={sectionStyles.section} id={blok.id}>
        <div>{blok.id}</div>
        <div>
            {blok.content.map((blok) => (
                <StoryblokComponent blok={blok} />
            ))}
        </div>
    </div>
  );
};
 
export default Section;