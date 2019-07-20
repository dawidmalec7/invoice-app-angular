import { Component, OnInit } from '@angular/core';
import { Message } from '../invoicing/model/contact-message/message';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public message: Message = new Message;
  public messages: Message[] = [];
  constructor() { }

  ngOnInit() {
  }
  public sendMessage(): void {
    this.messages.push(this.message);
    this.message = new Message;
  }

}
