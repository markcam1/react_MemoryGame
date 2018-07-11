import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Card from './components/Card';
// import Characters from './characters.json';
import './App.css';

let Score = 0;
let guessesCorrect = 0;
let message = "";

const Characters = [
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
	  "image": "./images/sheik.png",
	  "clicked": false
	},
	{
	  "id": 6,
	  "image": "./images/malon.png",
	  "clicked": false
	},
	{
	  "id": 7,
	  "image": "./images/ruto.png",
	  "clicked": false
	},
	{
	  "id": 8,
	  "image": "./images/nabooru.png",
	  "clicked": false
	},
	{
	  "id": 9,
	  "image": "./images/impa.png",
	  "clicked": false
	},
	{
	  "id": 10,
	  "image": "./images/Darunia.png",
	  "clicked": false
	},
	{
	  "id": 11,
	  "image": "./images/navi.png",
	  "clicked": false
	},
	{
	  "id": 12,
	  "image": "./images/Saria_real.png",
	  "clicked": false
	}
  ]

class App extends Component {

	state = {
		Characters,
		Score,
		guessesCorrect,
		message
	};

	setClicked = id => {
		const Characters = this.state.Characters;
		const cardClicked = Characters.filter(Character => Character.id === id);

		if (cardClicked[0].clicked) {

			guessesCorrect = 0;
			message = 'Fail';

			for (let i = 0; i < Characters.length; i++) {
				Characters[i].clicked = false;
			}

			this.setState({message});
			this.setState({guessesCorrect});
			this.setState({Characters});

		} else {
			cardClicked[0].clicked = true;

			guessesCorrect = guessesCorrect + 1;
			message = "Keep Going"

			if (guessesCorrect > Score) {
				Score = guessesCorrect;
				this.setState({Score});
			}

			Characters.sort((a, b) => {
				return 0.5 - Math.random();
			});

			this.setState({Characters});
			this.setState({guessesCorrect});
			this.setState({message});
		}
	};


    render() {

        return ( 
        	<Wrapper>
    			<div className="hero">
    				<div className="heroText">
        				<h3 className="message">{this.state.message}</h3>
        				<h3 className="message">{this.state.guessesCorrect}</h3>
    				</div>
    				<div className="buttonWrapper">
    					<img className="buttons" src="images/buttons.png" alt="mc buttons" />
    				</div>
    			</div>
            	<div className="row">
            		{this.state.Characters.map(Character => (
            			<Card
            				setClicked={this.setClicked}
            				id={Character.id}
            				key={Character.id}
            				image={Character.image}
            				className="col-sm-1"
            			/>
            		))}
            	</div>
            </Wrapper>
        );
    }
};

export default App;