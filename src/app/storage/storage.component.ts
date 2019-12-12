import { Component, OnInit } from '@angular/core';
import {NativeStorage} from "@ionic-native/native-storage/ngx";
import {Platform} from "@ionic/angular";

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss'],
})
export class StorageComponent implements OnInit {

  constructor(private nativeStorage: NativeStorage,
              public platform: Platform) {}

  ngOnInit() {}

  saveToken(token){
    if(this.platform.is('desktop')){
      localStorage.setItem('token', token);
    }
    else{
      this.nativeStorage.setItem('token', token)
    }
  }

  getToken(){
    if(this.platform.is('desktop')) {
      return localStorage.getItem('token');
    }
    else{
      return this.nativeStorage.getItem('token');
    }
  }

  saveUser(user){
    if(this.platform.is('desktop')) {
      localStorage.setItem('user', user);
    }
    else{
      this.nativeStorage.setItem('user', user)
    }
  }

  getUser(){
    if(this.platform.is('desktop')) {
      return localStorage.getItem('user');
    }
    else{
      this.nativeStorage.getItem('token');
    }
  }

  clearStorage(){
    if(this.platform.is('desktop')) {
      return localStorage.clear();
    }
    else{
      this.nativeStorage.clear();
    }
  }

}
