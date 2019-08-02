import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  radiocappuccino = '';
  radiochailatter = '';
  radioexpresso = '';
  select;

  constructor(private router: Router) { }

  Order() {
    if (this.select === 'radiocappuccino') {
      this.router.navigate(['cappuccino']);
    }
    if (this.select === 'radiochailatter') {
      this.router.navigate(['chailatter']);
    }
    if (this.select === 'radioexpresso') {
      this.router.navigate(['expresso']);
    }
  }
  ngOnInit() {
  }

}
