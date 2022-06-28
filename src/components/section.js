import React, { useEffect, useState } from "react";
import { StoryblokComponent, storyblokEditable } from "gatsby-source-storyblok";

import * as sectionStyles from "./styles/section.module.scss"
import useWindowSize from "../hooks/useWindowSize";
import clsx from 'clsx';


const Section = ({ blok }) => {
  const { width, height } = useWindowSize();
  const child  = { 'min-width': width, 'min-height': height}
  const [positionStyle, setPositionStyle] = useState();
  const [sectionId, setSectionId] = useState('');

  useEffect(() => {
    setPositionStyle({
        top: blok.top + "vh",
        right: blok.right + "vw",
      });
    setSectionId(blok.id);
  }, [])
  console.log(sectionId)

  return (
    <div {...storyblokEditable(blok)} key={blok._uid} className={sectionStyles.section} id={blok.id} style={child}>
        <div className={sectionStyles[`${sectionId}`]}>{blok.id}</div>
        <div className={clsx(sectionStyles.sectionContentPosition, sectionStyles[`${sectionId}`])} style={positionStyle}>
            {blok.content.map((blok) => (
                <StoryblokComponent blok={blok} />
            ))}
        </div>
    </div>
  );
};
 
export default Section;