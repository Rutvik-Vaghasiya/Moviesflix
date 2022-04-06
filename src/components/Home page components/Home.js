import axios from "axios";
import React, { useEffect, useReducer } from "react";
import Movies from "./Movies";

const url = "https://api.tvmaze.com/shows";

const Home = () => {
	//Reducer Function
	const reducer = (state, action) => {
		if (action.type === "RECEIVED_DATA") {
			return { ...state, data: action.payload, loading: false };
		}
		if (action.type === "ERROR_IN_RECEIVING_DATA") {
			return { ...state, error: true };
		}
	};

	//initial state values
	const initialState = {
		data: [],
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

	return (
		<article className='movie-container'>
			<Movies details={state.data} />
		</article>
	);
};

export default Home;
