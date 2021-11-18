import { Injectable } from '@angular/core';
import { getAuth,signOut ,signInWithEmailAndPassword ,createUserWithEmailAndPassword } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth = getAuth();

  constructor() { }

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
    return signInWithEmailAndPassword(this.auth,email,password);/*.then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });*/
  }

  signOutUser(email:string,password:string)
  {
    return signOut(this.auth);/*.then(() => {
    // Sign-out successful.
    }).catch((error) => {
    // An error happened.
    });*/
  }

}
