import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppmntService } from '../appmnt.service';
import { Appmnt } from '../appmnt'
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-appmnt-new',
  templateUrl: './appmnt-new.component.html',
  styleUrls: ['./appmnt-new.component.css']
})
export class AppmntNewComponent implements OnInit {
  appmnt: Appmnt;

  constructor(
    private _route: Router,
    private _appmntService: AppmntService,
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.appmnt = new Appmnt();

    if (!this._userService.currentUser) {
      this._route.navigateByUrl('/')
    }
  }

  onSubmit() {
    console.log(this.appmnt)
    this._appmntService.createAppmnt(this.appmnt,
      (appmnt) => {
        this._route.navigateByUrl('/show')
      },
      (err) => {
        console.log(err)
      });
      this.appmnt = new Appmnt();
  }

  home() {
    this._route.navigateByUrl('/show')
  }

}
