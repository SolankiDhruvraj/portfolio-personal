import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './utils/connectDB.js';
import projectApi from './apis/project.api.js';
import contactApi from './apis/contact.api.js';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(
  urlencoded({
    extended: true,
  }),
);

// CORS: allow localhost in dev and your Vercel frontend in prod
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

// Support both `/api/...` (local dev / Vite proxy) and `/...` (Vercel serverless)
app.use(['/api/project', '/project'], projectApi);
app.use(['/api/contact', '/contact'], contactApi);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Request is OK' });
});

export default app;

