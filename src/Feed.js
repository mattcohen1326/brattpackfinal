import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import { unmountComponentAtNode, render } from "react-dom";
import { Timeline } from 'react-twitter-widgets'

function Feed (){
	return (
		<div id="Feed">
		<Timeline
		  dataSource={{
			sourceType: 'profile',
			screenName: 'TheBrattPack63'
		  }}
		  options={{
			height: '400'
		  }}
		/>
		</div>
	);
}

export default Feed;