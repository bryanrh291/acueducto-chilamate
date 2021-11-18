import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = this.fb.group({});
  hidePassword:boolean = true;

  constructor(public router:Router,public _snackBar: MatSnackBar,private fb: FormBuilder, private authS:AuthService)
  {
    this.buildForm();
  }

  private buildForm()
  {
    this.form = this.fb.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(5)]],
      });
  }

  login(event:Event)
  {
    event.preventDefault();
    console.log(this.form.value);

    if(this.form.valid)
    {
      this.authS.signInUser(this.form.get('email')?.value,this.form.get('password')?.value).then(result =>
        {
          console.log('login result:');
          this._snackBar.open('Has iniciado sesión de manera exitosa','Aceptar',{duration:3000});
          console.log(result);
          this.router.navigate(['admin']);
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          this._snackBar.open(`Error al iniciar sesión: ${errorMessage}`,'Aceptar',{duration:4000});
          // ..
        });
    }

  }

  ngOnInit(): void {
  }

}
