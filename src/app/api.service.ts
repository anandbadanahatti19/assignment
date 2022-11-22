import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }    from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) {}
  getData(){
      this.http.get('https://raw.githubusercontent.com/epsilon-ux/code-challenge-resources/main/cookies.json').subscribe(response => {
        
        return response;
      })
    }
}
