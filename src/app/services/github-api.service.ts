import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  private baseUrl = 'https://api.github.com';
  private accessToken: string = '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';

  constructor(private http: HttpClient) {}

  getUserWithToken(username: string): Observable<any> {
    const url = `${this.baseUrl}/users/${username}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.accessToken}`,
    });
    return this.http.get(url, { headers });
  }
}
