import { Component, OnInit, Output, ViewChildren, QueryList, ViewChild } from '@angular/core';
import { SeatItemComponent } from '../seat-item/seat-item.component';

@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.scss']
})
export class BookticketComponent implements OnInit {

  @ViewChildren(SeatItemComponent) isSeatItem: QueryList<SeatItemComponent>
  // @ViewChild() dom den phan tu dau tien, dom theo reference
  @ViewChild('title', { static: false }) titleH3: any
  seat: { SoGhe: number, TenGhe: string, Gia: number, TrangThai: boolean }[] = [

    { SoGhe: 1, TenGhe: "số1", Gia: 100, TrangThai: true },
    { SoGhe: 2, TenGhe: "số2", Gia: 110, TrangThai: false },
    { SoGhe: 3, TenGhe: "số3", Gia: 120, TrangThai: false },
    { SoGhe: 4, TenGhe: "số4", Gia: 130, TrangThai: false },
    { SoGhe: 5, TenGhe: "số5", Gia: 140, TrangThai: false },
    { SoGhe: 6, TenGhe: "số6", Gia: 150, TrangThai: false },
    { SoGhe: 7, TenGhe: "số7", Gia: 160, TrangThai: false },
    { SoGhe: 8, TenGhe: "số8", Gia: 170, TrangThai: false }
  ]
  OutputSeat: { SoGhe: number, TenGhe: string, Gia: number, TrangThai: boolean }
  OutputSeatArr: { SoGhe: number, TenGhe: string, Gia: number, TrangThai: boolean }[] = []
  handleOutputSeat(event): void {
    const index = this.OutputSeatArr.findIndex(item => item.SoGhe === event.SoGhe) // kiem tra so gheh da ton tai hay chua, tra ve cac item So ghe = event . so ghe

    if (index !== -1) {
      this.OutputSeatArr.splice(index, 1)
      console.log(index)

    }
    else {
      console.log(index)
      console.log(event)
      this.OutputSeatArr.push(event)
      alert(this.titleH3.nativeElement.innerHTML)
    }
  }
  cancelSeat(SoGhe: number): void {
    const index = this.OutputSeatArr.findIndex(item => item.SoGhe === SoGhe)
    if (index !== -1) {
      this.OutputSeatArr.splice(index, 1)
      // dom toi seatItemComponent co seatItem.soGhe === SoGhe, chuyen IsBooking = false
      this.isSeatItem.forEach(item => {
        if (item.seat.SoGhe === SoGhe) {
          item.isBooking = false;
        }
      })
    }
  }
  constructor() { }
  // didmount
  ngOnInit() {
  }

}
