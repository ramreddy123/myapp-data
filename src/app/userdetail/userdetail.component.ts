import { ShareService } from './../share.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  currentItem: any;
  subscription: any;
  constructor(public service: ShareService) { }

  ngOnInit() {
    if (localStorage.getItem("userData")) {

      this.currentItem = JSON.parse(localStorage.getItem("userData"));
    }
    else {
      this.subscription = this.service.currentItem.subscribe(value => this.currentItem = value);

    }

  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
