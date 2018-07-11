import { DataServicesService } from './../../services/data-services.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  userimg: any;
  User: any;
  token: any;
  userData: any[];
  username: '';
  email: '';
  phone: '';
  firstname: '';
  selectedFile: any;
  lastname: '';
  errpassword = false;
  erremail = false;
  url = 'https://yalla-mansoura.herokuapp.com';
  userObj = {username: '', email: '', phone: '', firstname: '', lastname: '', password: '', token : '', img: '' };
  constructor(public  dataService: DataServicesService, public router: Router) { }
  ngOnInit() {
    this.User = sessionStorage.getItem('id');
    this.token = sessionStorage.getItem('usrtoken');
    this.getCurrentUser();
  }
  getCurrentUser() {
      this.dataService.getUser(this.User).subscribe(userData => {
      this.userData = userData;
      this.username = userData.user.username;
      this.email = userData.user.email;
      this.phone = userData.user.phone ;
      this.firstname = userData.user.firstname;
      this.lastname = userData.user.lastname;
      this.userimg = userData.user.img;
    }, err => {
      console.log(err);
    });
  }

  updateUser({value,valid}, e) {
    if(valid) {


      //    console.log(e.target[0].files[0]);
      // this.userObj.username = value.username;
      // this.userObj.email = value.email;
      // this.userObj.phone = value.phone ;
      // this.userObj.firstname = value.firstname;
      // this.userObj.lastname = value.lastname;
      //  this.userObj.password = value.password;
      //  this.userObj.token = this.token;
      //  this.userObj.img = e.target[0].files[0];

      const formData = new FormData();
      this.selectedFile = <File> e.target[0].files[0];
      console.log(e.target[0].files[0]);

      formData.append('username', value.username);
      formData.append('email', value.email);
      formData.append('phone', value.phone);
      formData.append('firstname', value.firstname);
      formData.append('lastname', value.lastname);
      formData.append('password', value.password);
      formData.append('token', this.token);
      formData.append('img', <File> e.target[0].files[0]);
      this.dataService.editUser(this.User, formData).subscribe(userData => {
        console.log(this.userData);
        sessionStorage.setItem('id', userData.user._id);
        sessionStorage.setItem('username', userData.user.username);
        sessionStorage.setItem('storetoken', userData.token);
        sessionStorage.setItem('img', userData.user.img);
      }, err => {
        //  console.log(err);
      });
      this.router.navigate(['/home']);
    }else{
      this.errpassword = true;
      this.erremail = true;
    }
 }

}
