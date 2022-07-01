import React from "react";
import { render } from 'storyblok-rich-text-react-renderer';

import * as contentStyles from "./styles/content.module.scss"
import clsx from 'clsx';


const Content = ({ blok }) => {
        return <div className={clsx(contentStyles.content)}>{render(blok.content)}</div>;
};

 
export default Content;