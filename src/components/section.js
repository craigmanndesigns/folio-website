import React, { useEffect, useState } from "react";
import { StoryblokComponent, storyblokEditable } from "gatsby-source-storyblok";

import * as sectionStyles from "./styles/section.module.scss"
import useWindowSize from "../hooks/useWindowSize";
import clsx from 'clsx';


const Section = ({ blok }) => {
  const { width, height } = useWindowSize();
  const child  = { 'min-width': width, 'min-height': height}
  const [sectionId, setSectionId] = useState();

  useEffect(() => {
    setSectionId(blok.id);
  }, []);
  
  return (
    <div {...storyblokEditable(blok)} key={blok._uid} className={clsx(sectionStyles.section)} id={blok.id} style={child}>
        <span className={clsx(sectionStyles.sectionBg)} style={blok.background_image ? {backgroundImage: "url(" + blok.background_image.filename + ")"} : {border:"solid 1px red"}}></span>
        <div>
            {blok.content.map((blok) => (
                <StoryblokComponent blok={blok} props={sectionId} />
            ))}
        </div>
    </div>
  );
};
 
export default Section;