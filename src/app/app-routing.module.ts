import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './hero/index/index.component';
import { InvoiceComponent } from './invoicing/invoice/invoice.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'invoicing', component: InvoiceComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
