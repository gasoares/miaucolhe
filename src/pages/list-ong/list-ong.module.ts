import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListOngPage } from './list-ong';

@NgModule({
  declarations: [
    ListOngPage,
  ],
  imports: [
    IonicPageModule.forChild(ListOngPage),
  ],
})
export class ListOngPageModule {}
