import './App.css';
import React from "react";
import Nav from './Nav';
import one from './img/community/1.jpg'
import two from './img/community/2.jpg_small'
import three from './img/community/3.jpg_small'
import four from './img/community/4.jpg_medium'
import five from './img/community/5.jpg_medium'



const pics = [one,two,three,four,five]

function generatePics(){
    var newpics = []
    for(var i = 0; i < pics.length; i++){
        newpics.push(<div id = "pic-container"><img src={pics[i]} /></div>)
    }
    return newpics
}

function Community(){
    document.body.style = "overflow-y:scroll"
    return(
        <>
            <Nav />
            <div id = "Main-Content">
                <div id = "pics">
                    {generatePics()}
                </div>
            </div>
        </>
    )
}

export default Community