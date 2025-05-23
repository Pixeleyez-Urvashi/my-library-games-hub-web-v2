import { GameModel } from "./game-model";
import { UserAchievementGuideModel } from "./user-model";

export class AchievementGuideModel {
	idAchievementGuide: number;
	estimateDifficultyAchievement: number;
	approximateTimeAchievement: number;
	achievementNumberOffline: number;
	achievementNumberOnline: number;
	achievementNumberMissable: number;
	playthroughNumber: number;
	achievementGuideTitle: string;
	achievementGuideResume: string;
	achievementPost: string;
	achievementGuideCreatedDate: Date;
	achievementGuideModifiedDate: Date;
	isApproved: boolean;
	gameAchievementGuideId: number;
	gameAchievementGuide: GameModel = new GameModel();
	userAchievementGuide: UserAchievementGuideModel = new UserAchievementGuideModel();
}