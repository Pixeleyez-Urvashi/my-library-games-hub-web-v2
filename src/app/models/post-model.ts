import { GameModel } from "./game-model";
import { UserPostModel } from "./user-model";

export class PostModel {
	idPost: number;
	gamePost: GameModel;
	postDescription: string;
	createdDate: Date;
	modifiedDate: Date;
	likesNumber: number;
	postImageURL: string;
	remainingHours: string;
	postAnswers: Array<PostAnswerModel> = [];
	postAnswerDescription: string;
	user: UserPostModel;
	isLiked: boolean;
	postTitle: string;
	postResume: string;
	titlePostActivity: string;
	activityTrophy: Array<ActivityTrophyModel> = [];
	postType: string
}


export class PostAnswerModel {

	idPostAnswer: number;
	createdDate: Date;
	postAnswer: String;
	likesNumber: string;
	remainingHours: string;
	userPostDetail: UserPostModel;
	isLiked: boolean;

}

export class ActivityTrophyModel {

	idGeneralAchievement: number;
	earnedDateTime: Date;
	achievementType: String;
}