import React,{useContext,useEffect,useMemo,useRef,useState} from 'react';
import { MainContext } from '../Cart/MainProvider';

const Checkedlist = () => {
	
	const {inputValues,setInputValues} = useContext(MainContext)

	const selectValues = useRef([])
	
	useMemo(()=>{
		selectValues.current.length = 0
		inputValues.forEach((section,index)=>{
		for (const key in section) {
			if(section[key]){
				selectValues.current.push(key)
			}
		}
	})},[inputValues])
 		
	function removeSelect(select){
		setInputValues(inputValues.map((section)=>{
			if(Object.keys(section).includes(select)){
				section[select] = false
				return section
			}
			return section
		}))
	}
	if(selectValues){
	
	}

	if(!selectValues.current.length){return ''}
	return (
		<div className='checked-list'>
			<div className="checked-list__row">
				{selectValues.current.map((select,index)=>{
					return (
						<div className="checked-item" key={index} >
						{parseInt(select.replace(/[^+\d]/g, '')) 
						?<span onClick={()=>removeSelect(select)}>&#36; {select} &#9587;</span>
						:<span onClick={()=>removeSelect(select)}>{select} &#9587;</span>
						}
							
						</div> 
					)
				})}
					
			</div>				
		</div>
		
	)
}

export default Checkedlist;
