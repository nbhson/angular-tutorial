import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-custom-four',
  templateUrl: './pipe-custom-four.component.html',
  styleUrls: ['./pipe-custom-four.component.scss']
})
export class PipeCustomFourComponent implements OnInit {

  name: string = 'name' // prices
  sortBy: number = 1 // 1 tang -1 giam


  products: Product[] = [
    {
      id: 1,
      name: 'Samsung Galaxy S21 5G',
      prices: 18990000,
      status: false
    },
    {
      id: 2,
      name: 'OPPO A15',
      prices: 3390000,
      status: true
    },
    {
      id: 3,
      name: 'Vivo Y51 (2020)',
      prices: 5590000,
      status: true
    },
    {
      id: 4,
      name: 'iPhone 12 Pro Max 256GB',
      prices: 3499000,
      status: false
    },
    {
      id: 5,
      name: 'Xiaomi Redmi 9T (6GB/128GB)',
      prices: 4590000,
      status: true
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  sortCol(col) {
    this.name = col
    this.sortBy = -this.sortBy
  }
}

interface Product {
  id: number,
  name: string,
  prices: number,
  status: boolean
}
