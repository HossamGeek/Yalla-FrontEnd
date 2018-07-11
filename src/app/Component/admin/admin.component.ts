import { Component, OnInit } from '@angular/core';
import {DataServicesService} from '../../services/data-services.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  alluser = [];
  allcomment =[];
  userscomp = false;
  commentcomp = false;
  showpassword = false;
  password = '';
  errmsg = '';
  erralert = false;
  adminsend = false;
  activesend = false;
  commentsend = false;
  data = {
    email: '',
    password: '',
    token: '',
    activation: false
  };
  theuser = '';
  datacomment = {
    id: '',
    password: '',
    token: '',
    activation: 1
  };
  constructor(public  dataService: DataServicesService, public route: ActivatedRoute, private router: Router) {
    const sessiontoken = sessionStorage.getItem('usrtoken');
    this.getall(sessiontoken);
    this.getallcomment();
  }

  ngOnInit() {
  this.route.params.subscribe(params => {
    console.log(params.id);
    this.getuser(params.id);
  this.theuser = params.id;
  });

}

  getuser(id: any) {
    const sessionadmin = sessionStorage.getItem('admin');
    this.dataService.getUser(id).subscribe(userdata => {

      if (userdata.user.admin && sessionadmin) {
        console.log(userdata.user.admin);
     } else {
        this.router.navigate(['/home']);
      }
    }, err => {
      console.log(err);
    });
  }


  getall(Access: any) {
    this.dataService.getall(Access).subscribe(usersdata => {
   if (usersdata.msg === 'Auth Faild') {
     this.router.navigate(['/home']);
   } else {
     this.alluser = usersdata.users;
     console.log(this.alluser);
   }
    }, err => {
      console.log(err);
    });
  }

  getallcomment() {
    this.dataService.getallcomment().subscribe(allcoment => {
        this.allcomment = allcoment;
        console.log(this.allcomment);
    }, err => {
      console.log(err);
    });
  }

  showusercomp() {
    if (this.userscomp) {
      this.userscomp = false;

    } else {
      this.userscomp = true;
      this.commentcomp = false;

    }
  }
  showcommentcomp() {
    if (this.commentcomp) {
      this.commentcomp = false;

    } else {
      this.commentcomp = true;
      this.userscomp = false;

    }
  }
  close() {
    this.showpassword = false;
  }

  disactive(email: any) {

    const sessiontoken = sessionStorage.getItem('usrtoken');
    this.showpassword = true;
    this.data.email = email;
    this.data.token = sessiontoken;
    this.data.activation = false;
    this.activesend = true;
    return this.data;

  }
  active(email: any) {

    const sessiontoken = sessionStorage.getItem('usrtoken');
    this.showpassword = true;
    this.data.email = email;
    this.data.token = sessiontoken;
    this.data.activation = true;
    this.activesend = true;
    return this.data;

  }
  removeadmin(email: any) {

    const sessiontoken = sessionStorage.getItem('usrtoken');
    this.showpassword = true;
    this.data.email = email;
    this.data.token = sessiontoken;
    this.data.activation = false;
    this.adminsend = true;
    return this.data;

  }
  makeadmin(email: any) {

    const sessiontoken = sessionStorage.getItem('usrtoken');
    this.showpassword = true;
    this.data.email = email;
    this.data.token = sessiontoken;
    this.data.activation = true;
    this.adminsend = true;
    return this.data;

  }



  disactiveComment(id: any) {

    const sessiontoken = sessionStorage.getItem('usrtoken');
    this.showpassword = true;
    this.datacomment.id = id;
    this.datacomment.token = sessiontoken;
    this.datacomment.activation = 1;
    this.commentsend = true;
    return this.datacomment;

  }
  activeComment(id: any) {

    const sessiontoken = sessionStorage.getItem('usrtoken');
    this.showpassword = true;
    this.datacomment.id = id;
    this.datacomment.token = sessiontoken;
    this.datacomment.activation = 0;
    this.commentsend = true;
    return this.data;

  }



  submit() {
    this.data.password = this.password;
    this.datacomment.password = this.password;
    const sessiontoken = sessionStorage.getItem('usrtoken');
    if (this.activesend) {
      this.dataService.activation(this.data).subscribe(useractive => {
        if (useractive.msg === 'password not valid' || useractive.msg === 'Email Not Found') {
          this.errmsg = useractive.msg;
          this.erralert = true;
        } else {
          this.password = '';
          this.erralert = false;
          this.close();
          this.userscomp = true;
          console.log(useractive.msg);
          this.getall(sessiontoken);
        }
      }, err => {
        console.log(err);
      });
    } else  if (this.adminsend) {
      this.dataService.makeadmin(this.data).subscribe(useractive => {
        if (useractive.msg === 'password not valid' || useractive.msg === 'Email Not Found') {
          this.errmsg = useractive.msg;
          this.erralert = true;
        } else {
          this.password = '';
          this.erralert = false;
          this.close();
          this.userscomp = true;
          console.log(useractive.msg);
          this.getall(sessiontoken);
        }
      }, err => {
        console.log(err);
      });
    } else if (this.commentsend) {
      this.dataService.activecomment(this.datacomment).subscribe(commentactive => {
        if (commentactive.msg === 'password not valid' || commentactive.msg === 'Email Not Found') {
          this.errmsg = commentactive.msg;
          this.erralert = true;
        } else {
          this.password = '';
          this.erralert = false;
          this.close();
          this.commentcomp = true;
          console.log(commentactive.msg);
          this.getallcomment();
        }
        console.log(commentactive);
      }, err => {
        console.log(err);
      });
    }


  }

  checkuser(id: any) {
    const sessionid = sessionStorage.getItem('id');
    if (sessionid === id) {
      return true;
    } else {
      return false;
    }
  }

}
