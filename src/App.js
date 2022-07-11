import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import Appearances from './Appearances.js';
import Home from "./home.js";
import Spaces from "./Spaces.js"
import fcontent from './content.json'
import ArticleComponent from './ArticleComponent.js';

const art = fcontent.content

function createArticleRoutes(){
	var aroutes = []
	for(var i = 0; i < art.length; i++){
		let article = art[i]
		aroutes.push(<Route exact path = {article.route} element = {<ArticleComponent title={article.title} body={article.body} date={article.date} />} />)
	}
	return aroutes	
}

const Main = () => {
  return (
	
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
	  <Route exact path = '/' element={<Home />}></Route>
	  <Route exact path='/Home' element={<Home />}></Route>
    <Route exact path='/Spaces' element={<Spaces />}></Route>
    <Route exact path='/Appearances' element={<Appearances />}></Route>
    {createArticleRoutes()}
    </Routes>
  );
}

class App extends React.Component{
  constructor(props){
	  super(props);
	  this.state = {starting:false};
  }

  render(){
  return (
	<>
		<Main />
	</>
	
	
  );
  }
}

export default App;
