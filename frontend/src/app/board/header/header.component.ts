import { Component, OnInit, Injectable } from '@angular/core';
import { HttpService } from  '../../service/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

@Injectable()
export class HeaderComponent implements OnInit {
  text ='';
  public inp:string = '';
  public data;
  constructor(private httpService: HttpService) {}

  ngOnInit() {
  }

  add() {
   this.data = this.httpService.saveCard(this.inp)
   
    .subscribe(res => {
      console.log(res)
    })
  }
}
