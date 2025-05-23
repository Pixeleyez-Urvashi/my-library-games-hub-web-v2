import { GameHLTBModel } from "./game-hltb";
import { GenreModel } from "./genre-model";
import { PlatformConsoleModel } from "./platform-console-model";

export class BundleGameModel {
	idBundleGame?: number;
	bundles?: BundledGameModel[] = new Array();
	bundleIn?: BundledGameModel = new BundledGameModel();
}

export class BundledGameModel {
	idGame?: number;
	gameTitle?: string;
	coverGameURL?: string;
	gameHLTB?: GameHLTBModel = new GameHLTBModel();
	companyGame?: string;
	releaseDate?: string;
	approved?: boolean;
	platformConsole?: PlatformConsoleModel = new PlatformConsoleModel();
	genre?: GenreModel = new GenreModel();
	wallpaperURL?: string;
	hasCheats?: boolean;
}