import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {



selectedUser = DUMMY_USERS[0]

get avatarPath() {
  return 'assets/users/' + this.selectedUser.avatar
}

onSelectUser() {
console.log('działa')
}

}
