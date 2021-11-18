import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

export interface DialogData
{
  image_url:string;
}

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss']
})
export class ImagePickerComponent implements OnInit {

  invalid_image:boolean = true;
  image_url:string = '';

  constructor(public _snackBar: MatSnackBar,public dialogRef: MatDialogRef<ImagePickerComponent>,
    @Inject(MAT_DIALOG_DATA) public data:DialogData) { }

  ngOnInit(): void {

  }

  onNoClick():void
  {
    this.dialogRef.close();
  }

  handleError()
  {
    this.invalid_image = true;
  }

  resetImage()
  {
    this.invalid_image = false;
  }

}
