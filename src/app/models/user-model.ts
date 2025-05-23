import { StatisticsModel } from "./statistics-model";


export class UserModel {
  idUser?: number;
  password?: string;
  username?: string;
  nickname?: string;
  activated?: boolean;
  role?: RoleModel = new RoleModel();
  email?: string;
  photoURL?: string;
  provider?: string;
  userPremium?: boolean;
  newPassword?: string;
  currentPassword?: string;
  userBio?: string;
  statisticsMLGH?: StatisticsModel

}

export class UserPostModel {
  idUser?: number;
  username?: string;
  nickname?: string;
  photoURL?: string;
}

export class UserAchievementGuideModel {
  idUser?: number;
  username?: string;
  nickname?: string;
  photoURL?: string;
}

export class UserUpdatePasswordModel {
  idUser?: number;
  newPassword?: string;
}




export class RoleModel {
  idRole?: number;
  roleName?: string;
}