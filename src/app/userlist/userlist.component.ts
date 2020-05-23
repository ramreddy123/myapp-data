import { ShareService } from './../share.service';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  response: any;
  constructor(public service: ShareService, private route: Router) { }

  ngOnInit() {
    this.getData();

  }
  getData() {
    this.service.getdata();
    this.service.CurrentData.subscribe(value => this.response = value);

  }
  viewData(item: any) {
    localStorage.setItem('userData', JSON.stringify(item));
    this.service.currentItemClick(item);
    this.route.navigate(['userdetails']);
  }

}
