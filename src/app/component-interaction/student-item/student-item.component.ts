import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.scss']
})
export class StudentItemComponent implements OnInit {
 @Input('studentInput') student : {id:string, name: string, age: number}
 @Output() studentEmitter = new EventEmitter
 chooseStudent():void {
   this.studentEmitter.emit(this.student)
 }
  constructor() { }

  ngOnInit() {
  }

}
