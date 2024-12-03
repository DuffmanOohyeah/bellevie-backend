'use strict';
import { supportWorker } from '../mockData/workers';
import { visits } from '../mockData/visits';
import { SupportWorkerProps } from '../interfaces/workers';
import { VisitProps } from '../interfaces/visits';
import { WorkerVisitsProps } from '../interfaces/workerVisits';

export const getSupportData = (supportWorkerId: number): WorkerVisitsProps => {
	const filteredWorkers: SupportWorkerProps[] = supportWorker.filter(
		(obj) => obj.supportWorkerId === supportWorkerId
	);
	const filteredVisits: VisitProps[] = visits
		.filter((obj) => obj.supportWorkerId === supportWorkerId)
		.sort((a, b) => a.startDateTime - b.startDateTime);

	const mergedVisits: WorkerVisitsProps = {};

	filteredWorkers.map((wkr: SupportWorkerProps) => {
		mergedVisits.supportWorkerId = wkr.supportWorkerId;
		mergedVisits.contractedHours = wkr.contractedHours;
		mergedVisits.name = wkr.name;

		const visitArr: VisitProps[] = filteredVisits.map((vst: VisitProps) => {
			return {
				visitId: vst.visitId,
				startDateTime: vst.startDateTime,
				endDateTime: vst.endDateTime,
			};
		});

		mergedVisits.visits = visitArr;
	});

	return mergedVisits;
};
