import React from 'react';
import { useNavigate } from 'react-router-dom';

const Backbutton = () => {


	const navigation = useNavigate()
	const goBack = (e) => {
		e.preventDefault()
		navigation(-1)}

	return (
		<div >
			<button className='back__btn' onClick={goBack}>Back</button>
		</div>
	);
}

export default Backbutton;
