import React,{useContext,useMemo,useState,useRef,useEffect} from 'react';
import { MainContext } from '../../Cart/MainProvider';

const Beat = ({beat,index}) => {
	const {cartList,setCartList,sortedBeats,setSortedBeats,beatsList,setBeatsList,changePlayerState} = useContext(MainContext)
	const [intervalState,setIntervalState] = useState(false) 
	const [progressWidth,setProgressWidth] = useState(null)

	const currentTrack = useRef(null)
	const intervalId = useRef(null)
	const beatBlock = useRef(null)

	function toggleCardItem (beat){
		const beatIndex = (sortedBeats.indexOf(beat) + 1)
		if(beat.bought){
			setSortedBeats([...sortedBeats].map((currentBeat,currentIndex)=>{
				if(beatIndex === currentIndex + 1){
					return {...beat, bought : false}
				}
				return currentBeat
			}))
			// ----
			setBeatsList([...beatsList].map((currentBeat)=>{
				if(beat.id === currentBeat.id){
					return {...beat, bought : false}
				}
				return currentBeat
			}))
			// ----
			setCartList(cartList.filter((currentBeat)=>{
				 return currentBeat.id !== beat.id
			}))
			return
		}
		setSortedBeats([...sortedBeats].map((currentBeat,currentIndex)=>{
			if(beatIndex === currentIndex + 1){
				return {...beat, bought : true}
			}
			return currentBeat
		}))
		setBeatsList([...beatsList].map((currentBeat)=>{
			if(beat.id === currentBeat.id){
				return {...beat, bought : true}
			}
			return currentBeat
		}))
		setCartList([...cartList,{...beat, bought : true}])
	}
	function playTrack(beat){
		setSortedBeats([...sortedBeats].map((currentBeat)=>{
			if(beat.id === currentBeat.id){
				return {...beat,play : !beat.play}
			}
			return {...currentBeat, play : false}
		}))
	}

	let btn = {value : 'Buy'}
	if(beat.bought){
		btn = {
			disabled : 'true',
			backgroundColor : '#FF4B44',
		}
	}

	let playerStyle = ''
	if(!beat.play){

		playerStyle = ['filter__start-btn','filter__progress-none']
		if(currentTrack.current){
			currentTrack.current.pause()
			clearInterval(intervalId.current)
		}
	}else{
		playerStyle = ['filter__stop-btn','filter__progress-play']
		if(currentTrack.current ){
			currentTrack.current.play()
			intervalId.current = setInterval(()=>{
				setProgressWidth(Math.round((beatBlock.current.clientWidth / currentTrack.current.duration ) * Math.round(currentTrack.current.currentTime))) 
			},1000)
		}
	}	
	useEffect(() => {
		beatBlock.current.addEventListener('click',(event)=>{
			setProgressWidth(event.offsetX )
			currentTrack.current.currentTime = (event.offsetX / beatBlock.current.clientWidth) * Math.round(currentTrack.current.duration)
		})
	},[]);

	return (
		<div className="filter__beat">
			<div className="filter__progress" ref={beatBlock}>
				<div className={playerStyle[1]} style={{width:progressWidth + 'px'}} ></div>
			</div>
			<div className="filter__result-beat">
				<div className="filter__player">
					<audio ref={currentTrack} src={beat.audio.track}></audio>
					<div className="filter__beat-index">{index}</div>
				<div onClick={(e)=>{e.stopPropagation()
				playTrack(beat)
				}} className={playerStyle[0]}>
					<button type="button"></button>
				</div>
				<div className="filter__beat-info">
					<div className="filter__beat-title">{beat.name}</div>
					<div className="filter__beat-about">
						<div className="filter__producer-name">{beat.author}</div>
						<div className="filter__beat-btm">{beat.bpm}</div>
						<div className="filter__mood">{beat.mood}</div>
					</div>
				</div>
				</div>
				<div className="filter__buy-btn">
					 <button style={btn} type="button" onClick={()=> toggleCardItem(beat,index)}>{beat.price}</button> 
				 </div>
			</div>
		</div>
	);
}

export default Beat;
