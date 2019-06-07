import React from "react";

import BQLookStyles from "./BQLook.module.css";

const BubbleQuickLook = ({ gif, title, hue, url }) => (
	<div
		className={BQLookStyles.BubbleQuicklookWrapper}
		style={{
			borderTop: `10px solid ${hue}`,
			borderBottom: `10px solid ${hue}`,
			width: "400px",
		}}>
		<a href={url} target="_blank" rel="noopener noreferrer">
			<img src={gif} alt={title} />
		</a>
		<span
			className={BQLookStyles.Arrow}
			style={{ borderColor: `transparent transparent ${hue} ${hue}` }}
		/>
	</div>
);

export default BubbleQuickLook;
