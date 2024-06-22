import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [CardComponent]
})
export class UserComponent {
@Input({required: true}) user!: User;
@Input({required: true}) selected!: boolean;
@Output() userSelect = new EventEmitter<string>();


onSelectUser() {
this.userSelect.emit(this.user.id);
}

get avatarPath() {
  return 'assets/users/'+ this.user.avatar;
}
}
