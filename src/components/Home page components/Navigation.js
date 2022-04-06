import React from "react";

const Navigation = () => {
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
				<a href=''>
					<li>WatchList</li>
				</a>
				<a href=''>
					<li>Hidden</li>
				</a>
			</ul>
		</nav>
	);
};

export default Navigation;
