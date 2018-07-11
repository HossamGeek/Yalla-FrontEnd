import {Component, ElementRef, OnInit} from '@angular/core';
import {DataServicesService} from '../../services/data-services.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-storecontent',
  templateUrl: './storecontent.component.html',
  styleUrls: ['./storecontent.component.css']
})
export class StorecontentComponent implements OnInit {
  selectedfile: File = null;
  imglength = [];
  imgshow = '';
  imgselected = new Array;
  storecontent = {
    storeid: '',
    categoryid: '',
    img: '',
    name: '',
    describe: ''
  };

  sessionstore = '';
  constructor(public  dataService: DataServicesService, private el: ElementRef, private router: Router) {
    this.sessionstore =  sessionStorage.getItem('value');
    if (this.sessionstore != 'store') {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {
  }
  upload({value, valid}, e) {
  //  console.log(value);
    // this.selectedfile = e.target.files[0];
//    console.log(e.target[2].files[0]);
/*
this.storecontent.storeid = sessionStorage.getItem('id');
this.storecontent.categoryid = sessionStorage.getItem('category');
this.storecontent.img = e.target[2].files[0] ;
this.storecontent.name = value.name;
this.storecontent.describe = value.describe;
*/

/*
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
    let fileCount: number = inputEl.files.length;
*/

//    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
    this.selectedfile = <File>  e.target[2].files;
    this.imglength.push( this.selectedfile);
    const formData = new FormData();


    for (let x = 0; x <= this.imglength[0].length; x++ ) {
      formData.append('photo', this.selectedfile[x]);
    }

    // a file was selected
//    formData.append('photo', this.selectedfile);
    formData.append('storeid', sessionStorage.getItem('id'));
    formData.append('categoryid', sessionStorage.getItem('category'));
    formData.append('name', value.name);
    formData.append('describe', value.describe);
  /*  this.imgselected = window.URL.createObjectURL(this.selectedfile);
    console.log(this.imgselected);
*/
  /*  console.log(this.imglength[0].length);
*/



    this.dataService.saveContent(formData).subscribe(allstore => {
    console.log('api sent !');
    console.log(allstore);
      this.router.navigate(['/home']);
    }, err => {
      console.log('api not sent !');

    });

  }
  uploadefile(event) {
    this.imgselected = event.target.files;

/*
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (event:any) => {
        this.imgselected = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
*/
    this.imgshow = window.URL.createObjectURL(this.imgselected[0]);
    console.log(this.imgshow);
    console.log(this.imgselected[0]);
    }
/*
    this.selectedfile = event.target.files[0];
    this.imgselected = window.URL.createObjectURL(this.selectedfile);
    console.log(this.selectedfile);
    console.log(this.imgselected);
*/

}
