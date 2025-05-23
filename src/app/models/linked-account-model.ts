import { PSNTrophyUserData } from "./psn-trophy-user-data";
import { RAAccountUserData } from "./retro-achievements.model";
import { SteamAccountUserData } from "./steam-user-acoount-model";
import { XboxAccountUserData } from "./xbox-user-data";


export class LinkedAccountModel {
	psn: PSNTrophyUserData = new PSNTrophyUserData();
	xbox: XboxAccountUserData = new XboxAccountUserData();
	ra: RAAccountUserData = new RAAccountUserData();
	steam: SteamAccountUserData = new SteamAccountUserData();
}

