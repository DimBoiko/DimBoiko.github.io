import React,{useState} from 'react';
import Inputs from './Inputs';


const Sections = ({sectionsState,visible,inputValue}) => {


	let showList = ''
	if(!visible){return null}
	if(visible){
		showList = {
			'marginTop': '100px',
			'opacity': 1,
		}
	}
				
	return (
			<section id={sectionsState} className="filter-list" style={showList}>
				<Inputs inputValue={inputValue}/>
			</section>
	);
}

export default Sections;
