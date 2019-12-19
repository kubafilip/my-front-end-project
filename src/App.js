import React, { Component, useState } from 'react';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter,
  BrowserRouter as Router
 } from "react-router-dom";
import Books from "./Books";
import Music from "./Music";
import Movie from './Movie';
import Header from "./Header";
import Topic from "./Topic";
import Footer from './Footer';
import InfiniteS from "./InfiniteS";
import Sport from "./Sport";
function App () {

  const [topics, setTopic] = useState([
    {
      topic: 'Books',
      content: <Books/>,
      link: Books,
      open: false
    },
    {
      topic: 'Music',
      content: <Music/>,
      link: Music,
      open: false
    },
    {
      topic: 'Movies',
      content: <Movie/>,
      link: Movie,
      open: false
    },
    {
      topic: 'Sport',
      content: <Sport/>,
      link: Sport,
      open: false
    },
    {
      topic: 'InfiniteS',
      content: <InfiniteS/>,
      link: InfiniteS,
      open: false
    }
  ]);

  

  const toggleTopic = index => {
    setTopic(topics.map((topic, i) => {
      if (i === index) {
        topic.open = !topic.open
        var x = document.getElementsByClassName("content")[i];
        if (x.style.display !== "block") {
          x.style.display = "block";
        } else {
          x.style.display = 'none';
        }
      } else {
        var x = document.getElementsByClassName("content")[i];
        if (x.style.display === "block") {
          x.style.display = 'none';
        }
        topic.open = false;
      }
      return topic;
    }))
  }
//<NavLink exact to="/" style={{textDecoration: 'none'}}>
  return (
    <Router>
    <div className="App">
      <Header/>
      
        <div className="topics">
          {topics.map((t, i) => (
            <Topic topic={t} index={i} toggleTopic={toggleTopic}/>
          ))}
        </div>
              
      <Footer/>
    </div>
    </Router>
    
  );
}

export default App;
