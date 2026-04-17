import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  protected apiUrl = environment.apiUrl;

  constructor(protected http: HttpClient) {}

  /**
   * GET request
   */
  get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${url}`);
  }

  /**
   * POST request
   */
  post<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}${url}`, data);
  }

  /**
   * PUT request
   */
  put<T>(url: string, data: any): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}${url}`, data);
  }

  /**
   * PATCH request
   */
  patch<T>(url: string, data: any): Observable<T> {
    return this.http.patch<T>(`${this.apiUrl}${url}`, data);
  }

  /**
   * DELETE request
   */
  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}${url}`);
  }
}
