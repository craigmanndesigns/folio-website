import React, { useEffect, useState } from "react";
import { StoryblokComponent, storyblokEditable } from "gatsby-source-storyblok";

import * as sectionStyles from "./styles/section.module.scss"
import clsx from 'clsx';


const ContentContainer = ({ blok, props }) => {
  const [positionStyle, setPositionStyle] = useState();
  // const [contentClass, setContentClass] = useState('');
  useEffect(() => {
    setPositionStyle({
        top: blok.top + "vh",
        right: blok.right + "vw",
      });
      // setContentClass(props + "_content");
  }, [])
  return (
    <div {...storyblokEditable(blok)} key={blok._uid}>
        <div className={clsx(sectionStyles.sectionContentPosition, sectionStyles[`${props + "_content"}`])} style={positionStyle} id={props + "id"}>
            {blok.content.map((blok) => (
                <StoryblokComponent blok={blok} />
            ))}
        </div>
    </div>
  );
};
 
export default ContentContainer;