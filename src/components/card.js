import React from "react";
import { storyblokEditable } from "gatsby-source-storyblok";
import { render } from 'storyblok-rich-text-react-renderer';

import * as cardStyles from "./styles/card.module.scss"
import clsx from 'clsx';

const Card = ({ blok }) => {
return (
	<div {...storyblokEditable(blok)} key={blok._uid} className={clsx(cardStyles.card)}>
		<div className={clsx(cardStyles.cardImage)} style={{'background-image':`url(${blok.image.filename})`}}>
		</div>
		<div className={clsx(cardStyles.cardContent)}>
			{render(blok.content)}
		</div>
	</div>
	);
};

 
export default Card;