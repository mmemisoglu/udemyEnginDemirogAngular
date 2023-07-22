import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { User } from './user';
import { SweetalertService } from '../services/sweetalert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: User = new User();
 
  
  constructor(
    private accountService: AccountService,
    private sweetalertService: SweetalertService,
    private router: Router
  ){}

  login(form:NgForm){
    this.accountService.login(this.model);
  }
  alert(){
    this.sweetalertService.success("Giriş işlemi başarılı");
    this.router.navigate(["products"]);

  }

}

