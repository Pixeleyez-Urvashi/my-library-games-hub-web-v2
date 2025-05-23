import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { UserModel, UserUpdatePasswordModel } from '../../models/user-model';
import { ApiRequestService } from './api-request-service';
import { AppConfig } from './app-config';


@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(
        private apiRequest: ApiRequestService,
        private http: HttpClient,
        private appConfig: AppConfig
    ) { }

    getUsers(page: number, nickname: string): Observable<any> {
        let params: HttpParams = new HttpParams();
        params = params.append('page', typeof page === 'number' ? page.toString() : '0');
        if (nickname.length > 0) {
            params = params.append('nickname', nickname);
        }
        return this.apiRequest.get('api/users', params);
    }

    getUsuarioLike(procura?: string): Observable<any> {
        let params: HttpParams = new HttpParams();
        if (procura !== undefined) {
            params = params.append('procura', procura);
        }
        return this.apiRequest.get('find-user', params);
    }

    getIDUsuario(id: number): Observable<any> {
        let params: HttpParams = new HttpParams();
        return this.apiRequest.get('usuario/' + id, params);
    }

    getUsuarioCorrente(): Observable<any> {
        let params = undefined;
        return this.apiRequest.get('user', params);
    }

    getUserByNickname(nickname: string): Observable<any> {
        let params = undefined;
        return this.apiRequest.get('user/username/' + nickname, params);
    }


    upload(file: File): Observable<HttpEvent<any>> {
        const formData: FormData = new FormData();

        formData.append('file', file);

        const req = new HttpRequest('POST', this.appConfig.baseApiPath + '/upload', formData, {
            reportProgress: true,
            responseType: 'json'
        });

        return this.http.request(req);
    }


    adicionar(usuario: Object): Observable<Object> {
        return this.apiRequest.post('adicionar-usuario', usuario);
    }

    verificacaoCodigo(codigoAtivacao: string): Observable<Object> {
        let params: HttpParams = new HttpParams();
        params = params.append('codigoAtivacao', codigoAtivacao);
        return this.apiRequest.post('ativacao', params);
    }

    enviarEmailSuporte(mensagem: string): Observable<Object> {
        let params: HttpParams = new HttpParams();
        params = params.append('mensagem', mensagem);
        return this.apiRequest.post('api/utilitarios/suporte/enviar-email', params);
    }

    envioEmailEsqueciSenha(email: string): Observable<Object> {
        let params: HttpParams = new HttpParams();
        params = params.append('email', email);
        return this.apiRequest.post('esqueci-minha-senha', params);
    }

    cadastrar(formData: FormData, url: string): Observable<HttpEvent<{}>> {
        return this.apiRequest.cadastrar(formData, url);
    }

    update(usuario: UserModel): Observable<Object> {
        let params: HttpParams = new HttpParams();
        return this.apiRequest.putWithParam('user/update-profile/ ' + usuario.idUser, usuario, params);
    }

    updatePassword(usuario: UserUpdatePasswordModel): Observable<Object> {
        let params: HttpParams = new HttpParams();
        return this.apiRequest.putWithParam('user/update-password', usuario, params);
    }
    closeAccount() {
        let params: HttpParams = new HttpParams();
        return this.apiRequest.delete('user/close-account', params);
    }
    refreshingToken(refreshingToken: Object): Observable<Object> {
        return this.apiRequest.post('refresh-token', refreshingToken);
    }

    exportGames() {
        return this.apiRequest.export();
    }


}
