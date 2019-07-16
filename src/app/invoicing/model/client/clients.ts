import { Invoice } from '../item';

export class Client {
  firstName: string;
  lastName: string;
  email: string;
  taxNumber: string;
  invoices: Invoice;
  index: number;
}
