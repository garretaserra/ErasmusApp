import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {Post} from '../../models/Posts/post';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  COMMENTS_SERVER_ADDRESS = environment.apiUri;
  homeSubject = new BehaviorSubject(false);
  constructor(private httpClient: HttpClient, private storage: Storage) {}

  getPost(idPost: string) {
    return this.httpClient.get<any>(`${this.COMMENTS_SERVER_ADDRESS}/post/` + `${idPost}`);
  }
}
