import { Injectable } from '@angular/core';
import { getAuth,signOut ,signInWithEmailAndPassword ,createUserWithEmailAndPassword } from "firebase/auth";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth = getAuth();
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser:Observable<any>;
  private authenticated = new BehaviorSubject<boolean>(false);

  constructor()
  {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')||'{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  createUser(email:string,password:string)
  {
    return createUserWithEmailAndPassword(this.auth,email,password);/*.then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    // ..
    });*/
  }

  signInUser(email:string,password:string)
  {
    return signInWithEmailAndPassword(this.auth,email,password).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      localStorage.setItem('currentUser',JSON.stringify(user));
      this.authenticated.next(true);
      this.currentUserSubject.next(user);
      console.log('signInUser');
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  signOutUser()
  {

    let usuario = this.currentUserSubject.value;
    if(usuario)
    {
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
      this.authenticated.next(false);
    }

    return signOut(this.auth).then((user) => {
      console.log('signOutUser');
      console.log(user);
    // Sign-out successful.
    }).catch((error) => {
    // An error happened.
    });
  }

  public get currentUserValue()
  {
    //return this.auth.currentUser;
    return this.currentUserSubject.value;
  }

  get isAuthenticated()
  {
    if(this.currentUserValue!=null)
    {
      this.authenticated.next(true);
    }
    else
    {
      this.authenticated.next(false);
    }

    return this.authenticated.asObservable();

  }


}
