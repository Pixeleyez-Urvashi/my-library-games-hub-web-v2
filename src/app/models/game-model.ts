
import { BundleGameModel } from "./bundle-game-model";
import { DLCGameModel } from "./dlc-collection";
import { GameHLTBModel } from "./game-hltb";
import { GenreModel } from "./genre-model";
import { PlatformConsoleModel } from "./platform-console-model";

export class GameModel {
	idGame?: number;
	gameTitle?: string;
	coverGameURL?: string;
	gameHLTB: GameHLTBModel = new GameHLTBModel();
	companyGame?: string;
	releaseDate?: string;
	approved?: boolean;
	platformConsole: PlatformConsoleModel = new PlatformConsoleModel();
	genre: GenreModel = new GenreModel();
	wallpaperURL?: string;
	hasCheats?: boolean;
	gamesInCollection?: number;
	expansions: Array<DLCGameModel> = [];
	bundle: BundleGameModel = new BundleGameModel();
	gameConsoles: Array<GameConsoles> = []
}

export class FilterAppliedModel {
	consoleFilter?: PlatformConsoleModel;
	filterNameToView?: string;
}

export class GameConsoles {
	idGame?: number;
	platformConsole: PlatformConsoleModel = new PlatformConsoleModel();
}


export class AuxGameModel {
	idAuxGame?: number;
	gameTitle?: string;
	platformConsole: PlatformConsoleModel = new PlatformConsoleModel();
}

