import { Component } from '@angular/core';
import { Client } from './invoicing/model/client/clients';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wsei-invoicing-app-reference';
  clients: Client[] = [];
}
