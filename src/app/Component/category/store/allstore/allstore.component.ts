import { DataServicesService } from './../../../../services/data-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allstore',
  templateUrl: './allstore.component.html',
  styleUrls: ['./allstore.component.css']
})
export class AllstoreComponent implements OnInit {

  allCoffee = [];
  searchflag  = false;
  location = false;
  newlocation = '';
  searchmap = false;
  lat = 31.04625722648856;
  lng = 31.3684025276184;
  url = 'https://yalla-mansoura.herokuapp.com';


  constructor(public  dataService: DataServicesService) {
    this.getallCoffee();
  }

  ngOnInit() {
  }

  getallCoffee() {
    this.dataService.getStore().subscribe(allCoffee => {
      this.allCoffee = allCoffee.store;
      let sumrates = 0;
      let sumuser = 0;
      for (let x = 0; x <= this.allCoffee.length - 1; x++) {
        const rated = [];

        this.dataService.getrate(this.allCoffee[x]._id).subscribe(rating => {

          sumrates = rating.rates.sumrates;
          sumuser = rating.rates.sumuser;
          this.allCoffee[x].sumrates = sumrates;
          this.allCoffee[x].sumuser = (sumuser + ' ' + 'user');
        }, err => {
        });


      }
    }, err => {
    });
  }

  mysplit(string) {
    const arr = string.split(',');
    const len = arr.length;
    const arr2 = [];
    arr2.push(arr[0]);
    arr2.push(arr[len - 1]);
    const result = arr2.join(',');
    return result;
  }


  counter(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(i);
    }
    return arr;
  }

  discount(num) {
    const arr = [];
    const mis = (5 - num);
    for (let i = 0; i < mis; i++) {
      arr.push(i);
    }
    return arr;
  }

  searching(e) {
    console.log(e);
    if (e === '') {
      this.searchflag = false;
      this.searchmap = false;
    } else {
      this.searchflag = true;

    }
  }
  back() {
    this.searchflag = false;
    this.searchmap = false;
  }

  /**search map**/

  click(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    console.log(event);

  }
  popmap() {
    this.location = true;
  }
  close() {
    this.location = false;
  }
  getlocation() {
    const data = {
      lat:  this.lat,
      long: this.lng
    };
    console.log(data);


    this.dataService.getLocation(data).subscribe(location => {
      this.newlocation = location.toLowerCase();
      this.location = false;
      this.searchmap = true;
      console.log(this.newlocation);
    }, err => {
      console.log(err);
      this.close();
    });

  }
}
