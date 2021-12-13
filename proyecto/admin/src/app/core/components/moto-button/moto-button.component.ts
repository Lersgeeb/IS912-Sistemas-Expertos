import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-moto-button',
  templateUrl: './moto-button.component.html',
  styleUrls: ['./moto-button.component.scss']
})
export class MotoButtonComponent implements OnInit {

  @Input() isActive = false;
  constructor() { }

  ngOnInit(): void {
  }

}
