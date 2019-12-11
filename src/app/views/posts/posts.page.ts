import { Component, OnInit } from '@angular/core';
import {UserService} from '../../models/User/user.service';
import {Post} from '../../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  posts: Post[];
  constructor(private userService: UserService) { }
  ngOnInit() {
    this.posts = this.userService.sendPosts();
  }

}
