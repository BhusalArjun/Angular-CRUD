import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.scss']
})
export class DetailsViewComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.params);
    // console.log(this.activatedRoute.snapshot.queryParams);
    this.activatedRoute.queryParams.subscribe(
      res => {
        console.log('param: ', res);
      }
    );
  }

}
