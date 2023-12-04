import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Task } from '../../inetrfaces/Task';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit{
  @Input() titleText!: string;
  task?: Task;

  ngOnInit(): void {

  }
}
