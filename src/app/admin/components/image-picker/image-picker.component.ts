import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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

  invalid_image:boolean = false;
  image_url:string = '';

  constructor(public dialogRef: MatDialogRef<ImagePickerComponent>,
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
    //console.log(image);
  }

  resetImage()
  {
    this.invalid_image = false;
    console.log('reset image: ');
    console.log(this.invalid_image);
  }

}
