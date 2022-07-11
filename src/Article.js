import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import { unmountComponentAtNode, render } from "react-dom";
import cover from './img/bratt.jpg';
import fcontent from './content.json'
import pics from './BrattPics'

const content = fcontent.content

const colors = ["#64a151","#f46a6a","#383838"]
var colorCount = 0
var bcount = 0
function generateArticles(){
	
	var articles = []

	for(var i = 0; i < content.length; i++){
		console.log('hi')
		console.log(content[i])
		if(bcount === 10){
			bcount = 0
		}
		if(colorCount === 3){
			articles.push(<img className = "Article" src={pics[bcount]} />)
			colorCount = 0
		}
		const mystyle = {backgroundColor:colors[colorCount]}
		const newArticle = <Article type ={content[i].type} style={mystyle} route={content[i].route} title={content[i].title} />
		articles.push(newArticle)
		colorCount++
		bcount++
	}

	return articles
}

class Article extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
	if(this.props.type != "appearance"){
	return (
		<>
			
			<Link to ={this.props.route}>
				<div style={this.props.style} className="Article">
					<h1>{this.props.title}</h1>
				
				</div>
			</Link>
		</>
	);}
	else{
		return(
			<>
			
			<a target = "_blank" href ={this.props.route}>
				<div style={this.props.style} className="Article">
					<h1>{this.props.title}</h1>
				
				</div>
			</a>
		</>
		)
	}
	}
}
class Articles extends React.Component {
	render(){
		return (
		<div id = "Articles">
			{generateArticles()}
		</div>
		
	
	);
	}
}

export default Articles; 