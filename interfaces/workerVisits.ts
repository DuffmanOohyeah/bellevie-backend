import { VisitProps } from './visits';

export interface WorkerVisitsProps {
	supportWorkerId?: number;
	contractedHours?: number;
	name?: string;
	visits?: VisitProps[];
}
