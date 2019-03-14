import { Component } from '@angular/core';
import { DealService } from './deal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: number[] = [];

  constructor(private dealService: DealService) {
  }
  
}
