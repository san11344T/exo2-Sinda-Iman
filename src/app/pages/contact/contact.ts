import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { CommonModule, JsonPipe } from "@angular/common";
import { ContactService } from "../../services/contact.service";
import { ContactData } from '../../interfaces/contact-data'; 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    RouterOutlet,
    JsonPipe
  ],
  styleUrls: ['./contact.scss']
})
export class Contact {
  public hideEmail: boolean = false;

  public contactForm = new FormGroup({
    prenom: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.min(0)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    commentaire: new FormControl('', Validators.required),
  });

  constructor(private router: Router, private contactService: ContactService) {}

  public toggleEmail() {
    this.hideEmail = !this.hideEmail;
    const emailControl = this.contactForm.get('email');
    if (this.hideEmail) {
      emailControl?.reset();
      emailControl?.clearValidators();
    } else {
      emailControl?.setValidators([Validators.required, Validators.email]);
    }
    emailControl?.updateValueAndValidity();
  }

  public onSubmit() {
    if (this.contactForm.valid) {
      const formData: ContactData = this.contactForm.value as ContactData; 
      this.contactService.setFormData(formData);
      alert("Le formulaire est valide");
      this.router.navigate(['/accueil']);
    }
  }
}
