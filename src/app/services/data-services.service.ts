import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataServicesService {
   url = 'https://yalla-mansoura.herokuapp.com';


  constructor(public  http: Http) {

  }

  getStores() {
    const headers = new  Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With , Content-Type, Origin, ' +
      'Authorization, Accept, Client-Security-Token, Accept-Encoding');

    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.url + '/stores/getall', options).pipe(map(res => res.json()));
  }
  getNewCollection(id: string) {
    const headers = new  Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With , Content-Type, Origin, ' +
      'Authorization, Accept, Client-Security-Token, Accept-Encoding');
    headers.append('category', id );
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.url + '/stores/newcollection', options).pipe(map(res => res.json()));
     }
  newYalla(id: string) {
    const headers = new  Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With , Content-Type, Origin, ' +
      'Authorization, Accept, Client-Security-Token, Accept-Encoding');
    headers.append('category', id );
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.url + '/stores/newyalla', options).pipe(map(res => res.json()));

  }
  getSession() {
    const headers = new  Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With , Content-Type, Origin, ' +
      'Authorization, Accept, Client-Security-Token, Accept-Encoding');
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.url + '/users/getsession', options).pipe(map(res => res.json()));

  }
  //////////////////*/////////////

  saveContent(data: any) {
    return this.http.post(this.url + '/stores/addcontent', data ).pipe(map(res => res.json()));
  }
  saveComment(data: any) {
    console.log(data);
    return this.http.post(this.url + '/stores/addfeedback', data ).pipe(map(res => res.json()));
  }


  //////////////////////////*//////////////////////
  getAllFeedback(id: any) {
    const headers = new  Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With , Content-Type, Origin, ' +
      'Authorization, Accept, Client-Security-Token, Accept-Encoding');
    const options = new RequestOptions({ headers: headers });
    // console.log(id);
    return this.http.get(this.url + '/stores/getfeedback/' + id , options).pipe(map(res => res.json()));
  }
  getOneCollection(id: any) {
    const headers = new  Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With , Content-Type, Origin, ' +
      'Authorization, Accept, Client-Security-Token, Accept-Encoding');
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.url +'/stores/onecollection/' + id , options).pipe(map(res => res.json()));
  }
  getAllStore() {
    const headers = new  Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With , Content-Type, Origin, ' +
      'Authorization, Accept, Client-Security-Token, Accept-Encoding');

    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.url +'/stores/getall', options).pipe(map(res => res.json()));
  }


  getCoffee() {
    const headers = new  Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With , Content-Type, Origin, ' +
      'Authorization, Accept, Client-Security-Token, Accept-Encoding');

    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.url +'/stores/getstoreofcategory/1', options).pipe(map(res => res.json()));
  }


  getRestaurant() {
    const headers = new  Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With , Content-Type, Origin, ' +
      'Authorization, Accept, Client-Security-Token, Accept-Encoding');

    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.url +'/stores/getstoreofcategory/2', options).pipe(map(res => res.json()));
  }

  getStore() {
    const headers = new  Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With , Content-Type, Origin, ' +
      'Authorization, Accept, Client-Security-Token, Accept-Encoding');
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.url +'/stores/getstoreofcategory/3', options).pipe(map(res => res.json()));
  }

  getOneStore(id: any) {
    const headers = new  Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With , Content-Type, Origin, ' +
      'Authorization, Accept, Client-Security-Token, Accept-Encoding');
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.url +'/stores/getonlystore/' + id, options).pipe(map(res => res.json()));
  }
  getGym() {
    const headers = new  Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With , Content-Type, Origin, ' +
      'Authorization, Accept, Client-Security-Token, Accept-Encoding');
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.url +'/stores/getstoreofcategory/4', options).pipe(map(res => res.json()));
  }
  getClub() {
    const headers = new  Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With , Content-Type, Origin, ' +
      'Authorization, Accept, Client-Security-Token, Accept-Encoding');
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.url +'/stores/getstoreofcategory/5', options).pipe(map(res => res.json()));
  }
  ////////////////////*///////////
  loginuser(user: any) {
    return this.http.post(this.url + '/users/login', user).pipe(map(res => res.json()));
  }
  loginstore(store: any) {
    return this.http.post(this.url + '/stores/login', store).pipe(map(res => res.json()));
  }
  getrate(id: any) {
    const headers = new  Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With , Content-Type, Origin, ' +
      'Authorization, Accept, Client-Security-Token, Accept-Encoding');
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.url +'/stores/getrate/' + id , options).pipe(map(res => res.json()));
  }

  like(id: any, data: any ) {
    return this.http.put(this.url +'/stores/addlike/' + id , data ).pipe(map(res => {
      return res.json();
    }));
  }
  getcontent(id: any) {
    const headers = new  Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With , Content-Type, Origin, ' +
      'Authorization, Accept, Client-Security-Token, Accept-Encoding');
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.url +'/stores/getcontent/' + id , options).pipe(map(res => res.json()));
  }

  gettoprate() {
    const headers = new  Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With , Content-Type, Origin, ' +
      'Authorization, Accept, Client-Security-Token, Accept-Encoding');
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.url +'/stores/getrates/'  , options).pipe(map(res => res.json()));
  }
  getstoreratedata(id: any) {
    const headers = new  Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With , Content-Type, Origin, ' +
      'Authorization, Accept, Client-Security-Token, Accept-Encoding');
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.url +'/stores/getstoredata/' + id  , options).pipe(map(res => res.json()));
  }
  getUser(id) {
    const headers = new  Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With , Content-Type, Origin, ' +
      'Authorization, Accept, Client-Security-Token, Accept-Encoding');
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.url +'/users/getuser/' + id , options).pipe(map(res => res.json()));
  }
  getNewUsers() {
    const headers = new  Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With , Content-Type, Origin, ' +
      'Authorization, Accept, Client-Security-Token, Accept-Encoding');
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.url +'/users/newusers' , options).pipe(map(res => res.json()));
  }
  editUser(id: any, data: any ) {
    console.log(data);
    return this.http.put(this.url +'/users/edit/' + id, data).pipe(map(res => res.json()));
  }
  saveUser(data: any) {
    console.log(data);
    return this.http.post(this.url + '/users/register', data ).pipe(map(res => res.json()));

  }
  saveStore(data: any) {
    console.log(data);
    return this.http.post(this.url + '/stores/register', data ).pipe(map(res => res.json()));

  }
  getLocation(data: any) {
    return this.http.post(this.url + '/stores/getlocation', data ).pipe(map(res => res.json()));
  }
  getsocail(id: any){
    const headers = new  Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With , Content-Type, Origin, ' +
      'Authorization, Accept, Client-Security-Token, Accept-Encoding');
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.url +'/stores/getsocialmedia/' + id , options).pipe(map(res => res.json()));
  }
  getcontentstore(id: any){
    const headers = new  Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With , Content-Type, Origin, ' +
      'Authorization, Accept, Client-Security-Token, Accept-Encoding');
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.url +'/stores/getcontentstore/' + id , options).pipe(map(res => res.json()));
  }
  addrate(data: any) {
    return this.http.post(this.url + '/stores/addrate', data ).pipe(map(res => res.json()));
  }
  ////////////////////////* * ////////////////////

  getStoreData(id) {
    const headers = new  Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With , Content-Type, Origin, ' +
      'Authorization, Accept, Client-Security-Token, Accept-Encoding');
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.url +'/stores/getstoredata/' + id , options).pipe(map(res => res.json()));
  }
  getContentData(id) {
    const headers = new  Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With , Content-Type, Origin, ' +
      'Authorization, Accept, Client-Security-Token, Accept-Encoding');
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.url +'/stores/getContent/' + id , options).pipe(map(res => res.json()));
  }
  getCommentData(id) {
    const headers = new  Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With , Content-Type, Origin, ' +
      'Authorization, Accept, Client-Security-Token, Accept-Encoding');
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.url +'/stores/getComment/' + id , options).pipe(map(res => res.json()));
  }
  editStore(id: any, data: any ) {
    console.log(data);
    return this.http.put(this.url +'/stores/editstore/' + id, data).pipe(map(res => res.json()));
  }
  editStoreContent(id: any, data: any ) {
    console.log(data);
    return this.http.put(this.url +'/stores/editContent/' + id, data).pipe(map(res => res.json()));
  }
  editComment(id: any, data: any ) {
    console.log(data);
    return this.http.put(this.url +'/stores/editComment/' + id, data).pipe(map(res => res.json()));
  }
  //////////////////////*Soso*///////////////////////////
  getall(Access: any) {
    const headers = new  Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With , Content-Type, Origin, ' +
      'Authorization, Accept, Client-Security-Token, Accept-Encoding');
    headers.append('Authorization', Access);
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.url +'/users/all', options).pipe(map(res => res.json()));
  }

  getallcomment() {
    const headers = new  Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With , Content-Type, Origin, ' +
      'Authorization, Accept, Client-Security-Token, Accept-Encoding');
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.url +'/stores/getallfeedback', options).pipe(map(res => res.json()));
  }
  activation(data: any) {
    return this.http.put(this.url + '/users/admin/activation', data ).pipe(map(res => res.json()));
  }
  makeadmin(data: any) {
    return this.http.put(this.url + '/users/admin/makeadmin', data ).pipe(map(res => res.json()));
  }
  activecomment(data: any) {
    return this.http.put(this.url + '/stores/admin/activetioncomment', data ).pipe(map(res => res.json()));
  }
}
