import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(form: any): Observable<any> {
    return this.httpClient.post(`${environment.API_URL}/auth/logon`, { login: form.email, pswd: form.password });
  }
}
