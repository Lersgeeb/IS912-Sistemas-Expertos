import { Component, OnInit } from '@angular/core';
import { DeliveryManService } from 'src/app/services/delivery-man.service';


@Component({
  selector: 'app-waiting-delivers-man',
  templateUrl: './waiting-delivers-man.component.html',
  styleUrls: ['./waiting-delivers-man.component.scss']
})
export class WaitingDeliversManComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email','decide'];
  dataSource = [];

  constructor(private deliveryManService: DeliveryManService) { }

  ngOnInit(): void {

    this.loadDataTable();

  }

  accept(id_deliveryMan:string){
    this.deliveryManService.acceptDeliveryMan(id_deliveryMan).subscribe(res =>{
      this.loadDataTable();
      
    })
  }

  loadDataTable(){
    this.deliveryManService.getWaittingToAdmitDeliveryMen().subscribe(res => {
      this.dataSource = res;
    })
  }

  decline(id_deliveryMan:string){
    this.deliveryManService.declineDeliveryMan(id_deliveryMan).subscribe(res=> {
      console.log(res);
      this.loadDataTable();
    })
  }

}
