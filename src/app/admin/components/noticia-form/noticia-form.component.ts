import { Component,Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialModule } from '../../../material/material.module'
import { NoticiasService } from '../../../core/services/noticias/noticias.service';
import { componentFactoryName } from '@angular/compiler';
import { inject } from '@angular/core/testing';
import { ImagePickerComponent } from '../image-picker/image-picker.component';

export interface DialogData
{
  image_url:string;
}

@Component({
  selector: 'app-noticia-form',
  templateUrl: './noticia-form.component.html',
  styleUrls: ['./noticia-form.component.scss']
})
export class NoticiaFormComponent {

  imagenes: string[] = [];
  image_url:string = '';

  form: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder , public dialog:MatDialog)
  {
    this.buildForm();
  }

  private buildForm()
  {
    this.form = this.fb.group(
      {
        titulo:['',[Validators.required]],
        descripcion:['',[Validators.required]],
        fecha:['',[Validators.required]],
        imagenes:[[],[Validators.required]],
        categoria:['',[Validators.required]],
        usuario:['',[Validators.required]]
      });
  }

  saveNoticia(event:Event)
  {
    event.preventDefault();
    console.log(this.form.value);

    if(this.form.valid)
    {

    }

  }

  openDialog():void
  {
    const dialogRef = this.dialog.open(ImagePickerComponent,
      {
        width:'500px',
        data:{image_url: this.image_url}
      });
    dialogRef.afterClosed().subscribe(result=>
      {
        this.image_url = result;
      })
  }

  onSubmit(): void {
    alert('Thanks!');
  }
}
