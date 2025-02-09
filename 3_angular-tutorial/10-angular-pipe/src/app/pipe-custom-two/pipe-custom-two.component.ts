import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-custom-two',
  templateUrl: './pipe-custom-two.component.html',
  styleUrls: ['./pipe-custom-two.component.scss']
})
export class PipeCustomTwoComponent implements OnInit {

  id
  name
  prices
  status

  products: Product[] = [
    {
      id: 1,
      name: 'Điện thoại Samsung Galaxy S21 5G',
      prices: 18990000,
      status: false
    },
    {
      id: 2,
      name: 'Điện thoại OPPO A15',
      prices: 3390000,
      status: true
    },
    {
      id: 3,
      name: 'Điện thoại Vivo Y51 (2020)',
      prices: 5590000,
      status: true
    },
    {
      id: 4,
      name: 'Điện thoại iPhone 12 Pro Max 256GB',
      prices: 3499000,
      status: false
    },
    {
      id: 5,
      name: 'Điện thoại Xiaomi Redmi 9T (6GB/128GB)',
      prices: 4590000,
      status: true
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

interface Product {
  id: number,
  name: string,
  prices: number,
  status: boolean
}
