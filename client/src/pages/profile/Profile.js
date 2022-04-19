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
						<span id='bio'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						</span>

						<div id='stats'>
							<div className='stat'>
								<span className='title'>Posts</span>
								<span className='number'>123</span>
							</div>
							<div className='stat'>
								<span className='title'>Followers</span>
								<span className='number'>789</span>
							</div>
							<div className='stat'>
								<span className='title'>Following</span>
								<span className='number'>456</span>
							</div>
						</div>
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
