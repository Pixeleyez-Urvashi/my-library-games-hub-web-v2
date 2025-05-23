import { UserModel } from "./user-model";


export class ReportBugModel {
	idReportBug: number;
	user: UserModel;
	reportTitle: string;
	reportDescription: string;
	status: string;
	createDate: Date;
	updateDate: Date;
	imagePrintURL: string;
	answerReportBug: string
}
