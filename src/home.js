import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import { unmountComponentAtNode, render } from "react-dom";
import Nav from './Nav.js';
import Feed from './Feed.js';
import Article from './Article.js';




class Home extends React.Component{
	constructor(props){
		super(props);
		this.state = {isClicked:false};
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(){
		console.log("ok")
		this.setState(prevState => ({
      isClicked: !prevState.isClicked
	  
    }));
	
	}
	//Genres, Music in Media, Live Music, Playlists, Home
	render(){
		window.scrollTo(0, 0);
		document.body.style = "overflow:hidden;"
		return(
			<>
			<Nav />
				<div id="Main-Content">
					<Feed />
					<Article />
					<div id = "right-side-content">
						<h1 id = "best-player" >JBITBPITNHL</h1>
						<h1 id ="count">THE BRATT PACK IS CURRENTLY 4,608 STRONG</h1>
					</div>
				</div>
			</>
		);
	}
		
	
  
}

export default Home;