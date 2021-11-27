import { Component,OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../../../core/services/auth/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{

  currentUser: any;
  isAuthenticated: boolean = false;

  ngOnInit(): void {
    this.authS.currentUser.subscribe((user)=>
    {
      this.currentUser = user;
    });

    this.authS.isAuthenticated.subscribe((autenticated)=>
    {
      this.isAuthenticated = autenticated;
    });

    console.log('currentUser: ');
    console.log(this.currentUser);
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(public router:Router,public _snackBar: MatSnackBar,private breakpointObserver: BreakpointObserver,private authS:AuthService) {}

  cerrarSesion()
  {
    this.authS.signOutUser().then((result) => {
    // Sign-out successful.
    console.log('Ha cerrado sesión');
    this._snackBar.open('Has cerrado sesión de manera exitosa','Aceptar',{duration:3000});
    this.router.navigate(['admin/login']);
    console.log(result);
    }).catch((error) => {
    // An error happened.
    console.log('Ha ocurrido un error');
    console.log(error);
    });
  }

}
