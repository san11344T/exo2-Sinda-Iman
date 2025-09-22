import { Component, OnInit } from '@angular/core';
import { ContactService } from "../../services/contact.service";

@Component({
  selector: 'app-gestion',
  imports: [],
  templateUrl: './gestion.html',
  styleUrl: './gestion.scss'
})
export class Gestion implements OnInit {
  public lastFormData: any = null;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.lastFormData = this.contactService.getFormData();
  }

}
