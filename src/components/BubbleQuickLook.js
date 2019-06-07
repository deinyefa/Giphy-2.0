import React from "react";

import BQLookStyles from "./BQLook.module.css";

const BubbleQuickLook = ({ gif, title, hue }) => (
	<div
		className={BQLookStyles.BubbleQuicklookWrapper}
		style={{
			borderTop: `10px solid ${hue}`,
			borderBottom: `10px solid ${hue}`,
			width: "400px",
		}}>
		<img src={gif} alt={title} style={{ width: "100%" }} />
		<h4>{title}</h4>
		<span
			className={BQLookStyles.Arrow}
			style={{ borderColor: `transparent transparent ${hue} ${hue}` }}
		/>
	</div>
);

export default BubbleQuickLook;
