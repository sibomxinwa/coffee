import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'cappuccino', loadChildren: './views/cappuccino/cappuccino.module#CappuccinoPageModule' },
  { path: 'chailatter', loadChildren: './views/chailatter/chailatter.module#ChailatterPageModule' },
  { path: 'expresso', loadChildren: './views/expresso/expresso.module#ExpressoPageModule' },
  { path: 'menu', loadChildren: './views/menu/menu.module#MenuPageModule' },
  { path: 'invoice', loadChildren: './views/invoice/invoice.module#InvoicePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
