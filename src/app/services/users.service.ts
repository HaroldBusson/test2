import { Injectable } from '@angular/core';
import { user } from '../Type/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

users: user[] = [
  {name: "john", age: 5},
  {name: "Sandra", age: 35},
  {name: "Cheriff", age: 19},
  {name: "Toto", age:6}
]
}
