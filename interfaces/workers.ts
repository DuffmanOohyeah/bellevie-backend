import { VisitProps } from './visits';

export interface SupportWorkerProps {
	supportWorkerId: number;
	contractedHours: number;
	name: string;
	avatar?: string;
	visits?: VisitProps[];
}
