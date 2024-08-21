import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserData, FormAction } from '../data.model'; // Adjust the path according to your project structure

@Component({
  selector: 'app-home',
  standalone: true,
 
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // Use the interface for the data object
  data: UserData = {
    name: '',
    email: '',
    message: ''
  };

  message:any = [];

  
  formAction: FormAction = {
    isSubmitted:false
  };

  onSubmit(): void {
    this.formAction.isSubmitted = true;

    this.message.push({
      'name':this.data.name,
      'email':this.data.email,
      'message':this.data.message
    })
    console.log(this.message);
  }
}
