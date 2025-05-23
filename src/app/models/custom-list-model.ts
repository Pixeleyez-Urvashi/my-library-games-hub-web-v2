import { GameModel } from "./game-model";
import { UserModel } from "./user-model";

export class CustomListModel {
	idCustomList: number;
	customListGamesName: string;
	customListGamesDescription: string;
	shareCustomListGames: boolean;
	sortCustomListGame: number;
	orderTypeCustomListGame: number;
	customListGameCreateDate: Date;
	customListGameModifiedDate: Date;
	games: Array<GameModel> = [];
	user: UserModel = new UserModel();

}

export class CustomListModelGames {
	public idCustomListGames: number;
	public game: GameModel = new GameModel();
	public gameInCollection: boolean;

}
