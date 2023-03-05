import { Component } from '@angular/core';
import { district } from 'src/assets/district';

@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.css']
})
export class SinglepageComponent {
  district: any;

  ngOnInit() {
    let id = localStorage.getItem('title');
    console.log('Redirect to: ', id);
    this.district = district.filter((e) => e.name == id);
    console.log(this.district);
  }

}
