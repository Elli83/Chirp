import React from "react"
import "./app.scss"

// COMPONENTS
import Navbar from "./components/navbar/Navbar"

// PAGES
import Login from "./pages/login/Login"
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<Profile />
		</React.Fragment>
	)
}

export default App
