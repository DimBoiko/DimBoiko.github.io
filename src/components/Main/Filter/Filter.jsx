import React,{useRef,useEffect,useState,useContext, useMemo} from 'react';
import Sections from './Sections';
import Beats from './BeatsList/Beats'
import { MainContext } from '../Cart/MainProvider';

const Filter = ({displayNone}) => {

	const {beatsList,sortedBeats,setSortedBeats,inputValues} = useContext(MainContext)

	const filterSelect = useRef()
	const filterBlock = useRef()
	const [sectionsState,setSectionsState] = useState([
		{ 'name' : 'genre-section','visible': false},
		{ 'name' : 'energy-section','visible': false },
		{ 'name' : 'bpm-section','visible': false},
		{ 'name' : 'mood-section','visible': false},
		{ 'name' : 'price-section','visible': false},
	])
	function toggleSection(event){
		
		if(event.target.hasAttribute('data-index')){
			
			const index = parseInt(event.target.getAttribute('data-index')) 
			sectionsState.map((section,i)=>{
				if(index === i){
					section.visible = !section.visible
				}
				return section
			});
			setSectionsState([...sectionsState,!sectionsState[index].visible])
		}
	}
	useEffect(()=>{
		const filter = filterBlock.current
		filter.addEventListener('click',(event)=>toggleSection(event))
	},[])


	return (
		<div className="filter">
					<div className="filter__block" ref={filterBlock} >

							<div className="filter__colum">
								<div ref={filterSelect} data-index='0'  className="filter__genre item">
									<div data-index='0' className="filter__info">
										<svg data-index='0' className="filter__icon"><use data-index='0' href="#genre-icon"></use></svg>
										<div data-index='0' className="filter__title">Genre</div>
									</div>
								<Sections sectionsState={sectionsState[0].name} visible={sectionsState[0].visible} inputValue ={inputValues[0]} />
								</div>
								<div  data-index='1' className="filter__bpm item">
									<div data-index='1' className="filter__info">
										<svg data-index='1' className="filter__icon bpm"><use data-index='1' href="#bpm-icon"></use></svg>
									<div data-index='1' className="filter__title">BPM</div>
									</div>
									<Sections sectionsState={sectionsState[1].name} visible={sectionsState[1].visible} inputValue ={inputValues[1]}  />
								</div>
								<div data-index='2' className="filter__energy item">
									<div data-index='2' className="filter__info">
										<svg  data-index='2' className="filter__icon energy"><use data-index='2' href="#energy-icon"></use></svg>
										<div  data-index='2' className="filter__title">Energy</div>
									</div>
									<Sections sectionsState={sectionsState[2].name} visible={sectionsState[2].visible} inputValue ={inputValues[2]}/>
		
								</div>
								<div data-index='3' className="filter__mood item">
									<div data-index='3' className="filter__info">
										<svg data-index='3' className="filter__icon mood"><use data-index='3' href="#mood-icon"></use></svg>
										<div data-index='3'className="filter__title">Mood</div>
									</div>
									<Sections sectionsState={sectionsState[3].name} visible={sectionsState[3].visible} inputValue={inputValues[3]}/>
							
								</div>
								<div data-index='4' className="filter__price item">
									<div data-index='4'  className="filter__info">
										<svg data-index='4' className="filter__icon price"><use data-index='4' href="#dollar-icon"></use></svg>
										<div data-index='4' className="filter__title">Price</div>
									</div>
									
									<Sections sectionsState={sectionsState[4].name} visible={sectionsState[4].visible} inputValue={inputValues[4]}/>
								</div>
							</div>

							<Beats beatsList={beatsList} sortedBeats={sortedBeats} setSortedBeats={setSortedBeats}/>

					</div>
		</div>
	);
}

export default Filter;
