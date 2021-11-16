import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder)
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

    }

  }

  ngOnInit(): void {
  }

}
