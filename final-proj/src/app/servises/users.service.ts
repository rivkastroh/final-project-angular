import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users = [
    { name: 'user1', password: 'pass1', type: 'secretary' },
    { name: 'user2', password: 'pass2', type: 'teacher' },
    { name: 'משה כהן', password: 'P@ssw0rd1!', type: 'secretary' },
    { name: 'שרה לוי', password: 'S3cur3P@ss!', type: 'teacher' },
    { name: 'אבי ישראלי', password: 'Avi1234#$', type: 'secretary' },
    { name: 'תמר בר', password: 'T@m@r2023!', type: 'teacher' },
    { name: 'דנה פז', password: 'D@n@4567%', type: 'secretary' },
    { name: 'רון אברהם', password: 'R0n!Pass123', type: 'teacher' }
];

  constructor() { }
}
