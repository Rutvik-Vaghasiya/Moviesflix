import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Functions/context";

const WatchList = () => {
	const { watchList, getIndividualMovieData, removeFromWatchList } =
		useGlobalContext();

	const navigate = useNavigate();

	return (
		<section className='movie-container'>
			{watchList.length ? (
				watchList.map(({ id, image, name, rating }) => {
					return (
						<section key={id} className='movie'>
							<img src={image.medium} alt='movie poster' />
							<Link
								to='/movie'
								onClick={() => getIndividualMovieData(id, watchList)}
								className='name-rating'
							>
								<h4>{name.length > 18 ? name.slice(0, 18) + "..." : name}</h4>
								<p>
									<AiFillStar style={{ color: "rgb(223, 223, 22)" }} />{" "}
									{rating.average}
								</p>
							</Link>
							<button
								onClick={() => removeFromWatchList(id)}
								className='add-btn'
							>
								Remove
							</button>
						</section>
					);
				})
			) : (
				<section className='empty-watchlist'>
					<p>NO MOVIES ADDED IN YOUR WATCHLIST...</p>
					<button onClick={() => navigate("/")}>Back to Home</button>
				</section>
			)}
		</section>
	);
};

export default WatchList;
