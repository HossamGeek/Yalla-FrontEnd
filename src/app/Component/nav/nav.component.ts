import { Component, OnInit } from '@angular/core';
import {DataServicesService} from '../../services/data-services.service';
import {store} from '@angular/core/src/render3/instructions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  lat = 31.039620412083682;
  lng = 31.37044100646972;
  url = 'https://yalla-mansoura.herokuapp.com';
  userdata: any[];
  storedata: any[];
  sessionvalid = false;
  showpoplogin = false;
  showpoploginuser = false;
  showpoploginstore = false;
  showstoredata = false;
  showCreateuser = false;
  showCreateStore = false;
  namestore = '';
  imgstore = '';
  tokenstore = '';
  idstore = '';
  showuserdata = false;
  nameuser = '';
  imguser = '';
  tokenuser = '';
  iduser = '';
  admin = '';

  /*err foem*/
  email = '';
  password = '';
  erralert = '';
  showalert = false;
  erremail = false;
  errpassword = false;
  /** end err**/


  userDataRegister = {
    username: '',
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    phone: ''
  };




  userRegisterErr = {
    username: false,
    email: false,
    password: false,
    firstname: false,
    lastname: false,
    phone: false
  };
  showalertregister = false;
  gender = 1;
  categoryid = 1;

  /**Store**/
  StoreDataRegister = {
    email: '',
    password: '',
    name: '',
    category: 1,
  };
  Storedescribe = '';
  storeRegisterErr = {
    name: false,
    email: false,
    password: false,
    describe: false,
  };


  constructor(public  dataService: DataServicesService, public router: Router) {
     }

  ngOnInit() {
  }
  click(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    console.log(event);

  }

  showpopup() {
//    this.showpoplogin = true;
    const sessionvalue = sessionStorage.getItem('value');
    if (sessionvalue === 'user') {
      this.sessionvalid = true;
      this.showpoplogin = false;
      this.showuserdata = true;

      this.nameuser = sessionStorage.getItem('username');
      this.imguser = sessionStorage.getItem('img');
      this.iduser = sessionStorage.getItem('id');
      this.tokenuser = sessionStorage.getItem('usrtoken');
      this.admin = sessionStorage.getItem('admin');
      console.log(this.admin);
    } else if (sessionvalue === 'store') {
      this.sessionvalid = true;
      this.showpoplogin = false;
      this.showstoredata = true;
      this.namestore = sessionStorage.getItem('name');
      this.imgstore = sessionStorage.getItem('img');
      this.idstore = sessionStorage.getItem('id');
      this.tokenstore = sessionStorage.getItem('storetoken');
      console.log(this.sessionvalid + 'store');
    } else {
      this.sessionvalid = false;
      this.showpoplogin = true;
      console.log(this.sessionvalid);
    }
  }

  showuser() {
    this.showpoplogin = false;
    this.showpoploginstore = false;
    this.showCreateuser = false;
    this.showpoploginuser = true;
  }
  showstore() {
    this.showpoplogin = false;
    this.showpoploginstore = true;
    this.showpoploginuser = false;
    this.showCreateStore = false;
  }

  close() {

    this.showpoplogin = false;
    this.showpoploginstore = false;
    this.showpoploginuser = false;
    this.showstoredata = false;
    this.showuserdata = false;
    this.showCreateuser = false;
    this.showCreateStore = false;
    this.email = '';
    this.password = '';
    this.erralert = '';
  }
  showpopupcreateUser() {
    this.showpoplogin = false;
    this.showpoploginstore = false;
    this.showpoploginuser = false;
    this.showstoredata = false;
    this.showCreateuser = true;

  }

  showpopupcreateStore() {
    this.showpoplogin = false;
    this.showpoploginstore = false;
    this.showpoploginuser = false;
    this.showstoredata = false;
    this.showCreateStore = true;

  }

  loginuser({value, valid}) {
    if (valid) {
      const user = {
        email: value.email,
        password: value.password
      };
      this.dataService.loginuser(user).subscribe(userdata => {
        this.userdata = userdata;
       if (this.userdata[1] === false) {
         this.showalert = true;
         this.erralert = this.userdata[0].err;
         if (this.erralert === 'password not valid') {
           this.errpassword = true;
           this.erremail = false;
         } else {
           this.erremail = true;
           this.errpassword = false;
         }
       } else {
         this.erremail = false;
         this.errpassword = false;
         this.showpoplogin = false;
         this.showpoploginstore = false;
         this.showpoploginuser = false;
         const id = 'id';
         const idvalue = this.userdata['user']._id;
         const username = 'username';
         const uservalue = this.userdata['user'].username;
         const admin = 'admin';
         const adminvalue = this.userdata['user'].admin;
         const sessionflag = 'value';
         const sessionvalue = 'user';
         const usrtoken = 'usrtoken';
         const tokenvalue = this.userdata['token'];
         const userimg = 'img';
         const imgvalue = this.userdata['user'].img;
         sessionStorage.setItem(id, idvalue);
         sessionStorage.setItem(username, uservalue);
         sessionStorage.setItem(sessionflag, sessionvalue);
         sessionStorage.setItem(usrtoken, tokenvalue);
         sessionStorage.setItem(userimg, imgvalue);
         sessionStorage.setItem(admin, adminvalue);
         /*console.log(this.userdata);*/
         this.router.navigate(['/home']);
         location.reload();
       }
      }, err => {

      });

    } else {
      this.erremail = true;
      this.errpassword = true;
    }

  }

  loginstore({value, valid}) {

    if (valid) {
      const store = {
        email: value.email,
        password: value.password
      };
      this.dataService.loginstore(store).subscribe(storedata => {
        this.storedata = storedata;
        console.log(this.storedata);
        if (this.storedata[1] === false) {
          this.showalert = true;
          this.erralert = this.storedata[0].err;
          if (this.erralert === 'password not valid') {
            this.errpassword = true;
            this.erremail = false;
          } else {
            this.erremail = true;
            this.errpassword = false;
          }
        } else {
          this.erremail = false;
          this.errpassword = false;
          this.showpoplogin = false;
          this.showpoploginstore = false;
          this.showpoploginuser = false;
          const id = 'id';
          const idvalue = this.storedata['store']._id;

          const category = 'category';
          const categoryvalue = this.storedata['store'].category;
          const name = 'name';
          const uservalue = this.storedata['store'].name;
          const sessionflag = 'value';
          const sessionvalue = 'store';
          const storetoken = 'storetoken';
          const tokenvalue = this.storedata['token'];
          const storeimg = 'img';
          const imgvalue = this.storedata['store'].img;
          sessionStorage.setItem(id, idvalue);
          sessionStorage.setItem(name, uservalue);
          sessionStorage.setItem(sessionflag, sessionvalue);
          sessionStorage.setItem(storetoken, tokenvalue);
          sessionStorage.setItem(storeimg, imgvalue);
          sessionStorage.setItem(category, categoryvalue);
          this.router.navigate(['/home']);
          location.reload();

//          console.log(this.storedata);
        }
      }, err => {
      });

    } else {
      this.erremail = true;
      this.errpassword = true;
    }

  }
  logout() {
    this.email = '';
    this.password = '';
    this.erralert = '';
    sessionStorage.clear();
    this.showstoredata = false;
    this.showuserdata = false;
    this.router.navigate(['/home']);
    location.reload();

  }
  registerUser({value, valid}) {
    if (valid) {
      const  data = {
        username: '',
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        phone: '',
        img: '',
        lat: 0,
        lng: 0
      };

      data.username =  value.username;
      data.email = value.email;
      data.firstname = value.firstname;
      data.lastname = value.lastname;
      data.password = value.password;
      data.phone = value.phone;
      if (this.gender === 1) {
        data.img = 'male.jpg';
      } else if (this.gender === 2) {
        data.img = 'female.jpg';
      }
      data.lat = this.lat;
      data.lng = this.lng;

      this.dataService.saveUser(data).subscribe(userdata => {
        if (userdata[1] === false) {
        this.showalertregister = true;
        this.erralert = userdata[0].err;
      } else {
          console.log(userdata);
          this.close();
          this.showpoploginuser = true;
        }

    }, err => {
      console.log(err);
    });
    } else {
      console.log('false');
      this.userRegisterErr.username  = true;
      this.userRegisterErr.email  = true;
      this.userRegisterErr.password  = true;
      this.userRegisterErr.firstname = true;
      this.userRegisterErr.lastname = true;
      this.userRegisterErr.phone = true;
    }
  }



  registerStore({value, valid}, e) {
    if (valid) {
      console.log('true');


      const  data = {
        describe: '',
        categoryid: 0,
        email: '',
        password: '',
        name: '',
        img: '',
        lat: 0,
        lng: 0
      };
      data.name =  value.name;
      data.email = value.email;
      data.categoryid = this.categoryid;
      if (this.categoryid === 1) {
        data.img = 'cofe1.png';
      } else if (this.categoryid === 2) {
        data.img = 'resturant1.png';
      } else if (this.categoryid === 3) {
        data.img = 'store1.png';
      } else if (this.categoryid === 4) {
        data.img = 'gym1.png';
      } else if (this.categoryid === 5) {
        data.img = 'club1.png';
      }

      data.password = value.password;
      data.describe = this.Storedescribe;
      data.lat = this.lat;
      data.lng = this.lng;
      console.log(data);
    this.dataService.saveStore(data).subscribe(storedata => {
         if (storedata[1] === false) {
        this.showalertregister = true;
        this.erralert = storedata[0].err;
      } else {
          this.close();
    //      this.showpoploginstore = true;
           location.reload();
        }
    }, err => {
      console.log(err);
    });
    } else {
      console.log('false');
      this.storeRegisterErr.name  = true;
      this.storeRegisterErr.email  = true;
      this.storeRegisterErr.password  = true;
      this.storeRegisterErr.describe = true;
        }



  }
  category(ge) {
    if (ge == 1) {
      this.categoryid = 1;
    } else if (ge == 2) {
      this.categoryid = 2;
    } else if (ge == 3) {
      this.categoryid = 3;
    } else if (ge == 4) {
      this.categoryid = 4;
    } else if (ge == 5) {
      this.categoryid = 5;
    } else {
      console.log('nan');
    }
  }
  Gender(ge) {
    if (ge == 1) {
      this.gender = 1;
    } else if (ge == 2) {
      this.gender = 2;
    } else {
      console.log('nan');
    }
  }

}
