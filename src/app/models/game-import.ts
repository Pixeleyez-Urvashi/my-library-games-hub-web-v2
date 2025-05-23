
import { GameModel } from "./game-model";
import { MediaTypeModel } from "./media-type-model";
import { SituationGameModel } from "./situation-game-model";
import { UserModel } from "./user-model";

export class GameImportModel {
	idGameImportUser: number;
	game: GameModel = new GameModel();
	status: SituationGameModel = new SituationGameModel();
	mediaType: MediaTypeModel = new MediaTypeModel();
	user: UserModel = new UserModel();
	removed: boolean;
	finishDate: Date;
	finishDateString: string;
}

