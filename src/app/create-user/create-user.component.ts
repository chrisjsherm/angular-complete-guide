import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  username = '';

  constructor() { }

  ngOnInit() {
  }

  isResetUserDisabled() {
    if (this.username === '') {
      return true;
    }

    return false;
  }

  onResetUser() {
    this.username = '';
  }
}
