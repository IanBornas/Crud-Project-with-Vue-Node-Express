const cors = require('cors')
const express = require('express')
const path = require('path')

//  Initialize Express Server
const server = express()
const PORT = process.env.PORT || 8080;

const employeeRoutes = require("./routes/employeeRoutes")

//middleware
server.use(express.json())
server.use(cors({
    origin: ['http://localhost:5500','http://127.0.0.1:5500']
}))

server.get('/',(req,res) => {
    res.json({message:'Hello from express backend'})
})


// Route mounting
server.use("/employees" ,employeeRoutes)


// Start server
server.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));