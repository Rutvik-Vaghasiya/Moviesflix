import React, { useContext, useState, useEffect } from "react";

//getting local storage to preserve the values between the refresh
const getLocalStorageForWatchList = () => {
	let watchList = localStorage.getItem("watchList");

	if (watchList) {
		return JSON.parse(localStorage.getItem("watchList"));
	} else {
		return [];
	}
};

const getLocalStorageForHiddenData = () => {
	let hiddenList = localStorage.getItem("hiddenData");
	if (hiddenList) {
		return JSON.parse(localStorage.getItem("hiddenData"));
	} else {
		return [];
	}
};

const AppContext = React.createContext();

export const Provider = ({ children }) => {
	const [individualMovieData, setIndividualMovieData] = useState([]);
	const [hiddenData, setHiddenData] = useState(getLocalStorageForHiddenData());
	const [watchList, setWatchList] = useState(getLocalStorageForWatchList());

	//when a user clciks on a movie he/she is taken to individual movie page and this function gets data to be rendered on that page
	const getIndividualMovieData = (id, wholeData) => {
		setIndividualMovieData(wholeData.find((data) => data.id === id));
	};

	//when user adds a movie to watchlist then that particular should be added to the list this function gets all the data of movies which are added in watch list
	const getMovieAddedToWatchList = (id, wholeData) => {
		let addedMovie = wholeData.find((data) => data.id === id);
		let allMoviesInWatchList = [...watchList, addedMovie];
		let uniqueMoviesInWatchList = Array.from(new Set(allMoviesInWatchList));
		setWatchList(uniqueMoviesInWatchList);
	};

	//setting the values in local storage every time watch list changes
	useEffect(() => {
		localStorage.setItem("watchList", JSON.stringify(watchList));
	}, [watchList]);

	//when user removes movie from watchlist
	const removeFromWatchList = (id) => {
		setWatchList(watchList.filter((movie) => movie.id !== id));
	};

	//gets the data to be used in hidden component form home.js
	const getHiddenData = (data) => {
		setHiddenData(data);
	};

	//setting the values in local storage every time hiddenData changes
	useEffect(() => {
		localStorage.setItem("hiddenData", JSON.stringify(hiddenData));
	}, [hiddenData]);

	//when user removes movie from HiddenList
	const removeFromHiddenList = (id) => {
		setHiddenData(hiddenData.filter((movie) => movie.id !== id));
	};

	//number of movies in watchlist and hiddenlist
	const numWatchList = watchList.length;
	const numHiddenData = hiddenData.length;

	return (
		<AppContext.Provider
			value={{
				getIndividualMovieData,
				getMovieAddedToWatchList,
				removeFromHiddenList,
				removeFromWatchList,
				individualMovieData,
				getHiddenData,
				numHiddenData,
				numWatchList,
				hiddenData,
				watchList,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
