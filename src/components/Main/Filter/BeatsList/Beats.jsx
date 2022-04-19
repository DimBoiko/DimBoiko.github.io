import React,{useState} from 'react';
import Beat from './Beat';

const Beats = ({beatsList,sortedBeats,setSortedBeats}) => {
	// console.log(sortedBeats);
	// console.log(beatsList);

	return (
		<div className="filter__colum-beats">
			{sortedBeats.map((beat,index)=>{
				return <Beat key={index} beat={beat} index={index + 1}/>
			})}
		</div>
	);
}

export default Beats;
