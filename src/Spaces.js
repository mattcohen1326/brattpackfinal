import './App.css';
import React from "react";
import spacePic from './img/spaces.jpg'
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import { unmountComponentAtNode, render } from "react-dom";
import SpacePics from './SpacesPics'



function generateSpaces(){
    var prev = []
    var upcoming = []
    var today = false
    console.log(SpacePics)
    for (const [key, value] of Object.entries(SpacePics)) {
        
        if(value === 'today'){
            today = true
        }
        else if(!today){
        prev.push(
            <div className = "space-component" id = {key}>
            <img src={value} />
            </div>
            )
      }
      else{
        upcoming.push(
            <div className = "space-component" id = {key}>
            <img src={value} />
            </div>
        )
      }
    }
    return [prev,upcoming]
}

const sg = generateSpaces()
const previous = sg[0]
const upcomingSpaces = sg[1]

function Spaces(){
    document.body.style = "overflow-y:scroll"
    console.log(upcomingSpaces,previous)
    return(
        <>
        <Nav />
        <div id = "Main-Content">
            <div id = "space-intro">
                <img src={spacePic}/>
                <h2>Check back here for future spaces announcements and recaps.</h2>
                <p>@BrattPack63 host's twitter spaces where fans can discuss the Devils.  They are a great platform
                for the community to connect.  They are usually announced the day of or the day before, we will post here
                if there is a planned space upcoming</p>
                <h1>PREVIOUS SPACES: </h1>
                <h1>UPCOMING SPACES: </h1>
            </div>
            <div id = "two-spaces">
                <div className = "space-split">
                    {previous}
                </div>
                <div className = "space-split">
                    {upcomingSpaces}
                </div>
            </div>
            
        </div>
        </>
    )
}


export default Spaces