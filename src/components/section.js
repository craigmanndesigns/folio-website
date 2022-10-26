import React, { useEffect, useState } from "react";
import { StoryblokComponent, storyblokEditable } from "gatsby-source-storyblok";

import * as sectionStyles from "./styles/section.module.scss"
import useWindowSize from "../hooks/useWindowSize";
import clsx from 'clsx';

import HomeBg from "./home_bg";
import WorkBg from "./work_bg";
import ExpBg from "./exp_bg";
import InterestBg from "./interest_bg"
// import ContactBg from "./contact_bg"

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
      return(<WorkBg />)
    }
    if (sectionId === 'experience') {
      return(<ExpBg />)
    }
    if (sectionId === 'interests') {
      return(<InterestBg />)
    }
    // if (sectionId === 'get_in_touch') {
    //   return(<ContactBg />)
    // }
    else {
      <></>
    }
  }

  return (
    <div className={clsx(sectionId === 'get_in_touch' ? sectionId : sectionId + ' animation-wrap to-right')}>
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