import { Component,Inject, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialModule } from '../../../material/material.module'
import { NoticiasService } from '../../../core/services/noticias/noticias.service';
import { componentFactoryName } from '@angular/compiler';
import { inject } from '@angular/core/testing';
import { ImagePickerComponent } from '../image-picker/image-picker.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Noticia } from 'src/app/noticia/models/noticia.model';


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

  constructor(private fb: FormBuilder , public dialog:MatDialog,
  private _snackBar: MatSnackBar, public noticiaService:NoticiasService)
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
        usuario:['admin',[Validators.required]]
      });
  }

  saveNoticia(event:Event)
  {
    event.preventDefault();
    console.log('form value: ');
    console.log(this.form.value);

    if(this.imagenes.length !==0)
    {
      this.form.patchValue({imagenes:this.imagenes});
      if(this.form.valid)
      {
        const nt = this.form.value;
        this.noticiaService.addNoticia(nt).then(result=>
          {
            console.log('resultado creacion: ');
            console.log(result);
            this._snackBar.open('Noticia agregada con éxito','Aceptar',{duration:3000});
          });
      }
      else
      {
        alert('is not valid!');
      }
    }
    else
    {
     this._snackBar.open('Debe ingresar al menos una imagen',
     'Aceptar',{duration:3000});
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
        if(result !== undefined)
        {
          this.imagenes.push(result);
          this._snackBar.open('Imagen Agregada','Aceptar',{duration:3000});
        }
      })
  }

  removeImage(index:number)
  {
    this.imagenes.splice(index,1);
    this._snackBar.open('Imagen Eliminada','Aceptar',{duration:3000});
  }

  onSubmit(): void {
    alert('Thanks!');
  }
}
