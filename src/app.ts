import express, { Request, Response } from 'express';
import 'dotenv/config';
import { connectDB } from './config/connectToMongo';
import cors from 'cors';
import http from 'http';
import MilitaryForm from './models/formModel';

import 'dotenv/config';

const PORT = process.env.PORT || 3000;

export const app = express();
export const server = http.createServer(app);

app.use(cors());
connectDB();
app.use(express.json());

app.get('/ping', (req: Request, res: Response) => {
    res.status(200).send('pong')});
app.post('/api/form',async (req: Request, res: Response) => {
    console.log(req.body);
   try {
    const newMilitaryForm = new MilitaryForm(req.body);
      await newMilitaryForm.save()
      res.status(201).json(newMilitaryForm)
   } catch (error) {
    console.log(error);
    res.status(400).json(error)
   }
})
    



server.listen(PORT, () => console.log(`Listening on port ${PORT},visit http://localhost:${PORT}`));