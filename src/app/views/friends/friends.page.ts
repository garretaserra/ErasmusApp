import { Component, OnInit } from '@angular/core';
import {FriendsService} from './friends.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {
  myInput: any;
  shouldShowCancel: any;
  albumes: any[] = [];
  textobuscar = '';
  constructor( private friendsService: FriendsService) {
  }
  ngOnInit() {
      this.friendsService.getMenuOpts().subscribe(albumes => {
          console.log(albumes);
          this.albumes = albumes;
      });

  }

  buscar(CustomEvent) {
    this.textobuscar = CustomEvent.detail.value;
  }
  onCancel($event: CustomEvent) {
  }
}
