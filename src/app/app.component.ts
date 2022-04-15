import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';

  constructor(private readonly http: HttpClient) {
  }

  async executeHttpRequest() {
    await Promise.resolve('ok'); // Results in a problem

    return new Promise((resolve, reject) => {
      this.http.get('http://localhost').subscribe({
        next: (value) => {
          resolve(value);
        },
        error: (error) => {
          reject(error);
        }
      });
    });
  }
}
