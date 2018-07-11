import { Component } from '@angular/core';
import * as $ from 'jquery';
import {DataServicesService} from '../../services/data-services.service';
import {Observable} from 'rxjs';
import {} from '@types/googlemaps';
import {st} from '@angular/core/src/render3';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat = 31.04625722648856;
  lng = 31.3684025276184;
  url = 'https://yalla-mansoura.herokuapp.com';

  allstore: any[];
  namecollection: any[];
  nameyalla: any[];
  newusers: any[];
  content: any[];
  search = false;
  rating = 0;
  storelogined = true;
  liked = false;
  TopRatedarr = [];
  twoToprate = [];
  allComments: any[];
  countcount = [];
  private google: any;
  searchflag  = false;
  location = false;
  newlocation = '';
  searchmap = false;



  constructor(public  dataService: DataServicesService) {
    this.newcollection('1');
    this.newyalla('1');
    this.getallStore();
    this.checkhowlogin();
    this.getTopratting();
    this.newusersyalla();
  }
  newyalla(id: string) {
    this.dataService.newYalla(id).subscribe(allstore => {
      this.nameyalla = allstore;
      console.log(this.nameyalla);
    }, err => {
    });

  }

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
  newusersyalla() {
    this.dataService.getNewUsers().subscribe(newusers => {
      this.newusers = newusers;
      console.log(this.newusers);
    }, err => {
    });

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
  back(){
    this.searchflag = false;
    this.searchmap = false;
  }
  getallStore() {
    this.dataService.getAllStore().subscribe(allstore => {
      this.allstore = allstore;
      console.log('all');
      console.log(this.allstore);
    }, err => {
    });
  }
  newcollection(id: string) {
    this.dataService.getNewCollection(id).subscribe(allstore => {
      this.namecollection = allstore;
      console.log('///////////////////////////////////////');
      for (let x = 0; x < this.namecollection.length; x++) {
        this.dataService.getAllFeedback(this.namecollection[x]._id).subscribe(allComments => {
          this.allComments = allComments;
          console.log('all comments');
          console.log(this.allComments.length);
          }, err => {
          console.log(' error all comments');
          console.log(err);
        });
      }
      console.log(this.namecollection.length);
      console.log(this.namecollection);
    }, err => {
      console.log('errrrrrrrrrr');
      console.log(err);
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
  getrateing(id: any) {
    this.dataService.getrate(id).subscribe(rating => {
      this.rating = rating;

      console.log(this.rating);
    }, err => {
    });
  }


  getTopratting() {
    this.dataService.gettoprate().subscribe(toprate => {
      const rated = [];

      const len_toprate = toprate.length;
      for (let x = 0 ; x < len_toprate  ; x++) {
        rated.push(toprate[x]);
      }
      this.TopRatedarr[0] = rated.sort(this.Comparator)[0];
      this.TopRatedarr[1] = rated.sort(this.Comparator)[1];

      for (let y = 0 ; y < this.TopRatedarr.length ; y++) {
        const Topratedata = {
          store: '',
          rate: ''
        };
        Topratedata.rate = this.TopRatedarr[y][1];
        this.dataService.getstoreratedata(this.TopRatedarr[y][0]).subscribe(topstorerate => {
          Topratedata.store = topstorerate.stores[0];

        }, err => {
          console.log(err);
        });
        this.twoToprate.push( Topratedata);
      }

      console.log('tsss');
      console.log(this.twoToprate);
      return this.twoToprate;
    }, err => {
      console.log(err);
    });
  }

  Comparator(a, b) {
    if (a[1] < b[1]) { return 1; }
    if (a[1] > b[1]) { return -1; }
    return 0;
  }


  checkhowlogin() {
    const sessionvalue = sessionStorage.getItem('value');
    if (sessionvalue === 'user') {
      this.storelogined = false;
    }
  }
  makelike(id: any, catid: any) {
    if (!this.liked) {
      const userid = sessionStorage.getItem('id');
      const  data = {
        userid: userid,
        status: 1
      };
      this.dataService.like(id, data).subscribe(like => {
/*
        this.liked = true;
        this.getlike(userid);
*/
        this.newcollection(catid);
      }, err => {
      });

    } else {
      const userid = sessionStorage.getItem('id');
      const  data = {
        userid: userid,
        status: 0
      };
      this.dataService.like(id, data).subscribe(like => {
/*
        this.liked = false;
        this.getlike(userid);
*/
        this.newcollection(catid);
      }, err => {
      });
    }
  }
  getlike(iduser: any[]) {
    const userid = sessionStorage.getItem('id');
    if (iduser.indexOf(userid) >= 0) {
       this.liked = true;
      return true;
    } else {
       this.liked = false;
      return false;
    }
  }


  getAllComments(id) {
    this.dataService.getAllFeedback(id).subscribe(allComments => {
      this.allComments = allComments;
      console.log('all comments');
      console.log(this.allComments);
      }, err => {
      console.log(' error all comments');
      console.log(err);
    });
  }
  counter(num) {
    const arr = [];
    for (let i = 0 ; i < num ; i++) {
      arr.push(i);
    }
    return arr;
  }
  discounter(num) {
    const mis = (5 - parseInt(num));
    const arr = [];
    for (let i = 0 ; i < mis ; i++) {
      arr.push(i);
    }
    return arr;
  }

}
