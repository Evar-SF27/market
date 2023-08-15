import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv';

dotenv.config()

var app: Express = express()
var PORT = process.env.PORT || 3500

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`)
});