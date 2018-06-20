import { FormGroup, Validators, 
         FormBuilder, }           from '@angular/forms';
  import { Component , OnInit}    from '@angular/core';
import { MapsAPILoader }          from '@agm/core/services/maps-api-loader/maps-api-loader';

declare var google;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  addressForm : FormGroup;
  loadScreen  : boolean = false;

  
  constructor(
    private formBuilder : FormBuilder,
    private loader    : MapsAPILoader
  ) {}

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

  getLocation() {
    this.loadScreen = true;    
    navigator.geolocation
        .getCurrentPosition(position => {
            const latLng = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            this.loader.load().then(() => {
            const geoCoder = new google.maps.Geocoder();
            this.loadScreen = false; 
            
            geoCoder.geocode({ "location": latLng }, (results, status) => {
                let formData = {
                    'line_one' : `${results[0].address_components[0].long_name}, ${results[0].address_components[1].long_name}`,
                    'line_two' : `${results[0].address_components[2].long_name}, ${results[0].address_components[3].long_name}`,
                    'city'     : results[0].address_components[4].long_name,
                    'state'    : results[0].address_components[6].long_name,
                    'country'  : results[0].address_components[7].long_name,
                    'pin_code' : results[0].address_components[8].long_name
                };
                this.addressForm.patchValue(formData);
             });
            });
        });
  } 
}
