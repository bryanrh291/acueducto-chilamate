import { Component,Inject, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute,Route, Router,Params } from '@angular/router'
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
  selector: 'app-notica-edit',
  templateUrl: './noticia-edit.component.html',
  styleUrls: ['./noticia-edit.component.scss']
})
export class NoticiaEditComponent {

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>
    {
      const id = params.id;
      this.fetchNoticia(id);
    });
  }

  fetchNoticia(id:string)
  {
    this.noticiaService.getNoticia(id).then(result=>
      {
        this.noticia = result;
        this.imagenes = result.imagenes;
        this.buildForm();
      });
  }

  noticia:Noticia = {
    id:'',
    titulo:'',
    descripcion:'',
    imagenes:[''],
    categoria:"",
    usuario:"",
    fecha: "",
    estado:true
  };
  imagenes: string[] = [];
  image_url:string = '';

  form: FormGroup = this.fb.group({});

  constructor(private route:ActivatedRoute,private fb: FormBuilder , public dialog:MatDialog,
  private _snackBar: MatSnackBar, public noticiaService:NoticiasService)
  {
    this.buildForm();
  }

  private buildForm()
  {
    this.form = this.fb.group(
      {
        id:[this.noticia.id,[Validators.required]],
        titulo:[this.noticia.titulo,[Validators.required]],
        descripcion:[this.noticia.descripcion,[Validators.required]],
        fecha:[this.noticia.fecha,[Validators.required]],
        imagenes:[this.noticia.imagenes,[Validators.required]],
        categoria:[this.noticia.categoria,[Validators.required]],
        usuario:[this.noticia.usuario,[Validators.required]]
      });
  }

  updateNoticia(event:Event)
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
        this.noticiaService.updateNoticia(nt).then(result=>
          {
            console.log('resultado edición: ');
            console.log(result);
            this._snackBar.open('Noticia editada con éxito','Aceptar',{duration:3000});
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
