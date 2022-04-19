import React,{useState,useContext,useEffect, useMemo, useRef} from 'react';
import { MainContext } from '../Cart/MainProvider';

const Inputs = ({inputValue}) => {
	
	const {inputValues,setInputValues} = useContext(MainContext)
	function toggleValue(id){
		const sectionIndex = inputValues.indexOf(inputValue)
		setInputValues(inputValues.map((section,index)=>{
			if(sectionIndex === index){
				section[id] = !section[id]
				return section
			}
			return section
		}))
	}
	

	return (
		<div className='filter__select-list'>
				{Object.keys(inputValue).map((select,index)=>{
					return (
						<label key={index} htmlFor={select} className="filter-list__label" >
							<div className= {inputValue[select] ? 'fake-checkbox checked' : 'fake-checkbox'}></div>
							{inputValues.indexOf(inputValue) === inputValues.length - 1 
							? 	<span className="filter-list__text">&#36;{select}</span>
							: <span className="filter-list__text">{select}</span>
							}
							<input 
							onClick={()=> toggleValue(select)}
							type="checkbox" value={select} id={select} className="filter-list__input"></input>
						</label>
					)

				})}
				

		</div>
	);
}

export default Inputs;
