import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

export const Provider = ({ children }) => {
	const [individualMovieData, setIndividualMovieData] = useState([]);
	const [hiddenList, setHiddenList] = useState([]);
	const [watchList, setWatchList] = useState([]);

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

	//when user removes movie from watchlist
	const removeFromWatchList = (id) => {
		setWatchList(watchList.filter((movie) => movie.id !== id));
	};

	//number of movies in watchlist
	const numWatchList = watchList.length;

	return (
		<AppContext.Provider
			value={{
				getIndividualMovieData,
				getMovieAddedToWatchList,
				removeFromWatchList,
				individualMovieData,
				numWatchList,
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
