import React from 'react';

const ClickableSquare = (props) => (
	<button className={`${props.winnerClass} square`} onClick={props.onClick}>
		{props.value}
	</button>
);

export default ClickableSquare;
