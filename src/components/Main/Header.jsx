import React,{useContext,useState} from 'react';
import { MainContext } from './Cart/MainProvider';
import { ModalContext } from '../../Pages/Main';
import { Link} from 'react-router-dom';
import Cart from './Cart/Cart';

const Header = ({logo}) => {
	const {modalState,setModalState} = useContext(ModalContext)
	const {cartState,setCartState,cartList,setCartList} = useContext(MainContext)

	return (
		<header className="header">			
		<div className="container">
			<div className="header__row">
				<div className="header__logo">
					<img src={logo} alt="logo"></img>
					<h1>beatShare.</h1>
				</div>
				<nav  className="header__navigation">
					<ul className="header__nav-list">
						<li className="header__nav-item"><a>All beats</a> </li>
						<li className="header__nav-item"><a>New</a></li>
						<li className="header__nav-item"><a>Top charts</a></li>
					</ul>
				</nav>							
				<div className="header__user-block">
					<div className="header__account">
						<span className="header__create"><Link to='create'>Create account</Link></span>
						<span className="header__sign-in"><Link to='login'>Sign in</Link></span>
						<Link to='login'><svg className="header__user-icon"><use href="#user-icon"></use></svg></Link>
					</div>	
					<div className="header__user-block-burger" onClick={()=> setModalState(!modalState)}>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className="header__card">
						<svg onClick={()=>{setCartState(!cartState)}} className="header__card-icon"><use href="#card-icon"></use></svg>
						<div className="header__card-count">{cartList.length}</div>
					</div>
				</div>
				<Cart/>
			</div>
		</div>
		</header>
	);
}

export default Header;
