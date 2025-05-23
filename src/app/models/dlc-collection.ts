import { SituationGameModel } from "./situation-game-model";

export class DLCGameModel {
	idDLCGame?: number;
	dlcExpansionTitle?: string;
	idGame?: number;
	releaseDate?: string;
	coverDLCUrl?: string;
}

export class DLCBacklogModel {
	idDlcBacklog?: number;
	expansion?: DLCGameModel;
	status?: SituationGameModel;
	finishDate?: Date;
	finishDateString?: string;
}