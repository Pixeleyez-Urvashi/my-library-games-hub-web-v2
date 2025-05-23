import { PSNGameListTrophyModel } from "./psn-game-list-trophy";


export class PSNGameListTrophyStatus {
	idPsnGameListTrophyStatus: number;
	idCollectionBacklogTrophy: number;
	psnTrophy: PSNGameListTrophyModel;
	trophyEarned: boolean;
	trophyEarnedDateTime: Date;
}

export class DateCollectionString {
	backlogDateString: string;
	finishDateString: string;
}
