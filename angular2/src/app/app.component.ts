import { Component } from '@angular/core';
import {myController} from './myController';
import {myService} from './myService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works! German';
}
