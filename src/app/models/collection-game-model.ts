import { BundleCollectionModel } from "./bundle-collection";
import { DLCBacklogModel } from "./dlc-collection";
import { EntirePlayModel } from "./entire-play-model";
import { GameModel } from "./game-model";
import { MediaTypeModel } from "./media-type-model";
import { SituationGameModel } from "./situation-game-model";
import { UserModel } from "./user-model";

export class CollectionGameModel implements DateCollectionString {
	idCollectionGame: number;
	mediaType: MediaTypeModel;
	situationGame: SituationGameModel = new SituationGameModel;
	game: GameModel = new GameModel();
	entirePlay: EntirePlayModel = new EntirePlayModel();
	user: UserModel;
	backlogDate: Date;
	finishDate: Date;
	gameplayConsiderations: number;
	storyConsiderations: number;
	soundtrackConsiderations: number;
	graphicsConsiderations: number;
	generalConsiderations: number;
	hasConsiderations: boolean;
	backlogDateString: string;
	finishDateString: string;
	progressPSNTrophy: number;
	gamePsnData: BacklogGamePsnData = new BacklogGamePsnData();
	gameSteamData: BacklogSteamData = new BacklogSteamData();
	gameXboxData: BacklogXboxData = new BacklogXboxData();
	dlcBacklog: DLCBacklogModel[] = new Array();
	bundleBacklog: BundleCollectionModel[] = new Array();
}

export class BacklogGamePsnData {
	idBacklogGamePsnData: number;
	progressPSNTrophy: number;
	earnedBronzeTrophy: number;
	earnedSilverTrophy: number;
	earnedGoldTrophy: number;
	earnedPlatinumTrophy: number;
	playTime: string;
	firstPlayedDateTime: Date;
	lastPlayedDateTime: Date;
}

export class BacklogSteamData {
	idBacklogGameSteam: number;
	playTime: number;
}

export class BacklogXboxData {
	idBacklogGameXbox: number;
	playTime: number;
}

export class DateCollectionString {
	backlogDateString: string;
	finishDateString: string;
}


export class CollectionGameDashboardTimelineModel {
	idCollectionGame: number;
	game: GameModel = new GameModel();
	finishDate: Date;
}