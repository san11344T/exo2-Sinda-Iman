import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators, ReactiveFormsModule} from "@angular/forms";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {JsonPipe} from "@angular/common";
import {ContactService} from "../../services/contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    RouterOutlet,
    JsonPipe
  ],
  styleUrl: './contact.scss'
})
export class Contact {
  public hideEmail: boolean = false;

  public contactForm = new FormGroup({
    prenom: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    age: new FormControl(''),
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
      this.contactService.setFormData(this.contactForm.value);
      alert("Le formulaire est valide");
      this.router.navigate(['/accueil']);
    }
  }
}
