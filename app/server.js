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
    origin: ['http://localhost:5500','http://127.0.0.1:5500','http://localhost:5173', 'https://crud-swart-xi.vercel.app']
}))

server.get('/',(req,res) => {
    res.json({message:'Hello from express backend'})
})


// Route mounting: keep the backend contract aligned with the Vercel /api rewrite.
server.use("/api" ,employeeRoutes)


// Start server
// Only listen locally. Vercel handles listening automatically in production.
if (process.env.NODE_ENV !== 'production') {
    server.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
}

module.exports = server