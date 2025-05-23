import { PSNTrophyUserData } from "./psn-trophy-user-data";
import { RAAccountUserData } from "./retro-achievements.model";
import { XboxAccountUserData } from "./xbox-user-data";

export class RankingModel {
	playstationNetworkData: PSNTrophyUserData[] = new Array();
	xboxLiveAchievementData: XboxAccountUserData[] = new Array();
	retroAchievementData: RAAccountUserData[] = new Array();
}
