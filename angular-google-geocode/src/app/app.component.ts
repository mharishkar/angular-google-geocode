import { Component , OnInit} from '@angular/core';
import { FormGroup, Validators, 
         FormBuilder, } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private addressForm : FormGroup;
  
  constructor(
    private formBuilder : FormBuilder

  ) {

  }

  ngOnInit() {
      this.buildForm();
  }

  buildForm() {
    this.addressForm = this.formBuilder.group({
      'line_one' : ['', [Validators.required]],
      'line_two' : ['', [Validators.required]],
      'state'    : ['', [Validators.required]],
      'city'     : ['', [Validators.required]],
      'country'  : ['', [Validators.required]],
      'pin_code' : ['', [Validators.required]],
    });
  }
}

