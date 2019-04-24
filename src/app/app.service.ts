import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor(private http:HttpClient) {}
  url = 'http://localhost:4200';
  
  getMobileList() {
    let url="assets/mobile.json";
    return this.http.get(url);
  }
}
