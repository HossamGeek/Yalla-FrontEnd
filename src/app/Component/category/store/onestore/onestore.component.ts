import { DataServicesService } from './../../../../services/data-services.service';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params, RouterLinkActive} from '@angular/router';
@Component({
  selector: 'app-onestore',
  templateUrl: './onestore.component.html',
  styleUrls: ['./onestore.component.css']
})
export class OnestoreComponent implements OnInit {

 oneStore: any[];
  facebook = '';
  twitter = '';
  google = '';
  phone = '';
  content: any[];
  liked = false;
  storelogined = false;
  userlogined = false;
  showrate = false;
  imgstore = '';
  storeid = '';
  rate = 1;
  url = 'https://yalla-mansoura.herokuapp.com';

  constructor(public  dataService: DataServicesService,
 public route: ActivatedRoute) {
   //   console.log(this.getlike('5b2d7cc37151d40838688894'));
    console.log(this.liked);
    }
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params.id);
      this.getStore(params.id);
      this.getsocial(params.id);
      this.getcontent(params.id);
      this.checkhowlogin(params.id);
    this.storeid = params.id;

    });
  }
  getStore(id: any) {
      this.dataService.getOneStore(id).subscribe(oneStore => {
      this.oneStore = oneStore;
      this.imgstore = this.oneStore[0].img;

        let sumrates = 0;
        let sumuser = 0;
          this.dataService.getrate(id).subscribe(rating => {

            sumrates = rating.rates.sumrates;
            sumuser = rating.rates.sumuser;
            this.oneStore[0].sumrates = sumrates;
            this.oneStore[0].sumuser = (sumuser + ' ' + 'user');
  console.log(sumrates);
          }, err => {
          });

      console.log(this.oneStore);
    }, err => {
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
  getsocial(id: any) {
    this.dataService.getsocail(id).subscribe(socials => {

      this.phone = socials[0].phone;
      for (let x = 0; x <= socials[0].socials.length - 1 ; x++) {
        if (x == 0) {
          this.facebook = socials[0].socials[0];
        } else if (x == 1) {
          this.twitter = socials[0].socials[0];

        } else if (x == 2) {
          this.google = socials[0].socials[0];

        }
      }
    }, err => {
    });

  }

  getcontent(id: any) {
    this.dataService.getcontentstore(id).subscribe(content => {
      this.content = content;
      console.log(this.content);
    }, err => {
    });

  }


  checkhowlogin(id: any) {
    const sessionvalue = sessionStorage.getItem('value');
    const sessionid = sessionStorage.getItem('id');
    console.log("eq");
    console.log(sessionid);
    if (sessionvalue === 'user') {
      this.storelogined = false;
      this.userlogined = true;
    }else if (sessionid === id) {
      this.storelogined = true;
      this.userlogined = false;
    }
  }
  makelike(id: any, catid: any, store: any) {
    if (!this.liked) {
      const userid = sessionStorage.getItem('id');
      const  data = {
        userid: userid,
        status: 1
      };
      this.dataService.like(id, data).subscribe(like => {
        this.getcontent(store);
      }, err => {
      });

    } else {
      const userid = sessionStorage.getItem('id');
      const  data = {
        userid: userid,
        status: 0
      };
      this.dataService.like(id, data).subscribe(like => {
        this.getcontent(store);
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

   showpoprate(){
     this.showrate = true;
   }
    close(){
      this.showrate = false;
    }
    getrate(ge){
      if (ge == 1) {
        this.rate = 1;
      } else if (ge == 2) {
        this.rate = 2;
      } else if (ge == 3) {
        this.rate = 3;
      } else if (ge == 4) {
        this.rate = 4;
      } else if (ge == 5) {
        this.rate = 5;
      } else {
        console.log('nan');
      }
    }
    addrate(id: any){
      const userid = sessionStorage.getItem('id');
      const  data = {
        userid: userid,
        rate: this.rate,
        storeid: id
      };

      this.dataService.addrate(data).subscribe(rate => {
        this.getStore(id);
        this.close();
       // this.getcontent(rate);
      }, err => {
      });
  }




}
