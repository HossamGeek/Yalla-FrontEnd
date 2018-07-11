import { store } from '@angular/core/src/render3/instructions';
import { DataServicesService } from './../services/data-services.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting-store',
  templateUrl: './setting-store.component.html',
  styleUrls: ['./setting-store.component.css']
})
export class SettingStoreComponent implements OnInit {

  Store: any;
  token: any;
  userData: any[];
  storename: '';
  email: '';
  phone: '';
  describe: '';
  selectedFile: any;
  category: '';
  url = 'https://yalla-mansoura.herokuapp.com';
  storeimg = '';
  idvalue = '';
  userObj = {username: '', email: '', phone: '', firstname: '', lastname: '', password: '', token : '', img: '' };
  errpassword = false;
  erremail = false;

  constructor(public  dataService: DataServicesService,
  private router: Router) { }
  ngOnInit() {
    this.Store = sessionStorage.getItem('id');
    this.token = sessionStorage.getItem('storetoken');
    this.getCurrentStore(this.Store);
    console.log(this.Store);

  }
  getCurrentStore(id) {
    console.log('heeeeeeeeeeeee' + id);

      this.dataService.getStoreData(id).subscribe(storeData => {
      console.log(storeData);
      this.storename = storeData.stores[0].name;
      this.email = storeData.stores[0].email;
      this.describe = storeData.stores[0].describe;
      this.category = storeData.stores[0].category;
      this.storeimg = storeData.stores[0].img;
    }, err => {
      console.log("error")
      console.log(err);
    });
  }

  updateStore({value, valid}, e) {
    if(valid) {
      const formData = new FormData();
      this.selectedFile = <File> e.target[0].files[0];
      console.log(e.target[0].files[0]);
      // console.log(value.storename+value.email+value.password+value.describe)
      formData.append('name', value.storename);
      formData.append('email', value.email);
      formData.append('describe', value.describe);
      // formData.append('lastname', value.lastname);
      formData.append('password', value.password);
      formData.append('token', this.token);
      formData.append('category', this.category);
      formData.append('img', <File> e.target[0].files[0]);
      this.dataService.editStore(this.Store, formData).subscribe(storeData => {
        console.log(storeData);
        sessionStorage.setItem('id', storeData.store._id);
        sessionStorage.setItem('name', storeData.store.name);
        sessionStorage.setItem('storetoken', storeData.token);
        sessionStorage.setItem('img', storeData.store.img);
      }, err => {
        console.log(err);
      });
      sessionStorage.setItem('id', this.Store);
      sessionStorage.setItem('name', this.storename);
      sessionStorage.setItem('storetoken', this.token);
      //  sessionStorage.setItem('storetoken', );

      this.router.navigate(['/home']);

    }else{
      this.errpassword = true;
      this.erremail = true;
    }
 }


}
