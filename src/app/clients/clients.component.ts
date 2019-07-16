import { Component, OnInit } from '@angular/core';
import { Client } from '../invoicing/model/client/clients';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  public client: Client = new Client;
  public clients: Client[] = [];

  constructor(private app: AppComponent) {
    this.clients = this.app.clients;
  }

  ngOnInit() { }

  public pushClient(): void {
    this.clients.push(this.client);
    this.client = new Client;
    this.app.clients = this.clients;
  }

  public removeClient(index: number): void {
    this.clients.splice(index, 1);
    this.app.clients.splice(index, 1);
  }
}
