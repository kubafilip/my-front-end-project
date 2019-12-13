import React from 'react'


//onClick will add react event listenter
function Topic ({topic, index, toggleTopic}) {
	return (
		<div
			className={"topic " + (topic.open ? 'open' : '')}
			key={index}
            onClick={()=> toggleTopic(index)}
		>
			<div className="title">
				{topic.topic}
			</div>
            <div className="content">
                {topic.content}
            </div>
		</div>
	)
}

export default Topic