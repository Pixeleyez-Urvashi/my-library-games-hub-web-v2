import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpParams } from '@angular/common/http';
import { ApiRequestService } from './api-request-service';


@Injectable({
    providedIn: 'root'
})
export class GameService {

    constructor(
        private apiRequest: ApiRequestService
    ) { }

    getGames(page?: number, size?: number, idPlatformConsole?: number, gameTitleSearch?: string): Observable<any> {
        let params: HttpParams = new HttpParams();
        params = params.append('page', typeof page === 'number' ? page.toString() : '0');
        params = params.append('size', typeof size === 'number' ? size.toString() : '1000');

        if (idPlatformConsole !== undefined) {
            params = params.append('id_platform_console', typeof size === 'number' ? idPlatformConsole.toString() : 0);
        }
        if (gameTitleSearch != null) {
            params = params.append('game_title_search', gameTitleSearch);
        }
        return this.apiRequest.get('api/games', params);
    }

}
