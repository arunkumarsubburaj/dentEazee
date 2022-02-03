import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class MailService {
  constructor(private httpClient: HttpClient) {}
  sendAppoinment(payload: any) {
    return this.httpClient.post(
      environment.apiUrl + 'email?type=appoinment',
      payload
    );
  }
}
