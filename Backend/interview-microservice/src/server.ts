import dotenv from 'dotenv';
dotenv.config();
import app from './app';
import connectDB from './config/db';


connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});