import { Component, OnInit } from '@angular/core';
import { ContactService } from "../../services/contact.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion',
  imports: [],
  templateUrl: './gestion.html',
  styleUrls: ['./gestion.scss']
})
export class Gestion implements OnInit {
  public lastFormData: any = null;

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit(): void {
    this.lastFormData = this.contactService.getFormData();
    if (!this.lastFormData) {
      this.router.navigate(['/page404']);
    }
  }

}
