import React from "react";
import { storyblokEditable } from "gatsby-source-storyblok";
 
const Button = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid}>
        <a href={blok.link.cached_url}>
            <div className="cta">{blok.cta}</div>
        </a>
    </div>
  );
};
 
export default Button;