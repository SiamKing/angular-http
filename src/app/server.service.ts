import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  storeServers(servers: any[]) {
    return this.http.post('https://angular-http-b87bf.firebaseio.com/', servers); // this doesn't actually send the request - it just creates an observable we can subscribe to
  }
}
