import React, { useEffect, useState } from "react";
import { StoryblokComponent, storyblokEditable } from "gatsby-source-storyblok";

import * as sectionStyles from "./styles/section.module.scss"
import useWindowSize from "../hooks/useWindowSize";
import clsx from 'clsx';

import HomeBg from "./home_bg";
import WorkBG from "./work_bg";

const Section = ({ blok }) => {
  const { width, height } = useWindowSize();
  const child  = { 'min-width': width, 'min-height': height}
  const [sectionId, setSectionId] = useState();

  useEffect(() => {
    setSectionId(blok.id);
  }, []);

  function renderBG () {
    if (sectionId === 'intro') {
      return(<HomeBg />)
    }
    if (sectionId === 'work') {
      return(<WorkBG />)
    }
    else {
      <></>
    }
  }

  return (
    <div className={clsx(blok.id, 'animation-wrap to-right')}>
      <div {...storyblokEditable(blok)} key={blok._uid} className={clsx(sectionStyles.section, 'main-sections')} id={blok.id}>
          {renderBG()}
          <div className={clsx('section')}>
              {blok.content.map((blok) => (
                  <StoryblokComponent blok={blok} props={sectionId} />
              ))}
          </div>
      </div>
    </div>
  );
};
 
export default Section;