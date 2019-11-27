import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-seat-item',
  templateUrl: './seat-item.component.html',
  styleUrls: ['./seat-item.component.scss']
})
export class SeatItemComponent implements OnInit {
@Input("SeatInput") seat : {SoGhe: number, TenGhe: string, Gia: number, TrangThai: boolean}
@Output() seatEmitter = new EventEmitter
isBooking = false;
chooseSeat(seat): void {
  this.seatEmitter.emit(seat)
  this.isBooking = !this.isBooking;
}

  constructor() { }

  ngOnInit() {
  }

}
