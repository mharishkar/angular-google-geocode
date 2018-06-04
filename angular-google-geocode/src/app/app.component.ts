import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators, 
         FormBuilder, FormArray, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private addressForm : FormGroup,
    private formBuilder : FormBuilder

  ) {

  }

  ngOnInit() {
      this.buildForm()
  }

  buildForm() {
    this.addressForm = this.formBuilder.group({
      'Line_one': ['', [Validators.required]],
      'Line_two': ['', [Validators.required]],
      'state': ['', [Validators.required]],
      'city': ['', [Validators.required]],
      'country': ['', [Validators.required]],
      'pin_code': ['', [Validators.required]],
    });
  }
}

