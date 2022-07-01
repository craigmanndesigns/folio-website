import React from "react";
import { storyblokEditable } from "gatsby-source-storyblok";
 
const BigText = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid}>
        {renderTitle()}
    </div>
  );

 
  function renderTitle () {
      if (blok.style === 'h1') {
        return (
          <h1>{blok.text}</h1>
        )
      }
      if (blok.style === 'h2') {
        return (
          <h2>{blok.text}</h2>
        )
      }
      if (blok.style === 'h3') {
        return (
          <h3>{blok.text}</h3>
        )
      }
      if (blok.style === 'h4') {
        return (
          <h4>{blok.text}</h4>
        )
      }
      else {
          return (
            <div className={blok.style}>{blok.text}</div>
          )
      }
  }
};
export default BigText;