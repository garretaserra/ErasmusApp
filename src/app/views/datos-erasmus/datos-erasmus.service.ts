import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {Post} from '../../models/Posts/post';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage';
import {UserErasmus} from '../../models/User/userErasmus';

@Injectable({
  providedIn: 'root'
})
export class DatosErasmusService {

  DATOS_SERVER_ADDRESS = environment.apiUri;
  homeSubject = new BehaviorSubject(false);
  constructor(private httpClient: HttpClient, private storage: Storage) {}

  sendInformation(userId:string, userErasmus: UserErasmus) {
    return this.httpClient.put<any>(`${this.DATOS_SERVER_ADDRESS}/user/erasmusInfo/` + `${userId}`, {info:userErasmus}, {observe: 'response'});
  }

  getUniversities() {
    return this.httpClient.get<any>(`${this.DATOS_SERVER_ADDRESS}/university/all`);
  }
}
