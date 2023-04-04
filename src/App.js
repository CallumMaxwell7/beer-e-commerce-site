import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './Pages/Home';
import AvailableBeers from './Pages/beersAvailable';
import Contact from './Pages/Contact';
import Reviews from './Pages/Reviews';
import Basket from './Pages/Basket';


function App() {

	

return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/Home'  element={<Home />} />
		<Route path='/beersAvailable' element={<AvailableBeers/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path='/reviews' element={<Reviews/>} />
		<Route path='/basket' element={<Basket/>} />
	</Routes>
	</Router>
	
);
}

export default App;

