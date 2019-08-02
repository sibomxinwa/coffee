import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
})
export class InvoicePage implements OnInit {
  referencenumber: string;
  quantity: string;
  time: string;
  cupstyle: string;
  milk: string;
  price = 25;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.referencenumber = params.referencenumber;
      this.quantity = params.quantity;
      this.time = params.time;
      this.cupstyle = params.cupstyle;
      this.milk = params.milk;
      this.price = params.price;
    });
    console.log(this.referencenumber);
    console.log(this.quantity);
    console.log(this.time);
    console.log(this.cupstyle);
    console.log(this.milk);
    console.log(this.price);
  }

}
