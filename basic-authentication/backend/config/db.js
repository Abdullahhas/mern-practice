import mongoose from 'mongoose'

const url = 'mongodb://localhost:27017/basic-mern'

export const connectDb = () => {
  mongoose
    .connect(url)
    .then(() => console.log('connection successful'))
    .catch((err) => console.log(err))
}
