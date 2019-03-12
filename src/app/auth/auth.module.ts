import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
})
export class AuthModule { }
