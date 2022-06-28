import React from "react";
import { storyblokEditable } from "gatsby-source-storyblok";
 
import * as buttonStyles from "./styles/button.module.scss"
import clsx from 'clsx';


const Button = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid}>
        <a href={blok.link.cached_url}>
            <button className={clsx(buttonStyles.button)}>{blok.cta}</button>
        </a>
    </div>
  );
};
 
export default Button;