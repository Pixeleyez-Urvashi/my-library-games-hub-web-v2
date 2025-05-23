import { HttpClient, HttpEvent, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { Router } from "@angular/router";
import { AppConfig } from "./app-config";


@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {


  constructor(private appConfig: AppConfig, private http: HttpClient, private router: Router) { }


  get(url: string, urlParams?: HttpParams): Observable<any> {

    const headers = new HttpHeaders({
      Authorization: localStorage.getItem('Authorization') || ''
    });
    return this.http
      .get(this.appConfig.baseApiPath + url, { params: urlParams, headers: headers })
      .pipe(
        catchError((err) => {
          return this.mapErrors(err);
        }),
        map((res) => {
          return res;
        })
      );
  }

  patch(url: string, body: Object): Observable<any> {
    return this.http.patch(this.appConfig.baseApiPath + url, body).pipe(
      catchError((err) => {
        return this.mapErrors(err);
      }),
      map((res) => {
        return res;
      })
    );
  }

  getWithoutTryCatch(url: string, urlParams?: HttpParams): Observable<any> {
    return this.http
      .get(this.appConfig.baseApiPath + url, { params: urlParams })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  getHL2B(url: string, urlParams?: HttpParams): Observable<any> {
    return this.http.get(url, { params: urlParams }).pipe(
      catchError((err) => {
        return this.mapErrors(err);
      }),
      map((res) => {
        return res;
      })
    );
  }

  getId(url: string, urlParams?: HttpParams): Observable<any> {
    return this.http
      .get(this.appConfig.baseApiPath + url)
      .pipe(
        catchError((err) => {
          return this.mapErrors(err);
        }),
        map((res) => {
          return res;
        })
      );
  }

  post(url: string, body: Object): Observable<any> {
    return this.http.post(this.appConfig.baseApiPath + url, body).pipe(
      map((res) => {
        return res;
      }),
      catchError((err) => {
        return this.mapErrors(err);
      }),
    );
  }

  postWithParam(url: string, body: Object, urlParams?: HttpParams): Observable<any> {
    return this.http.post(this.appConfig.baseApiPath + url, body, { params: urlParams }).pipe(
      catchError((err) => {
        return this.mapErrors(err);
      }),
      map((res) => {
        return res;
      })
    );
  }
  cadastrar(formData: FormData, url: string): Observable<any> {
    return this.http.post(this.appConfig.baseApiPath + url, formData).pipe(
      catchError((err) => {
        return this.mapErrors(err);
      }),
      map((res) => {
        return res;
      })
    );
  }

  updateWithFormData(formData: FormData, url: string): Observable<HttpEvent<{}>> {
    return this.http.put(this.appConfig.baseApiPath + url, formData).pipe(
      catchError((err) => {
        return this.mapErrors(err);
      }),
      map((res) => {
        throw res;
      })
    );
  }

  put(url: string, body: Object): Observable<any> {
    return this.http.put(this.appConfig.baseApiPath + url, body).pipe(
      catchError((err) => {
        return this.mapErrors(err);
      }),
      map((res) => {
        return res;
      }),
    );
  }

  putWithParam(url: string, body: Object, urlParams?: HttpParams): Observable<any> {
    return this.http.put(this.appConfig.baseApiPath + url, body, { params: urlParams }).pipe(
      map((res) => {
        return res;
      }),
      catchError((err) => {
        return this.mapErrors(err);
      })
    );
  }

  patchWithParam(url: string, body: Object, urlParams?: HttpParams): Observable<any> {
    return this.http.patch(this.appConfig.baseApiPath + url, body, { params: urlParams }).pipe(
      map((res) => {
        return res;
      }),
      catchError((err) => {
        return this.mapErrors(err);
      }),
    );
  }

  delete(url: string, id?: HttpParams): Observable<any> {
    return this.http.delete(this.appConfig.baseApiPath + url).pipe(
      catchError((err) => {
        return this.mapErrors(err);
      }),
      map((res) => {
        return res;
      })
    );
  }

  patchCustom(url: string, id?: HttpParams): Observable<any> {
    return this.http.delete(this.appConfig.baseApiPath + url).pipe(
      catchError((err) => {
        return this.mapErrors(err);
      }),
      map((res) => {
        return res;
      })
    );
  }

  export() {
    this.http.get(this.appConfig.baseApiPath + 'api/my-collection/export', { responseType: 'blob' }).subscribe((response) => {
      const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'my_collection.xlsx';
      link.click();
      window.URL.revokeObjectURL(url);
    });
  }

  mapErrors(err: any): any {
    if (err.status === 403 || err.status === 401) {
      localStorage.removeItem('authenticaterUser')
      localStorage.removeItem('token')
      alert(err.status)
    } else if (err.status == 400 || err.status == 500) {
      // Swal.fire('Ops !!', err.error.message, 'error')
    } else if (err.error.message.includes("JWT expired")) {
      // Swal.fire('Ops !!', "Sessão expirada por favor realize o login novamente", 'error')
      localStorage.removeItem('authenticaterUser')
      localStorage.removeItem('token')
      this.router.navigate(['/login'])
    }
  }

}
