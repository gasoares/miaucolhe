import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PetRegistrationPage } from './pet-registration';

@NgModule({
  declarations: [
    PetRegistrationPage,
  ],
  imports: [
    IonicPageModule.forChild(PetRegistrationPage),
  ],
})
export class PetRegistrationPageModule {}
