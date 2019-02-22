import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  secret = 'Secret Password = tuna';
  isSecretVisible = false;
  clickCounts = [];
  clickCount = 0;

  constructor() { }

  ngOnInit() {
  }

  onDisplayDetails() {
    this.isSecretVisible = !this.isSecretVisible;
    this.clickCounts.push(`Count is ${++this.clickCount} at ${new Date()}`);
  }
}
