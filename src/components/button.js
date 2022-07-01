import React, {useEffect, useState} from "react";
import { storyblokEditable } from "gatsby-source-storyblok";
 
import * as buttonStyles from "./styles/button.module.scss"
import clsx from 'clsx';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Button = ({ blok }) => {
  const [faIcon, setFaIcon] = useState('')

  useEffect(() => {
    if(blok.cta === 'faArrowRight') {
        setFaIcon(<FontAwesomeIcon icon={faArrowRight}  />)
    }
    else {
        setFaIcon(<FontAwesomeIcon icon={faArrowLeft}  />)
    }
  }, []);

  if (blok.type === 'icon') {
    return(
      <>
        {renderIconButton()}
      </>
    );
  }
  else {
    return (
      <>
        {renderPrimaryButton()}
      </>
    );
  }
  function renderPrimaryButton () {
    return (
      <div {...storyblokEditable(blok)} key={blok._uid}>
          <a href={blok.link.cached_url}>
              <button className={clsx(buttonStyles.button, blok.type === 'tertiary' ? buttonStyles.buttonTertiary : buttonStyles.button)}>{blok.cta}</button>
          </a>
      </div>
    );
  }
  function renderIconButton () {
    return (
      <div {...storyblokEditable(blok)} key={blok._uid}>
          <button className={clsx(buttonStyles.buttonIcon)}>
            {faIcon}
          </button>
      </div>
    );
  }
};
 
export default Button;