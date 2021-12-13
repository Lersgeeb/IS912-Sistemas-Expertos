import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-assigned-delivery',
  templateUrl: './assigned-delivery.component.html',
  styleUrls: ['./assigned-delivery.component.scss']
})
export class AssignedDeliveryComponent implements OnInit {
  @Input() isActive = false;
  constructor() { }

  ngOnInit(): void {
  }

}
