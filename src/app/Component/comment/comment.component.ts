import { ActivatedRoute } from '@angular/router';
import {DataServicesService} from '../../services/data-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  commentBody = '';
  oneCollection: any[];
  // commentBody: {userid, contentid, storeid, content};
  storID: ' ';
  collectionID: ' ';
  allComments: any[];
  userlogined = false;
  storelogined = false;
  url = 'https://yalla-mansoura.herokuapp.com';

  CommentData = {storeid: '', userid: '', contentid: '', content: ''};

  constructor(public  dataService: DataServicesService,
              public route: ActivatedRoute) {

  this.checkhowlogin();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params.id);
      this.collectionID = params.id;
      this.getOneCollection(params.id);
      this.getAllComments(params.id);
      console.log(params.id);
    });
  }

  addComment(comment) {
    this.CommentData.storeid = this.oneCollection[0].storeid._id;
    this.CommentData.userid = sessionStorage.getItem('id');
    this.CommentData.contentid = this.collectionID;
    this.CommentData.content = comment;

    this.dataService.saveComment(this.CommentData).subscribe(addcomment => {
      console.log(addcomment);
      console.log('API Sent');
      this.getAllComments(this.collectionID);
      this.commentBody = ' ';
    }, err => {
      console.log('API  not Sent');
      console.log(err);
    });
  }

  getOneCollection(id) {
    this.dataService.getOneCollection(id).subscribe(oneCollection => {
      this.oneCollection = oneCollection;
      // console.log("one Collection")
      console.log(oneCollection);
    }, err => {
      console.log(err);
    });
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

  mysplit(string) {
    const arr = string.split(',');
    const len = arr.length;
    const arr2 = [];
    arr2.push(arr[0]);
    arr2.push(arr[len - 1]);
    const result = arr2.join(',');
    return result;
  }

  checkhowlogin() {
    const sessionvalue = sessionStorage.getItem('value');
    const sessionid = sessionStorage.getItem('id');
    if (sessionvalue === 'user') {
      this.userlogined = true;
    } else if (sessionvalue === 'store') {
      this.storelogined = true;
    }
  }

  showedit(id: any) {
    const sessionid = sessionStorage.getItem('id');

    if (sessionid) {
    if (sessionid.localeCompare(id) == 0) {
      return true;
    } else {
      return false;
    }} else {
      return false;
    }
  }


}
