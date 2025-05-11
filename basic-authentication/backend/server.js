import express from 'express'
import { connectDb } from './config/db.js'
import cors from 'cors'

import userRoute from './routes/userRoute.js'



const app = express()

app.use(cors({
  origin: 'http://localhost:5173', // Allow only your frontend
//   credentials: true // If you're using cookies or auth headers
}));

app.use(express.json());

app.use(userRoute)

connectDb()

app.get('/chk', (req, res) => {
  res.send('hello')
})

app.listen(3000, () => {
  console.log('app is listening on 3000')
})
