import React from "react"
import "./app.scss"

// COMPONENTS
import Navbar from "./components/navbar/Navbar"

// PAGES
import Login from "./pages/login/Login"
import Home from "./pages/home/Home"

function App() {
	return (
		<React.Fragment>
			<Login />
		</React.Fragment>
	)
}

export default App
