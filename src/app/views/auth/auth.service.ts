import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from "rxjs";
import { Storage } from "@ionic/storage";
import { User } from "./user";
import { AuthResponse } from "./auth-response";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_SERVER_ADDRESS: string = 'http://localhost:3000'
  authSubject = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient, private storage: Storage) {}

  register(user: User){
    console.log(user);
  }
}
