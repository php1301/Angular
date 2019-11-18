import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-oneway',
  templateUrl: './demo-oneway.component.html',
  styleUrls: ['./demo-oneway.component.scss']
})
export class DemoOnewayComponent implements OnInit {
  name = "demo oneway binding";
  Email = "Your email";
  FullName = "Your FullName"
  age: number;
  constructor() { }

  ngOnInit() {
  }

  changeName(e): void {
    this.name = e.target.value
  }
  showMessage(message: string): void {
    alert(message)
  }
// showInfo(e): void {
//   this.Email = document.getElementsByClassName("password").value
//     this.FullName = document.getElementsByClassName("email").value
// }
  getFullname(fullname: string) : void {
    this.FullName = fullname
  }
  changeEmail(e) : void {
    this.Email = e.target.value
  }
}
