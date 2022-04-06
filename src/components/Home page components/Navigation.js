import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Functions/context";

const Navigation = () => {
	const { numWatchList } = useGlobalContext();

	return (
		<nav className='navigation'>
			<ul>
				<input
					className='searchbar'
					placeholder='Search movies...'
					type='text'
				/>
			</ul>
			<ul>
				<Link to='/watch-list'>
					<li>
						{numWatchList > 0 ? `WatchList (${numWatchList})` : "WatchList"}
					</li>
				</Link>
				<Link to='/hidden-list'>
					<li>Hidden</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Navigation;
