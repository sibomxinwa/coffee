import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cappuccino',
  templateUrl: './cappuccino.page.html',
  styleUrls: ['./cappuccino.page.scss'],
})
export class CappuccinoPage implements OnInit {
  referencenumber = 'Cupp100';
  quantity = 1;
  cupstyle = '';
  milk = '';
  select;
  price = 25;
  time: any =  new Date();

  constructor(private route: ActivatedRoute, private alertCtrl: AlertController, private router: Router) { }

  ngOnInit() {
  }

  Order() {
    const alert = this.alertCtrl.create({
      message: 'Are you sure you want to proceed?',
      subHeader: 'Confirmation!',
      // tslint:disable-next-line:no-shadowed-variable
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Proceed',
          handler: () => {
            console.log('Buy clicked');
            this.router.navigate(['invoice'], {queryParams: { referencenumber: this.referencenumber,
                                                               quantity: this.quantity,
                                                               time: this.time,
                                                               cupstyle : this.cupstyle,
                                                               milk: this.milk,
                                                              price: this.price}});
          }
        }
      ]
    // tslint:disable-next-line:no-shadowed-variable
    }).then( alert => alert.present());


  }

}
