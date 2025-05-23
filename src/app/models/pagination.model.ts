export class Pagination {
	totalItems: number = 0;
	currentPage: number = 1;
	pageSize: number = 10;
	totalPages: number = 0;
	startPage: number = 1;
	endPage: number = 1;
	startIndex: number = 0;
	endIndex: number = 0;
	pages: number[] = [];
}