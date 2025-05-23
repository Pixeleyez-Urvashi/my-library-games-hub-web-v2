import { BundleGameModel } from "./bundle-game-model";
import { SituationGameModel } from "./situation-game-model";

export class BundleCollectionModel {
	idBundleBacklog: number;
	bundle: BundleGameModel;
	status: SituationGameModel = new SituationGameModel();
}
