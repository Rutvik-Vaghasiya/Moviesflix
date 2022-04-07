import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Functions/context";

const Movies = ({ details, hideData }) => {
	const { getIndividualMovieData, getMovieAddedToWatchList } =
		useGlobalContext();

	return (
		<>
			{details.map(({ id, image, name, rating }) => {
				return (
					<section key={id} className='movie'>
						<img src={image.medium} alt='movie poster' />
						<Link
							to='/movie'
							onClick={() => getIndividualMovieData(id, details)}
							className='name-rating'
						>
							<h4>{name.length > 18 ? name.slice(0, 18) + "..." : name}</h4>
							<p>
								<AiFillStar style={{ color: "rgb(223, 223, 22)" }} />{" "}
								{rating.average}
							</p>
						</Link>
						<button onClick={() => hideData(id)} className='hide-btn'>
							Hide
						</button>
						<button
							onClick={() => getMovieAddedToWatchList(id, details)}
							className='add-btn'
						>
							Add to WatchList
						</button>
					</section>
				);
			})}
		</>
	);
};

export default Movies;
