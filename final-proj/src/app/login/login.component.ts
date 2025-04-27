import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../servises/users.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formLogin: FormGroup;
  users = [
    { name: 'user1', password: 'pass1', type: 'secretary' },
    { name: 'user2', password: 'pass2', type: 'teacher' }
  ];

  constructor(private router: Router,public usersService: UsersService) {
    this.formLogin = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });

  }

  onSubmit() {
    if (this.formLogin.valid) {
      const { name, password } = this.formLogin.value;
      const user = this.usersService.users.find(u => u.name === name && u.password === password);

      if (user) {
        if (user.type === 'teacher') {
          this.router.navigate(['/lessons']); // ניתוב לרשימת שיעורים
        } else if (user.type === 'secretary') {
          this.router.navigate(['/registering']); // ניתוב למסך נרשמות
        }
      } else {
        alert('שם משתמש או סיסמה שגויים');
        console.log('משתמש לא נמצא');
      }
    } else {
      alert('יש למלא את כל השדות');
      console.log('יש למלא את כל השדות');
    }
  }
}