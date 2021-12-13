import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  amount: number;
}

@Component({
  selector: 'app-amount-input-modal',
  templateUrl: './amount-input-modal.component.html',
  styleUrls: ['./amount-input-modal.component.scss']
})
export class AmountInputModalComponent implements OnInit {
  
  constructor(
    public dialogRef: MatDialogRef<AmountInputModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void{
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addClick(): void {
    this.dialogRef.close({ event: 'add', data: this.data });
  }

}
