import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
@Input({required: true}) user!: {
id: string;
avatar:string;
name: string;
}
@Output() userSelect = new EventEmitter<string>();
// @Output() selectName = new EventEmitter<string>();

onSelectUser() {
this.userSelect.emit(this.user.id);
console.log(this.user.id)
}

get avatarPath() {
  return 'assets/users/'+ this.user.avatar;
}

// selectedName() {
// this.selectName.emit(this.user.name);
// }

// userList = []

// generateUserList() {
//   DUMMY_USERS.forEach(e => {
//    return `<li>${e.name}</li>`
//   });
// }

}
