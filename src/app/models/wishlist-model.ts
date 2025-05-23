import { GameModel } from "./game-model";


export class WishlistModel {
	idWishList: number;
	gameWishlist: GameModel = new GameModel();
	wishListDate: Date;
}