import React,{useContext} from 'react';
import { MainContext } from './MainProvider';

const Cart = () => {
	let totalPrice = 0
	const {cartState,setCartState,cartList,setCartList,sortedBeats,setSortedBeats,beatsList,setBeatsList} = useContext(MainContext)
	if(!cartState){return ''}
	
	function removeItem(id){
		setSortedBeats(sortedBeats.map((beat)=>{
			if(beat.id === id){
				return {...beat, bought : false}
			}
			return beat
		}))
		setBeatsList(beatsList.map((beat)=>{
			if(beat.id === id){
				return {...beat, bought : false}
			}
			return beat
		}))

		setCartList(cartList.filter((beat)=>{
			return beat.id !== id
		}))
	}
	function closeCart(){
		if(cartList.length - 1 === 0){
			setCartState(false)
		}
	}

	return (
		<div className='cart'>
			<div className="cart__block">
				<ul className="cart__items">
					{cartList.length ? 	cartList.map((beat)=>{
						totalPrice += beat.price
					   return <li key={beat.id} className="cart__item">{beat.name} <p>&#36;{beat.price}</p> 
										<span onClick={()=> 
											{removeItem(beat.id)
											closeCart()}}>&times;
										</span> 
								</li>
					}) : <p className='cart__empty'>Cart is empty!</p>}	  
				</ul>
				<div className="cart__total-price">&#36;{totalPrice}</div>
				<button className='cart__btn' type='button'>Pay off</button>
			</div>
		</div>
	);
}

export default Cart;
