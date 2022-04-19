import React,{useState,useMemo, useEffect} from 'react';
import track from '../../../tracks/track.mp3'

export const MainContext = React.createContext()

const MainProvider = ({children}) => {
	const [inputValues,setInputValues] = useState([
		{'Trap':false,'Hip Hop':false,'Pop':false,},	
		{'Slow':false,'Fast' :false},
		{'Hyper' :false,'Dancing' :false},
		{'Epic' :false,'Funny' :false},
		{'1-20':false,'20-50' :false,'50-100': false},
	])

	const [beatsList,setBeatsList] = useState([
		{id:1,genre:'pop', bpm:'slow',energy:'dancing', mood:'funny', price:5 , name:'Pop beat', author:'Dima', bought:false, play:false,audio: {track}},
		{id:2,genre:'trap', bpm:'fast',energy:'hyper', mood:'epic', price:15 , name:'Mega trap', author:'Andry', bought:false, play:false,audio: {track}},
		{id:3,genre:'hip hop', bpm:'fast',energy:'hyper', mood:'funny', price:30 , name:'Hyperpop', author:'Maks', bought:false, play:false,audio: {track}},
		{id:4,genre:'pop', bpm:'slow',energy:'dancing', mood:'epic', price:16 , name:'Pop type beat', author:'Elton', bought:false, play:false,audio: {track}},
		{id:5,genre:'trap', bpm:'fast',energy:'hyper', mood:'funny', price:36 , name:'Travis Scott type beat', author:'Stive', bought:false, play:false,audio: {track}},
		{id:6,genre:'pop', bpm:'slow',energy:'dancing', mood:'funny', price:10 , name:'Pop beat', author:'Dima', bought:false, play:false,audio: {track}},
		{id:7,genre:'trap', bpm:'fast',energy:'hyper', mood:'epic', price:15 , name:'Mega trap', author:'Andry', bought:false, play:false,audio: {track}},
		{id:8,genre:'hip hop', bpm:'fast',energy:'hyper', mood:'funny', price:50 , name:'Hyperpop', author:'Maks', bought:false, play:false,audio: {track}},
		{id:9,genre:'pop', bpm:'slow',energy:'dancing', mood:'epic', price:99 , name:'Pop type beat', author:'Elton', bought:false, play:false,audio: {track}},
		{id:10,genre:'trap', bpm:'fast',energy:'hyper', mood:'funny', price:10 , name:'Travis Scott type beat', author:'Stive', bought:false, play:false,audio: {track}},
	])
	const [sortedBeats,setSortedBeats] = useState(beatsList)
	const [cartState,setCartState] = useState(false)
	const [cartList,setCartList] = useState([])
	const [searching,setSearching] = useState(false)
	const [searchValue,setSearchValue] = useState('')

	useMemo(()=>{
		let count = 0
		inputValues.forEach((section)=>{
			if(Object.values(section).every((value) => value === false)){
				count++
			}
		})
		if(count === inputValues.length){
			setSortedBeats(beatsList)
		}
		const selectValuesArray = []
		const selectedValues = []
		inputValues.forEach((section)=>{
			const selectValuesSection = []
			for (const key in section) {
				if(section[key]){
					selectedValues.push(key)
					selectValuesSection.push(key)
				}
			}
			selectValuesArray.push(selectValuesSection)
		})
		const selectedValuesArray = selectValuesArray.filter(arr => arr.length)

	

		if(selectedValuesArray.length){
			const array = []
			let sortedBeatsArray = []
			selectedValuesArray.forEach((section,index)=>{
				if(array.length){
					sortedBeatsArray.length = 0
					array.forEach((beat)=>{
						for (let i = 0; i < section.length; i++) {
							if(parseInt(section[i].replace(/[^+\d]/g, ''))){
								const price = section[i].split('-')
								if(beat.price > price[0] && beat.price <= price[1]){
									sortedBeatsArray.push(beat)
								}
							}
							if(Object.values(beat).includes(section[i].toLowerCase())){
								sortedBeatsArray.push(beat)
							}
						}
					})
				}	
				beatsList.forEach((beat)=>{
					section.forEach((select)=>{
						if(parseInt(select.replace(/[^+\d]/g, ''))){
							const price = select.split('-')
							if(beat.price > price[0] && beat.price <= price[1]){
								array.push(beat)
							}
						}
						if(Object.values(beat).includes(select.toLowerCase())){
							array.push(beat) 
						}
						})
					})
				if(selectedValuesArray.length === 1){
					setSortedBeats(array)
				}else{
					setSortedBeats(sortedBeatsArray)
				}		
			})
			
			
		}
	},[inputValues])

	useMemo(()=>{
		if(searchValue){
			setSortedBeats(beatsList.filter((beat)=>{
				const values = [beat.genre,beat.author,beat.name].join('').toLowerCase().replace(/\s+/g, '')
				if(values.includes(searchValue.toLowerCase().replace(/\s+/g, ''))){
					return true
				}
			}))
		}
		
	},[searching])
	
	useMemo(()=>{
		if(!searchValue){
			setSortedBeats(beatsList)
		}
	},[searchValue])


	return (
		<MainContext.Provider value={{searching,setSearching,searchValue,setSearchValue,cartState,setCartState,
		cartList,setCartList,beatsList,sortedBeats,setSortedBeats,inputValues,setInputValues,setBeatsList,}}>
		{children}
		</MainContext.Provider>
	);
}

export default MainProvider;
