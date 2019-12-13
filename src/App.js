import React, { Component, useState } from 'react';
import './App.css';

import Books from "./Books";
import Music from "./Music";
import Movie from './Movie';
import Header from "./Header";
import Topic from "./Topic";

function App () {

  const [topics, setTopic] = useState([
    {
      topic: 'Books',
      content: <Books/>,
      open: false
    },
    {
      topic: 'Music',
      content: <Music/>,
      open: false
    },
    {
      topic: 'Movies',
      content: <Movie/>,
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

  return (
    <div className="App">
      <Header/>
      <div className="topics">
        {topics.map((t, i) => (
          <Topic topic={t} index={i} toggleTopic={toggleTopic}/>
        ))}
      </div>
    </div>
  );
}

export default App;