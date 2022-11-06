import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
