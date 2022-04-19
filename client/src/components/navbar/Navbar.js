import React from "react"

import "./navbar.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faHome,
	faCompass,
	faBell,
	faEnvelope,
	faBookmark,
	faList,
	faUser,
	faEllipsis,
	faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
	return (
		<React.Fragment>
			<div className='sidenav'>
				<div className='brand'>
					<h3>CHIRP</h3>
				</div>

				<div className='nav'>
					<div className='nav-item active'>
						<FontAwesomeIcon icon={faHome} fixedWidth />
						Home
					</div>
					<div className='nav-item'>
						<FontAwesomeIcon icon={faCompass} fixedWidth />
						Explore
					</div>
					<div className='nav-item'>
						<FontAwesomeIcon icon={faBell} fixedWidth />
						Notifications
					</div>
					<div className='nav-item'>
						<FontAwesomeIcon icon={faEnvelope} fixedWidth />
						Messages
					</div>
					<div className='nav-item'>
						<FontAwesomeIcon icon={faBookmark} fixedWidth />
						Bookmarks
					</div>
					<div className='nav-item'>
						<FontAwesomeIcon icon={faList} fixedWidth />
						Lists
					</div>
					<div className='nav-item'>
						<FontAwesomeIcon icon={faUser} fixedWidth />
						Profile
					</div>
					<div className='nav-item'>
						<FontAwesomeIcon icon={faEllipsis} fixedWidth />
						More
					</div>
				</div>

				<div className='post'>
					<div className='post-button'>New Post</div>
				</div>
			</div>

			<div className='topnav'>
				<div className='nav'>Pages</div>
				<div className='search-bar'>
					<form>
						<div id='icon'>
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</div>
						<input id='search' placeholder='Seach on Chirp'></input>
					</form>
				</div>
				<div className='user'>
					Hi, User! <div id='avatar'></div>
				</div>
			</div>
		</React.Fragment>
	)
}
