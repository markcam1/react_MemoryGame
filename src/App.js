import React, { Component } from "react";
import Card from './components/Card';
import Wrapper from "./components/Wrapper";

let guessesCorrect = 0;
let scoreboard = "";

const Rorschachs = [
	{
	  "id": 1,
	  "image": "./images/rorschach1.jpg",
	  "clicked": false
	},
	{
	  "id": 2,
	  "image": "./images/rorschach2.jpg",
	  "clicked": false
	},
	{
	  "id": 3,
	  "image": "./images/rorschach3.jpg",
	  "clicked": false
	},
	{
	  "id": 4,
	  "image": "./images/rorschach4.jpg",
	  "clicked": false
	},
	{
	  "id": 5,
	  "image": "./images/rorschach5.jpg",
	  "clicked": false
	},
	{
	  "id": 6,
	  "image": "./images/rorschach6.jpg",
	  "clicked": false
	},
	{
	  "id": 7,
	  "image": "./images/rorschach7.jpg",
	  "clicked": false
	},
	{
	  "id": 8,
	  "image": "./images/rorschach8.jpg",
	  "clicked": false
	},
	{
	  "id": 9,
	  "image": "./images/rorschach9.jpg",
	  "clicked": false
	},
	{
	  "id": 10,
	  "image": "./images/rorschach10.jpg",
	  "clicked": false
	},
	{
	  "id": 11,
	  "image": "./images/rorschach11.jpg",
	  "clicked": false
	},
	{
	  "id": 12,
	  "image": "./images/rorschach12.jpg",
	  "clicked": false
	}
	]

	const wrapperStyle = {
		height: '100px',
		position: 'relative',
		width: '50%', 
		margin: '0 0 0 5%',
	}

class App extends Component {

	state = {
		Rorschachs,
		guessesCorrect,
		scoreboard
	};

	handleBtnClick = id => {
		const Rorschachs = this.state.Rorschachs;
		const clickDone = Rorschachs.filter(Rorschach => Rorschach.id === id);
		clickDone[0].clicked ? this.loserHandler() : (this.winnerHandler(), clickDone[0].clicked = true)
	};

	loserHandler() {
		guessesCorrect = 0;
		scoreboard = 'Failed Miserably. \nClick an Image to restart';
		for (let i = 0; i < Rorschachs.length; i++) {
			Rorschachs[i].clicked = false;
		}
		this.setState({scoreboard});
		this.setState({guessesCorrect});
		this.setState({Rorschachs});
	}

	winnerHandler(){
		
		guessesCorrect = guessesCorrect + 1;
		scoreboard = 'Keep Going';

		Rorschachs.sort((a, b) => {
			return 1 - Math.random();
		});

		this.setState({Rorschachs});
		this.setState({guessesCorrect});
		this.setState({scoreboard});

	}

    render() {
        return ( 
        	<Wrapper>
    			<div style={wrapperStyle} className="box">
        				<h3 className="scoreboard">{this.state.scoreboard}</h3>
        				<h3 className="scoreboard">{this.state.guessesCorrect}</h3>
    			</div>
            	<div className="row">
            		{this.state.Rorschachs.map(Rorschach => (
            			<Card
            				handleBtnClick={this.handleBtnClick}
            				image={Rorschach.image}
            				id={Rorschach.id}
            				key={Rorschach.id}
            			/>
            		))}
            	</div>
            </Wrapper>
        );
    }
};

export default App;