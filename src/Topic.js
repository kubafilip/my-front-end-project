import React from 'react'
import {
	Route,
	NavLink,
	HashRouter
   } from "react-router-dom";

//onClick will add react event listenter
function Topic ({topic, index, toggleTopic}) {
	let str = "/" + topic.topic;
	console.log("topic.topic = " + topic.topic)
	return (
		<HashRouter>
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
                {topic.content}
            </div>
		</div>
		</HashRouter>
	)
}

export default Topic