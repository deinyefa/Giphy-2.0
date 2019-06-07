import React, { Component } from "react";

import BubbleStyles from "./Bubble.module.css";
import BubbleQuickLook from "../components/BubbleQuickLook";

class Bubble extends Component {
	state = {
		hover: false,
	};

	render() {
		const { circle } = this.props;
		const { hover } = this.state;

		return (
			// <div>
				<div
					className={`${BubbleStyles.Bubble} ${circle.bubbleClass}`}
					style={{
						backgroundColor: circle.hue,
						borderColor: hover ? circle.hue : "white",
						width: `${circle.size}px`,
						height: `${circle.size}px`,
						left: `${circle.x}px`,
						top: `${circle.y}px`,
						animationDuration: `${circle.animationDuration}s`,
					}}
					onMouseEnter={() => this.setState({ hover: true })}
					onMouseLeave={() => this.setState({ hover: false })}>
					{hover ? (
						<BubbleQuickLook
							hue={circle.hue}
							gif={circle.gif}
							title={circle.title}
							hover={hover}
						/>
					) : null}
				</div>
			// </div>
		);
	}
}

export default Bubble;
