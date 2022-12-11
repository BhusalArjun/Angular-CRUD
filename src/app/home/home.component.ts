import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onRouteChange() {
    this.router.navigate(['/another-page']);
  }
  onNavigateById(value: string) {
    this.router.navigate(['/home', value]);
  }

}
