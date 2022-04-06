import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Functions/context";

const Individual = () => {
	const { individualMovieData, getMovieAddedToWatchList } = useGlobalContext();
	const navigate = useNavigate();

	const { id, name, image, premiered, summary, rating } = individualMovieData;
	return (
		<article className='single-movie'>
			<img src={image.original} alt='movie-poster' />
			<section className='info'>
				<h1>{name}</h1>
				<span>Rating: {rating.average}</span>
				<span>Premiered on: {premiered}</span>
				<p>{summary}</p>
				<button>Hide</button>
				<button
					onClick={() => getMovieAddedToWatchList(id, [individualMovieData])}
					className='add-btn'
				>
					Add to WatchList
				</button>
				<button onClick={() => navigate("/")}>Back to Home</button>
			</section>
		</article>
	);
};

export default Individual;
