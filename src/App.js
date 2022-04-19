import React from 'react';
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Createaccount from './Pages/CreateAccount';
import Main from './Pages/Main';
import Login from './Pages/Login';



function App() {
   return (
				<div>
					<Router>
						<Routes>
							<Route exact path='/' element={<Main/>}/> 
							<Route exact path='/create' element={<Createaccount/>}/> 
							<Route exact path='/login' element={<Login/>}/>
						</Routes>
					</Router>
				</div>
   );
}

export default App;
