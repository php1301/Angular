import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1component.component.html',
  styleUrls: ['./assignment1component.component.scss']
})
export class Assignment1componentComponent implements OnInit {
  mangSP: { maSP: number; tenSP: string; giaSP: number }[] =
    [
      { maSP: 1, tenSP: "Sony XZ", giaSP: 1000 },
      { maSP: 2, tenSP: "Sony XZ2", giaSP: 1000 },
      { maSP: 3, tenSP: "HTC U Ultra", giaSP: 1000 },
      { maSP: 4, tenSP: "HTC U12 Plus", giaSP: 1000 },
      { maSP: 5, tenSP: "Iphone XS MAX", giaSP: 1000 },
      { maSP: 6, tenSP: "Iphone XR", giaSP: 1000 },
      { maSP: 7, tenSP: "Xiaomi Mi Note 3", giaSP: 9900 },
      { maSP: 8, tenSP: "Xiaomi Mi 8", giaSP: 1000 },
      { maSP: 9, tenSP: "Galaxy Note 9", giaSP: 1000 },
      { maSP: 10, tenSP: "Galaxy S9 Plus", giaSP: 1000 },
      { maSP: 11, tenSP: "Nokia X9", giaSP: 1000 },
    ];


  isAddProduct = true
  currentPage = 1;
  setIsAddProduct(bool): void {
    this.isAddProduct = bool;
  }
  //   getEle = (id) => {
  //     return document.getElementById(id);
  //   }
  //    SanPham = (_maSP, _tenSP, _giaSPSP) => {
  //   //Key: value
  //   this.maSP = _maSP;
  //   this.tenSP = _tenSP;
  //   this.giaSPSP = _giaSPSP;
  // }
  // this.getEle("them").addEventListener("click", () => {

  //   var maSP = this.getEle("maSP").value
  //   var tenSP = this.getEle("tenSP").value
  //   var giaSPSP = this.getEle("giaSPSP").value
  //   var SanPham = new SanPham(maSP, tenSP, giaSPSP);
  // })
  addProductHandler = (maSP: number, tenSP: string, giaSP: number) => {
    const index = this.mangSP.findIndex(item => item.maSP === maSP)
    if (index !== -1) return; // kiem tra id
    const newProduct = {
      maSP,
      tenSP,
      giaSP: +giaSP
    }
    this.mangSP.push(newProduct)
    console.log(this.mangSP)
  }
  deleteProduct = (maSP: number) => {
    this.mangSP = [...this.mangSP]
    var viTri
    this.mangSP.map((item, index) => {
      if (maSP === item.maSP) {
        viTri = index
      }
    })
    console.log(viTri)
    this.mangSP.splice(viTri, 1)
  }
  constructor() { }

  ngOnInit() {
  }

}
