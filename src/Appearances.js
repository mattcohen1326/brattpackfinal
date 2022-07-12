import './App.css';
import './appearances.css'
import React from "react";
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import { unmountComponentAtNode, render } from "react-dom";
import apics from './AppearancePics'
import fcontent from './content.json'

const content = fcontent.content

function generateAppearances(){
    const aps =  content.filter((c) => c.type === 'appearance')
    var apps = []
    for(var i = 0; i < aps.length; i++){
        var newElement = (
            <>
                <a href = {aps[i].url} target="_blank">
                    <div className =  'appearance'>
                        <img src = {apics[aps[i].name]} />
                    </div>
                </a>
            </>
        )
        apps.push(newElement)
    }
    return apps
}

function Appearances() {
    return(
        <>
            <Nav />
            <div id = "Main-Content">
            <h1 id = "ap-intro">CHECK OUT @THEBRATTPACK63 ON THESE PODCAST APPEARANCES</h1>
            <div id = "appearances">
                {generateAppearances()}
            </div>
            </div>
        </>
    )
}

export default Appearances