const express = require("express")
const app = express()

app.get("/", (req, res) => {
	res.send("Hello, World!")
})

const PORT = process.env.PORT || 3000
app.listen(PORT, err => {
	if (err) throw err
	console.log(`Server listening on port ${PORT}`)
})
