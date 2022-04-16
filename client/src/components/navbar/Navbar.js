import React from "react"

import "./navbar.scss"

export default function Navbar() {
	return (
		<React.Fragment>
			<div className='sidenav'>
				<div className='brand'>
					<h3>CHIRP</h3>
				</div>

				<div className='nav'>
					<div className='nav-item active'>Home</div>
					<div className='nav-item'>Explore</div>
					<div className='nav-item'>Notifications</div>
					<div className='nav-item'>Messages</div>
					<div className='nav-item'>Bookmarks</div>
					<div className='nav-item'>Lists</div>
					<div className='nav-item'>Profile</div>
					<div className='nav-item'>More</div>
				</div>
			</div>

			<div className='topnav'>
				<div className='nav'>Pages</div>
				<div className='search'>Search</div>
				<div className='user'>Hi, User!</div>
			</div>
		</React.Fragment>
	)
}
