import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../../service/http.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  // Email:string;
  // Name:string;
  // password:string;
  // renpassword:string;
  public data:any = {};
  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }
  submitForm(form: NgForm) {
    const result = this.httpService.login(form.value)
    .subscribe(res => {
			this.data = res;
      console.log(	this.data);
      localStorage.setItem('token', this.data.token);
		});
  }
}
