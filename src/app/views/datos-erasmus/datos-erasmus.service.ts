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

  activity: Post[];

  constructor(private httpClient: HttpClient, private storage: Storage) {}

  sendInformation(userErasmus: UserErasmus) {
  }
}
