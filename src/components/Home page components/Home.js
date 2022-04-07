import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { useGlobalContext } from "../Functions/context";
import Movies from "./Movies";

const url = "https://api.tvmaze.com/shows";

const Home = () => {
	const { getHiddenData } = useGlobalContext();

	//Reducer Function
	const reducer = (state, action) => {
		if (action.type === "RECEIVED_DATA") {
			return { ...state, data: action.payload, loading: false };
		}
		if (action.type === "ERROR_IN_RECEIVING_DATA") {
			return { ...state, error: true };
		}
		if (action.type === "LATEST_DATA") {
			return { ...state, data: action.payload };
		}
		if (action.type === "HIDDEN_DATA") {
			return { ...state, hidden: action.payload };
		}
	};

	//initial state values
	const initialState = {
		data: [],
		hidden: [],
		loading: true,
		error: false,
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	//data fetching from the API using AXIOS

	useEffect(() => {
		const fetchdata = async () => {
			try {
				const request = await axios.get(url);
				dispatch({ type: "RECEIVED_DATA", payload: request.data });
			} catch {
				dispatch({ type: "ERROR_IN_RECEIVING_DATA" });
			}
		};

		fetchdata();
	}, []);

	const hideData = (id) => {
		const movieToHide = state.data.filter((movie) => movie.id === id);
		const dataToHide = [...state.hidden, ...movieToHide];
		dispatch({ type: "HIDDEN_DATA", payload: dataToHide });
		const newData = state.data.filter((movie) => movie.id !== id);
		dispatch({ type: "LATEST_DATA", payload: newData });
	};

	getHiddenData(state.hidden);

	return (
		<article className='movie-container'>
			{state.loading && <h1 className='loading'>Loading...</h1>}
			{state.error && <h1 className='error'>Error...</h1>}
			<Movies details={state.data} hideData={hideData} />
		</article>
	);
};

export default Home;
