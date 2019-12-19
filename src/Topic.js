import React from 'react'
import {
	Route,
	NavLink,
	HashRouter,
	Switch,
	useParams,
	Link
   } from "react-router-dom";
   import Books from "./Books";
   import Music from "./Music";
   import Movie from './Movie';  
import Header from './Header';
import InfiniteS from './InfiniteS';
import Sport from './Sport';


//<Route path={str.toLowerCase()} children={topic.content}/>   
//onClick will add react event listenter
function Topic ({topic, index, toggleTopic}) {
	let str = "/" + topic.topic;
	console.log("topic.topic = " + topic.topic)
	console.log(str.toLowerCase())
	return (
		
		<div
			className={"topic " + (topic.open ? 'open' : '')}
			key={index}          
		>
			<NavLink to={str.toLowerCase()} style={{textDecoration: 'none'}}>
			<div className="title"
			onClick={()=> toggleTopic(index)}
			>
				{topic.topic}
			</div>
			</NavLink>
            <div className="content">
			<Switch>	
				<Route path="/books" component={Books}/>
				<Route path="/music" component={Music}/>
				<Route path="/movies" component={Movie}/>
				<Route path="/sport" component={Sport}/>
				<Route path="/infinites" component={InfiniteS}/>
			</Switch>
			</div>
		</div>
		
	)
}

export default Topic