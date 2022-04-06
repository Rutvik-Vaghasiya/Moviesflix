import React from "react";
import Navigation from "./components/Home Page Components/Navigation";
import Home from "./components/Home Page Components/Home";
import Footer from "./components/Home Page Components/Footer";
import WatchList from "./components/WatchList Component/WatchList";
import Hidden from "./components/Hidden Movies Component/Hidden";
import Individual from "./components/Individual Page Component/Individual";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/watch-list' element={<WatchList />} />
				<Route path='/hidden-list' element={<Hidden />} />
				<Route path='/movie' element={<Individual />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
