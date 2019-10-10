import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../../service/http.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public data:any = {};
  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  submitForm(form: NgForm) {
    const result = this.httpService.createUser(form.value)
    .subscribe(res => {
			this.data = res;
			console.log(res);
		});
  }
}
