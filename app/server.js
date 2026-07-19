const cors = require('cors')
const express = require('express')
const path = require('path')
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const serviceAccount = require("./serviceAccountKey.json");
const PORT = process.env.PORT || 8080;

//  Initialize Firebase
initializeApp({
  credential: cert(serviceAccount)
});
const db = getFirestore();

//  Initialize Express Server
const server = express()

server.use(express.json())
server.use(cors({
    origin: ['http://localhost:5500','http://127.0.0.1:5500']
}))

// Routes
server.get('/', (req,res) => {
    res.send("Hello World")
})


// Start server
server.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));