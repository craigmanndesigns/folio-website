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
            <h1>{blok.text}</h1>
        )
      }
      if (blok.style === 'h3') {
        return (
            <h1>{blok.text}</h1>
        )
      }
      else {
          return (
              <h4>{blok.text}</h4>
          )
      }
  }
};
export default BigText;