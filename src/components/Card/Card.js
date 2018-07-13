import React from 'react';

const cardStyle = {
	margin: '1%',
	position: 'relative',
	width: '25%',
	lineHeight: '1.8', 
}

const imgContStyle = {
	height: '100%', 
	width: '100%', 
	textAlign: 'center',
	overflow: 'hidden',
}
const imgStyle = {
	width: '70%',
}

const Card = props => (
	<div style={cardStyle}
		className="card"
		onClick={() => props.handleBtnClick(props.id)}>
	    <div style={imgContStyle} className="imgBox">
	      <img style={imgStyle}
	      	className="img"
	        src={props.image}
	      />
	    </div>
  </div>
);

export default Card;
