import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-business-option',
  templateUrl: './business-option.component.html',
  styleUrls: ['./business-option.component.scss']
})
export class BusinessOptionComponent implements OnInit {

  @Input () business: any = {
    banner: '',
    logo: '',
  };
  

  

  constructor() { }

  ngOnInit(): void {
    
  }

}
