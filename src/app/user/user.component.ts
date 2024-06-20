import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
@Input({required: true}) user!: User;
@Output() userSelect = new EventEmitter<string>();


onSelectUser() {
this.userSelect.emit(this.user.id);
console.log(this.user.id)
}

get avatarPath() {
  return 'assets/users/'+ this.user.avatar;
}

// userList = []

// generateUserList() {
//   DUMMY_USERS.forEach(e => {
//    return `<li>${e.name}</li>`
//   });
// }

}
