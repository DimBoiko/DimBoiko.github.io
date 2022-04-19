import React,{useState} from 'react';
import Header from '../components/Main/Header'
import Filter from '../components/Main/Filter/Filter';
import Search from '../components/Main/Search'
import Playlists from '../components/Main/Playlists';
import Footer from '../components/Main/Footer'
import Checkedlist from '../components/Main/Filter/CheckedList';
import Modal from '../components/Main/Modal';
import Icons from '../components/Main/Icons';
import MainProvider from '../components/Main/Cart/MainProvider';

import '../scss/main.scss'
import logo from '../source/img/headphones.png'
import trap from '../source/img/trap.jpg'
import drill from '../source/img/smoke.jpg'
import hyperpop from '../source/img/100gecs.jpg'
import electronic from '../source/img/electronic.jpg'
import rock from '../source/img/rock.jpg'
import rnb from '../source/img/rnb.jpg'



export const ModalContext = React.createContext()

const Main = () => {

	const [modalState,setModalState] = useState(false)
   const [playlist,setPlaylist] = useState ([trap,drill,hyperpop,electronic,rock,rnb])

	const displayNone = {
		'display' : 'none'
	}

	return (
		<div className="wrapper">
			<MainProvider>
					<ModalContext.Provider value={{modalState,setModalState}}>
						<Modal/>
						<Icons displayNone={displayNone} />
						<Header logo={logo}/>
					</ModalContext.Provider>
					<main>
						<div className="container">
							<Search/>
							<Checkedlist/>
							<Filter displayNone={displayNone}/>
							<Playlists
							img={playlist}/>
						</div>
					</main>
					<Footer/>
				</MainProvider>
				</div>
	);
}

export default Main;
