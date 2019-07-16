import { Component, OnInit } from '@angular/core';
import { Invoice, InvoiceSummary } from '../model/item';
import { Client } from '../model/client/clients';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  invoice: Invoice;
  invoiceSummary: InvoiceSummary;
  flagAddedClient = "";

  clients: Client[] = [];
  client: Client = new Client;
  constructor(private app: AppComponent) {
    this.clients = this.app.clients;
  }

  public chooseClient(e): void {
     let { selectedIndex, value } = e.target;
     let cl = this.clients.filter(cl=> cl.firstName === value);
     this.client = cl[0];
     this.client.index = --selectedIndex;
  }

  ngOnInit() {
    this.invoice = {
      saleDate: new Date(),
      items: []
    }

    this.invoiceSummary = this.recalculateSummery(this.invoice);
  }

  recalculateSummery(invoice: Invoice): InvoiceSummary {
    const brutto = invoice.items.map(i => i.brutto).reduce((sum, i) => sum + i, 0);
    const netto = invoice.items.map(i => i.netto).reduce((sum, i) => sum + i, 0);

    return {
      brutto: brutto,
      netto: netto,
      tax: this.round(brutto - netto, 2)
    }
  }

  private round(price: number, digits: number): number {
    const rounded = Number((Math.round(price * 100) / 100).toFixed(digits));
    return rounded;
}

  updateItems(items) {
    this.invoiceSummary = this.recalculateSummery(this.invoice);
  }

  public summary(): void {
    if(this.client.firstName){
      this.app.clients[this.client.index] = this.client;
      this.client.invoices = this.invoice;
      this.flagAddedClient = "added";
    }else{
      console.log('error');
      this.flagAddedClient = "error";
    }
  }

}
