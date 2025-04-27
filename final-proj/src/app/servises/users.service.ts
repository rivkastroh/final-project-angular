import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users = [
    { name: 'user1', password: 'pass1', type: 'secretary' },
    { name: 'user2', password: 'pass2', type: 'teacher' }
  ];

  constructor() { }
}
