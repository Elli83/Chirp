import React from "react"
import "./profile.scss"

export default function Profile() {
	return (
		<div className='page' id='profile'>
			<div className='banner'></div>

			<div class='cols'>
				<div id='user'>
					<div id='info'>
						<div id='photo'></div>
						<span id='name'>John Doe</span>
						<span id='username'>@johndoe123</span>
					</div>
				</div>
				<div id='posts'>
					<div id='nav'>
						<span className='active'>Chirps</span>
						<span>Chirps & Replies</span>
						<span>Media</span>
						<span>Likes</span>
					</div>
				</div>
				<div id='other'>Other</div>
			</div>
		</div>
	)
}
