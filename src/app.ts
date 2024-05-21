// const express = require('express')
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentsRoutes } from './app/modules/student/student.route';
const app: Application = express();
//parser//
app.use(express.json());
app.use(cors());

// * application route//
app.use("/api/v1/students", StudentsRoutes)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

export default app;
