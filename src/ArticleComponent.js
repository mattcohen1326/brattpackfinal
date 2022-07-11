import React from "react";
import { BrowserRouter as Redirect, Router, Switch, Route, Link, withRouter } from "react-router-dom";
import Nav from "./Nav";
import commentBox from 'commentbox.io';

function formatParagraph(p){
    var currentWordsInLine = 0
    var newReturnString = ""
    var paragraphs = []
    var start = true 
    for(var i = 0; i < p.length; i++){
        newReturnString += p[i]
        if(p[i] === ',' && start){
            paragraphs.push(<p>{newReturnString}</p>)
            newReturnString = ""
            start = false
        }
        else if(p[i] === '.' && p.substring(i+1,i+4) != 'com' && p.substring(i+1,i+4) != 'org'){
            currentWordsInLine++
        }
        if(currentWordsInLine===3){
            paragraphs.push(<p>{newReturnString}</p>)
            newReturnString = ""
            currentWordsInLine = 0
        }
        if(paragraphs.length === 0){
            paragraphs.push(<p>{p}</p>)
        }
    }
    return (
        <div id = "paragraphs">
            {paragraphs}
        </div>
    )
}

class ArticleComponent extends React.Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount() {

        this.removeCommentBox = commentBox('5763488328712192-proj');
    }

    componentWillUnmount() {

        this.removeCommentBox();
    }
    render(){
        document.querySelector('body').style.overflowY = "scroll"
        return(
            <>
                <Nav />
                <div id="Main-Content">
                <div className ="ArticleComponent" style={{color:"white"}}>
                <h1>{this.props.title}</h1>
                <h3>{this.props.date}</h3>
                {formatParagraph(this.props.body)}
                </div>
                </div>
                <div className="commentbox"></div>
            </>
        )
    }
}

export default ArticleComponent