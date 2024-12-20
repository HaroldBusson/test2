import { Component, inject } from '@angular/core'
import { user } from '../../Type/User'
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-list-of-users',
  standalone: true,
  imports: [],
  templateUrl: './list-of-users.component.html',
  styleUrl: './list-of-users.component.css'
})
export class ListOfUsersComponent {
  private userService = inject(UsersService);
users: user[] = [];

ngOnInit(){
  this.users = this.userService.users
}
}
