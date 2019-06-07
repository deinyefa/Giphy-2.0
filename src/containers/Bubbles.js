import React, { Component } from "react";

import Bubble from './Bubble';

class Bubbles extends Component {
	state = {
		circles: [],
	};

	componentDidMount = () => {
		const { gifs } = this.props;

		let circles = [];
		const colors = ["#65BACD", "#F3382C", "#1A3567", "#82B8AE"];
		const bubbleClassList = ["MoveLeft", "MoveRight"];
		let animationDuration;
		let size,
			posX,
			posY,
			windowWidth = 7000,
			windowHeight = 5000,
			hue,
			bubbleClass;
		let gif, title, id;

		for (let i = 0; i < gifs.length; i++) {
			size = (Math.random() * 100 + 100).toFixed(); //- max ~200 min 100
			posX = (Math.random() * (windowWidth - size)).toFixed();
			posY = (Math.random() * (windowHeight - size)).toFixed();
			hue = colors[Math.floor(Math.random() * colors.length)];
			bubbleClass =
				bubbleClassList[
					Math.floor(Math.random() * bubbleClassList.length)
				];
			animationDuration = Math.floor(Math.random() * (90 - 40) + 40);
			gif = gifs[i].images.fixed_height.url;
			title = gifs[i].title;
			id = gifs[i].id;

			// push to local circles array
			circles.push({
				x: posX,
				y: posY,
				size,
				hue,
				bubbleClass,
				animationDuration,
				gif,
				title,
				id,
			});
		}

		this.setState({ circles: [...circles] });
	};

	render() {
		const { circles } = this.state;
		return circles.map((circle) => (
      <Bubble key={circle.id} circle={circle}  />
    ))
	}
}

export default Bubbles;
