import { Component, inject } from '@angular/core';
import { ApiService } from './services/api.service.ts';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <button (click)="test()">Testar API</button>
    <p>{{ response }}</p>
  `
})
export class App {
  response = '';
  private api = inject(ApiService);

  test() {
    this.api.ping().subscribe({
      next: (res) => this.response = res.message,
      error: (err) => this.response = 'Error: ' + err.message
    });
  }
}
