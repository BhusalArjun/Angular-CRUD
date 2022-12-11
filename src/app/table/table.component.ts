import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  tableData = [
    {
      id: '001',
      name: 'Ram',
      address: 'Kathmandu',
      age: 25
    },
    {
      id: '002',
      name: 'Sita',
      address: 'Butwal',
      age: 50
    },
    {
      id: '003',
      name: 'Gita',
      address: 'Kailali',
      age: 44
    },
    {
      id: '004',
      name: 'Gita Khanl',
      address: 'Pokhara',
      age: 99
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
