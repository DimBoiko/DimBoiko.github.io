import React,{useContext} from 'react';
import { ModalContext } from '../../Pages/Main';
import {Link} from 'react-router-dom';

const Modal = () => {

	const {modalState,setModalState} = useContext(ModalContext)

	if(!modalState){return ''}

	return (
		<div className="modal">
			<div className="header__user-block-modal">
				<div className="header__account-modal">
					<svg className="header__user-icon-modal"><use href="#user-icon"></use></svg>
					<span className="header__create-modal"><Link to='create'>Create account</Link></span>
					<span className="header__sign-in-modal"><Link to='login'>Sign in</Link></span>
				</div>	
				<div className="modal__close" onClick={()=> setModalState(!modalState)}>&#9587;</div>
				<nav className="header__navigation-modal">
					<ul className="header__nav-list-modal">
						<li className="header__nav-item-modal"><a>All beats</a> </li>
						<li className="header__nav-item-modal"><a>New</a></li>
						<li className="header__nav-item-modal"><a>Top charts</a></li>
					</ul>
				</nav>
			</div>

		</div>
		
	);
}

export default Modal;
