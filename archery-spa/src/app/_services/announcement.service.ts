import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAnnouncement() {
    return this.http.get(this.baseUrl + 'announcement');
  }
}
