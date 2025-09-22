import { Injectable } from '@angular/core';
import { ContactData } from '../interfaces/contact-data';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private lastFormData: ContactData | null = null; 

  public setFormData(data: ContactData) {
    this.lastFormData = data;
  }

  public getFormData(): ContactData | null {
    return this.lastFormData;
  }
}
