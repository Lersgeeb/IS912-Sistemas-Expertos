import { Component, OnInit } from '@angular/core';
import { DeliveryManService } from 'src/app/services/delivery-man.service';


@Component({
  selector: 'app-accepted-delivers-man',
  templateUrl: './accepted-delivers-man.component.html',
  styleUrls: ['./accepted-delivers-man.component.scss']
})
export class AcceptedDeliversManComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email'];
  dataSource = [];

  constructor(private deliveryManService: DeliveryManService) { }

  ngOnInit(): void {

    this.deliveryManService.getAdmittedDeliveryMen().subscribe(res => {
      this.dataSource = res;
      console.log(res);
      
    })

  }

}
