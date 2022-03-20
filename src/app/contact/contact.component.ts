import { Component, OnInit } from '@angular/core';
import contactInfo from '../../assets/contact-info.json';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactInfo$: any

  constructor() { }

  ngOnInit() {
    this.contactInfo$ = contactInfo['contact_info'];
  }

}
