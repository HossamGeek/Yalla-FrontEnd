import { ActivatedRoute, Router } from '@angular/router';
import { DataServicesService } from './../services/data-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {

  newComment: any;
  oneCollection: any;
  collectionID: any;
  url = 'https://yalla-mansoura.herokuapp.com';
  CommentData = {storeid : '',
  userid : '' ,
  contentid : '', content : ''
  };
  storeid: string;
  comment: any;
  user: string;
  token: string;
  contentid: any;
  username: any;
  userimg: any;
  constructor(public  dataService: DataServicesService,
  public route: ActivatedRoute, public router: Router) {

  }

  ngOnInit() {
    this.user = sessionStorage.getItem('id');
    this.token = sessionStorage.getItem('usrtoken');
    this.route.params.subscribe(params => {
    this.contentid = params.id;

    });
    this.getCurrentComment(this.contentid);

  }
  getCurrentComment(id) {
      console.log('heeeeeeeeeeeee' + id);
      this.dataService.getCommentData(id).subscribe(commentData => {
      console.log(commentData);
      this.comment = commentData.feedback[0].content;
      this.storeid = commentData.feedback[0].storeid;
      this.username = commentData.feedback[0].userid.username;
      this.userimg = commentData.feedback[0].userid.img;
      console.log(this.comment);
    }, err => {
      console.log('error');
      console.log(err);
    });
  }
  addComment({value, valid}, e) {
    console.log(value.comment);
    this.CommentData.storeid = this.storeid;
    this.CommentData.userid = sessionStorage.getItem('id');
    this.CommentData.contentid = this.contentid;
    this.CommentData.content = value.comment;

    this.dataService.editComment(this.contentid, this.CommentData).subscribe(newComment => {


      console.log('API Sent');

    }, err => {
      console.log('API  not Sent');
      console.log(err);
    });
//    this.router.navigate(['/getstore' ,  this.CommentData.storeid]);

        this.router.navigate(['/home']);
  }
}
