import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import { unmountComponentAtNode, render } from "react-dom";


class ArticleTitle extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<>
				
			</>
		)
	}
}




class ArticlePage extends React.Component {
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<>
				<h1 id = "ArticleTitle">{this.props.title}</h1>
				<Img src = {this.props.image}/> 
				<p id = "ArticleContent">
			</>
		)
	}
}

export default ArticlePage