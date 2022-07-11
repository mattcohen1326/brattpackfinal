import './App.css';
import React from "react";
import spacePic from './img/spaces.jpg'
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import { unmountComponentAtNode, render } from "react-dom";
import SpacePics from './SpacesPics'

function generateSpaces(){
    var spaces = []
    for (const [key, value] of Object.entries(SpacePics)) {
        spaces.push(
            <div className = "space-component" id = {key}>
            <img src={value} />
            </div>
            )
      }
    return spaces
}

function Spaces(){
    document.body.style = "overflow-y:scroll"
    return(
        <>
        <Nav />
        <div id = "Main-Content">
            <div id = "spaces">
                <img src={spacePic}/>
                <h2>Check back here for future spaces announcements and recaps.</h2>
                <p>@BrattPack63 host's twitter spaces where fans can discuss the Devils.  They are a great platform
                for the community to connect.  They are usually announced the day of or the day before, we will post here
                if there is a planned space upcoming</p>
                <h1 style = {{color:"white", width:"100vw"}}>UPCOMING SPACES: </h1>
                
            {generateSpaces()}
            </div>
            
        </div>
        </>
    )
}


export default Spaces