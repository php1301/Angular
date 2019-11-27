import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-interaction',
  templateUrl: './demo-interaction.component.html',
  styleUrls: ['./demo-interaction.component.scss']
})
export class DemoInteractionComponent implements OnInit {

  studentArr: {id: string, name: string, age: number} [] =[
    {id: "1", name: "Pham", age: 12},
    {id: "2", name: "Hoang", age: 15},
    {id: "3", name: "Phuc", age: 16}
  ]
  chosenStudent: {id: string, name: string, age: number}
  constructor() { }

  ngOnInit() {
  }

  handleOutputStudent(event): void{
    console.log(event)
    this.chosenStudent=event
  }
}
