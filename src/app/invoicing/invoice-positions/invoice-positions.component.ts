import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InvoiceItem, InvoiceItemFactory } from '../model/item';
import { Client } from '../model/client/clients';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-invoice-positions',
  templateUrl: './invoice-positions.component.html',
  styleUrls: ['./invoice-positions.component.scss']
})
export class InvoicePositionsComponent implements OnInit {

  @Input()
  private positions: InvoiceItem[];

  @Output()
  itemsChanged: EventEmitter<InvoiceItem[]> = new EventEmitter();

  private invoiceItemFactory: InvoiceItemFactory;

  clients: Client[] = [];
  client: Client = new Client;
  constructor(private app: AppComponent) {
    this.clients = this.app.clients;
    this.invoiceItemFactory = new InvoiceItemFactory();
  }



  ngOnInit() {
  }

  addPosition(): void {
    this.positions.push(this.invoiceItemFactory.newInvoiceItem());
    this.itemsChanged.next(this.positions);
  }

  removePosition(position: InvoiceItem): void {
    this.positions = this.positions.filter(p => p.id !== position.id);
    this.itemsChanged.next(this.positions);
  }

  handlePositionChanged(positon: InvoiceItem): void {
    this.itemsChanged.next(this.positions);
  }

  public chooseClient(i: number): void {
    this.client = this.clients[i];
    this.client.index = i;
    console.log(this.client);
  }
}
