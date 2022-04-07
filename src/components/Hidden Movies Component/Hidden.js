import React from "react";
import { useGlobalContext } from "../Functions/context";
import { Link, useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const Hidden = () => {
	const { hiddenData, getIndividualMovieData, removeFromHiddenList } =
		useGlobalContext();

	const navigate = useNavigate();

	return (
		<>
			<section className='movie-container'>
				{hiddenData.length ? (
					hiddenData.map(({ id, image, name, rating }) => {
						return (
							<section key={id} className='movie'>
								<img src={image.medium} alt='movie poster' />
								<Link
									to='/movie'
									onClick={() => getIndividualMovieData(id, hiddenData)}
									className='name-rating'
								>
									<h4>{name.length > 18 ? name.slice(0, 18) + "..." : name}</h4>
									<p>
										<AiFillStar style={{ color: "rgb(223, 223, 22)" }} />{" "}
										{rating.average}
									</p>
								</Link>
								<button
									onClick={() => removeFromHiddenList(id)}
									className='add-btn'
								>
									Remove from Hidden
								</button>
							</section>
						);
					})
				) : (
					<section className='empty-watchlist'>
						<div>
							<p>NO MOVIES ADDED IN YOUR HIDDENLIST...</p>
							<button onClick={() => navigate("/")}>Back to Home</button>
						</div>
					</section>
				)}
			</section>
		</>
	);
};

export default Hidden;
