import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();

onCancel() {
  this.cancel.emit()
}

onSubmit(){
  this.add.emit({
  title: this.enteredTitle,
  summary: this.enteredSummary,
  date: this.enteredDate})
 
}
}
