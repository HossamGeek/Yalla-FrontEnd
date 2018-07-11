import {ActivatedRoute, Router} from '@angular/router';
import { DataServicesService } from './../services/data-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-content',
  templateUrl: './edit-content.component.html',
  styleUrls: ['./edit-content.component.css']
})
export class EditContentComponent implements OnInit {

  store: any;
  token: any;
  imgshow: any;
  imgselected: any;
  selectedfile: any;
  imglength: any;
  content: any;
  name: '';
  describe: '';
  selectedFile: any;
  category: '';
  constructor(public  dataService: DataServicesService,
  public route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.store = sessionStorage.getItem('id');
    this.token = sessionStorage.getItem('storetoken');
    this.route.params.subscribe(params => {
    this.content = params.id;
      this.getCurrentContent(params.id);
    });

  }
  getCurrentContent(id) {
    console.log('heeeeeeeeeeeee' + id);

      this.dataService.getContentData(id).subscribe(contentData => {
      console.log(contentData);
      this.name = contentData.contents[0].name;
      this.describe = contentData.contents[0].description;
      this.category = contentData.contents[0].category;
      console.log(this.name);
      console.log(this.describe);
    }, err => {
      console.log("error")
      console.log(err);
    });
  }

  updateContent({value, valid}, e) {
      this.selectedfile = <File>  e.target[2].files;
      // if (this.selectedfile ) {
      // this.imglength.push( this.selectedfile);
      // }
      const formData = new FormData();


      for (let x = 0; x <= this.selectedfile.length; x++ ) {
        formData.append('photo', this.selectedfile[x]);
      }
      formData.append('storeid', sessionStorage.getItem('id'));
      formData.append('categoryid', sessionStorage.getItem('category'));
      formData.append('name', value.name);
      formData.append('describe', value.describe);
      formData.append('token', this.token);


      this.dataService.editStoreContent(this.content, formData).subscribe(allstore => {
        this.router.navigate(['/home']);
      console.log('api sent !');

      console.log(allstore);
      }, err => {
        console.log('api not sent !');

      });
    this.router.navigate(['/home']);

    }
    uploadefile(event) {
      this.imgselected = event.target.files;
      this.imgshow = window.URL.createObjectURL(this.imgselected[0]);
      console.log(this.imgshow);
      console.log(this.imgselected[0]);
      }

}
