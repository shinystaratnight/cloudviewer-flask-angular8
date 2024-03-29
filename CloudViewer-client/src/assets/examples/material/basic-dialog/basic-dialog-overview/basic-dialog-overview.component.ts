import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../basic-dialog.component';

@Component({
  selector: 'app-basic-dialog-overview',
  templateUrl: './basic-dialog-overview.component.html',
  styleUrls: ['./basic-dialog-overview.component.scss']
})
export class BasicDialogOverviewComponent{

  constructor(
    public dialogRef: MatDialogRef<BasicDialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
