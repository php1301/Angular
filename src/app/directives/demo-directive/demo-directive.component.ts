import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.scss']
})
export class DemoDirectiveComponent implements OnInit {
  showMessage = true
  showAlert = false
  elseContent = "Login"
  month = 2
  username = "cybersoft"
  password ="cybersoft"
  isLogin = false
  monthArr: {name: string}[] =[
    {name: "Tháng 1"},
    {name: "Tháng 2"},
    {name: "Tháng 3"},
    {name: "Tháng 4"}
  ]
  constructor() { }

  ngOnInit() {
  }
  toggleMessage() : void{
    this.showMessage= !this.showMessage;
  }
  changeMonth(event):void{
    this.month = event.target.value
  }
  isLoginStatus(user, pass: string): void{
    if (this.username === user && this.password === pass) {
      this.isLogin = true 
    }
    console.log(this.isLogin);
    
    // if ( this.isLogin === true) {
    //   this.showAlert = true
    // }
  }
}
