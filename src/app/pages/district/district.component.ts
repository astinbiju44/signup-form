import { Component } from '@angular/core';
import { district } from 'src/assets/district';
import { Router } from '@angular/router';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent {
  districts=district;
  constructor(public router: Router) {}



  goto(id: any)
  {
    localStorage.setItem('title', id);
    this.router.navigate(['/single']);
    console.log(id);
  };


}
