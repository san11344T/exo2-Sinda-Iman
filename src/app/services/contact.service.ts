import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private lastFormData: any = null;

  public setFormData(data: any) {
    this.lastFormData = data;
  }

  public getFormData() {
    return this.lastFormData;
  }
  
}
