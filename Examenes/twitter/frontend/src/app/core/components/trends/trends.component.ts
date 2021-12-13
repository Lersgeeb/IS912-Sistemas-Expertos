import { Component, OnInit } from '@angular/core';
import { TrendsService } from '../../services/trends/trends.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {
  trends = []
  constructor(
    private TrendsService: TrendsService
  ) { }

  ngOnInit(): void {
    this.TrendsService.getTrends().subscribe(
      res => {
        this.trends = res.body
      }
    )
  }
}
