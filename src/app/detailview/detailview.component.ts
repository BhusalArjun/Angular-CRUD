import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.scss']
})
export class DetailviewComponent implements OnInit {
  userDetails = {
    id: '001',
    name: 'Ram',
    address: 'Kathmandu',
    age: 25
  };
  constructor() { }

  ngOnInit(): void {
  }

}
