import React from "react";
import { StoryblokComponent, storyblokEditable } from "gatsby-source-storyblok";

import * as carouselStyles from "./styles/carousel.module.scss"
import clsx from 'clsx';

const Carousel = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid} className={clsx(carouselStyles.carousel)}>
      <div className={clsx(carouselStyles.carouselLeftButton)}>
        {blok.leftBtn.map((blok) => (
          <StoryblokComponent blok={blok} />
        ))}
      </div>
      <div className={clsx(carouselStyles.carouselCards)}>
        {blok.cards.map((blok) => (
          <StoryblokComponent blok={blok} />
        ))}
      </div>
      <div className={clsx(carouselStyles.carouselRightButton)}>
        {blok.rightBtn.map((blok) => (
          <StoryblokComponent blok={blok} />
        ))}
      </div>
    </div>
  );
};
 
export default Carousel;