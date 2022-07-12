import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import { unmountComponentAtNode, render } from "react-dom";
import Logo from './img/logo.png';
class NavItem extends React.Component{
	constructor(props){
		super(props);
	
		this.state = {isHovered:false};
		this.handleHover = this.handleHover.bind(this);
	}
	handleHover(){
		this.setState(prevState => ({
      isHovered: !prevState.isHovered
	  
    }));
	}
	render(){
		return(
			<Link to={this.props.navigation} style = {{color:this.state.isHovered ? "green" : "white",gridColumnStart:this.props.column}}>
				<div className="nav-item">
				{this.props.name}
				</div>
			</Link>
		);
}
}

function Nav(){
	return (
	<>
	<div id = "navContainer">
	<div id = "stripes">
			<div className = "stripe"></div>
			<div className = "stripe"></div>
			<div className = "stripe"></div>
		</div>
		<div id="nav">
			<div id = "navMenu">
				<NavItem column={2} name="Home" navigation = "/Home"/>
				<NavItem column={4} name="Spaces" navigation = "/Spaces"/>
				<img id="logo" style={{gridColumnStart:6}} src={Logo} />
				<NavItem column={8} name="Appearances" navigation = "/Appearances"/>
				<NavItem column={10} name="Bratt Pack Photos" navigation = "/Community"/>
			</div>
		</div>
		</div>
	</>
	);
}

export default Nav;