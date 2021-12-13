import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-option',
  templateUrl: './order-option.component.html',
  styleUrls: ['./order-option.component.scss']
})
export class OrderOptionComponent implements OnInit {
  @Input() isActive = false;
  @Input() name:any = []
  constructor() { }

  ngOnInit(): void {
    
    
  }

}
