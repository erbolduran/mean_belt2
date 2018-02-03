import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppmntService } from '../appmnt.service';
import { Appmnt } from '../appmnt'
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-appmnt-show',
  templateUrl: './appmnt-show.component.html',
  styleUrls: ['./appmnt-show.component.css']
})
export class AppmntShowComponent implements OnInit {
  appmnt = [];
  currentUser;

  constructor(
    private _route: Router,
    private _appmntService: AppmntService,
    private _userService: UserService
  ) { this.currentUser = this._userService.currentUser }

  ngOnInit() {
    if (!this._userService.currentUser) {
      this._route.navigateByUrl('/')
    }

    this._appmntService.getAppmnts(
      (appmnt) => {
        this.appmnt = appmnt;
        console.log(appmnt)
      },
      (err) => {
        console.log(err)
      }
    );
  }

  newAppmnt() {
    this._route.navigateByUrl('/new')
  }

}
