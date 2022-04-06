import React from "react";
import { AiFillStar } from "react-icons/ai";

const Movies = ({ details }) => {
	return (
		<>
			{details.map(({ id, image, name, rating }) => {
				return (
					<section key={id} className='movie'>
						<img src={image.medium} alt='movie poster' />
						<div className='name-rating'>
							<h4>{name.length > 18 ? name.slice(0, 18) + "..." : name}</h4>
							<p>
								<AiFillStar style={{ color: "rgb(223, 223, 22)" }} />{" "}
								{rating.average}
							</p>
						</div>
						<button className='hide-btn'>Hide</button>
						<button className='add-btn'>Add to WatchList</button>
					</section>
				);
			})}
		</>
	);
};

export default Movies;
