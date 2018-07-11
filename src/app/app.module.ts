import { EditCommentComponent } from './edit-comment/edit-comment.component';
import { SettingStoreComponent } from './setting-store/setting-store.component';
// import { CommentComponent } from './Component/comment/comment.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
/*Form*/
import {FormsModule} from '@angular/forms';


/*services*/
import {DataServicesService} from './services/data-services.service';
import {HttpModule} from '@angular/http';

/*Routeing*/
import {Router, RouterModule, Routes} from '@angular/router';

/*toaster*/
/*import {ToastModule} from 'ng2-toastr';

import {ToastOptions} from 'ng2-toastr';*/



import { AppComponent } from './Component/root/app.component';
import { FilterPipe } from './Component/root/filter.pipe';
import { LoginComponent } from './Component/login/login/login.component';
import { LoginuserComponent } from './Component/login/loginuser/loginuser.component';

import { AllcoffeeComponent } from './Component/category/coffee/allcoffee/allcoffee.component';
import { OnecoffeeComponent } from './Component/category/coffee/onecoffee/onecoffee.component';
import { AllrestaurantComponent } from './Component/category/restaurant/allrestaurant/allrestaurant.component';
import { OnerestaurantComponent } from './Component/category/restaurant/onerestaurant/onerestaurant.component';
import { AllstoreComponent } from './Component/category/store/allstore/allstore.component';
import { OnestoreComponent } from './Component/category/store/onestore/onestore.component';
import { LoginstoreComponent } from './Component/login/loginstore/loginstore.component';
import { NavComponent } from './Component/nav/nav.component';
import { StorecontentComponent } from './Component/storecontent/storecontent.component';
import {GymComponent} from './Component/category/gym/gym.component';
import {ClubComponent} from './Component/category/club/club.component';
import { CommentComponent } from './Component/comment/comment.component';
import { SettingsComponent } from './Component/settings/settings.component';
import { AdminComponent } from './Component/admin/admin.component';
import { EditContentComponent } from './edit-content/edit-content.component';







/*router*/
const approutes: Routes = [
  { path: '', redirectTo: 'home' , pathMatch: 'full' },
  { path: 'admin/:id', component: AdminComponent},
  { path: 'home', component: AppComponent},
  { path: 'addComment/:id', component: CommentComponent},
  { path: 'oneCollection/:id', component: CommentComponent},
  { path: 'addcontent/:id', component: StorecontentComponent},
  { path: 'coffee/:id',      component: AllcoffeeComponent },
  { path: 'store/:id',      component: AllstoreComponent },
  { path: 'gym/:id',      component: GymComponent },
  { path: 'restaurant/:id',      component: AllrestaurantComponent },
  { path: 'club/:id',      component: ClubComponent },
  { path: 'getstore/:id',      component: OnestoreComponent },
  { path: 'setting/:id',      component: SettingsComponent },
  { path: 'settingStore/:id',      component: SettingStoreComponent },
  { path: 'oneCollectionEdit/:id',      component: EditContentComponent },
  { path: 'editComment/:id',      component: EditCommentComponent },
  { path: '**',      component: AppComponent },

  /*
  {path: 'register', component : RegisterComponent, children: [
      {path: 'user' , component : RegisteruserComponent},
      {path: 'store' , component : RegisterstoreComponent }
    ]}
*/
];


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    LoginComponent,
    LoginuserComponent,
    AllcoffeeComponent,
    OnecoffeeComponent,
    AllrestaurantComponent,
    OnerestaurantComponent,
    AllstoreComponent,
    OnestoreComponent,
    LoginstoreComponent,
    NavComponent,
    StorecontentComponent,
    GymComponent,
    ClubComponent,
    CommentComponent,
    SettingsComponent,
    AdminComponent,
    SettingStoreComponent,
    EditContentComponent,
    EditCommentComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(approutes),
    AgmCoreModule.forRoot({
     apiKey: 'AIzaSyARP_rGAxnm5haEe88zKlNfEl9TmPUbGfs'
   }),

  ],
  providers: [DataServicesService],
  bootstrap: [
    NavComponent,
  ]
})
export class AppModule { }
