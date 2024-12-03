'use strict';
import express, { Express, Request, Response } from 'express';
import compression from 'compression';
import { supportWorker } from '../mockData/workers';
import { visits } from '../mockData/visits';
import { getSupportData } from './workerVisits';
import { WorkerVisitsProps } from '../interfaces/workerVisits';

const app: Express = express();
const port: number = 3000;

app.use(compression());

app.get('/', (req: Request, res: Response): void => {
	res.send('Welcome to Belleview backend tech test');
});

app.get('/getSupportWorkers', (req: Request, res: Response): void => {
	res.json({ supportWorkers: supportWorker });
});

app.get('/getVisits', (req: Request, res: Response): void => {
	res.json({ visits: visits });
});

app.get(
	'/getSupportWorkerVisits/:id?',
	async (req: Request, res: Response): Promise<void> => {
		const { id } = req.params; // param id  aka 'supportWorkerId'
		const parsedInt: number = parseInt(id);
		const isValidNan: boolean = isNaN(parsedInt);

		if (isValidNan)
			res.send('Please supply a support worker id in the URL params.');
		else {
			const result: WorkerVisitsProps = await getSupportData(parsedInt);
			res.json(result);
		}
	}
);

app.listen(port, (): void => {
	console.log(`Bellevie backend app listening on port ${port}`);
});
