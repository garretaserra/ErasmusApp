import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./views/home/home.module').then(m => m.HomePageModule)},
  {
    path: 'register',
    loadChildren: () => import('./views/auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./views/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./views/message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./views/profiles/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'friends',
    loadChildren: () => import('./views/friends/friends.module').then( m => m.FriendsPageModule)
  },
  {
    path: 'globe',
    loadChildren: () => import('./views/globe/globe.module').then( m => m.GlobePageModule)
  },
  {
    path: 'geolocation',
    loadChildren: () => import('./geolocation/geolocation.module').then( m => m.GeolocationPageModule)
  },
  {
    path: 'other-profile/:id',
    loadChildren: () => import('./views/profiles/other-profile/other-profile.module').then( m => m.OtherProfilePageModule)
  },
  {
    path: 'posts/:id',
    loadChildren: () => import('./views/post/posts/posts.module').then(m => m.PostsPageModule)
  },
  {
    path: 'followers/:id',
    loadChildren: () => import('./views/follower/followers/followers.module').then(m => m.FollowersPageModule)
  },
  {
    path: 'following/:id',
    loadChildren: () => import('./views/followings/following/following.module').then(m => m.FollowingPageModule)
  },
  {
    path: 'front',
    loadChildren: () => import('./views/front/front.module').then( m => m.FrontPageModule)
  },
  {
    path: 'myposts',
    loadChildren: () => import('./views/post/myposts/myposts.module').then( m => m.MypostsPageModule)
  },
  {
    path: 'myfollowing',
    loadChildren: () => import('./views/followings/myfollowing/myfollowing.module').then( m => m.MyfollowingPageModule)
  },
  {
    path: 'myfollowers',
    loadChildren: () => import('./views/follower/myfollowers/myfollowers.module').then( m => m.MyfollowersPageModule)
  },
  {
    path: 'conversation/:name',
    loadChildren: () => import('./views/conversation/conversation.module').then( m => m.ConversationPageModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./views/event/event.module').then( m => m.EventPageModule)
  },
  {
    path: 'add-members-event',
    loadChildren: () => import('./views/add-members-event/add-members-event.module').then( m => m.AddMembersEventPageModule)
  },
  {
    path: 'profile-event/:id',
    loadChildren: () => import('./views/profile-event/profile-event.module').then( m => m.ProfileEventPageModule)
  },
  {
    path: 'erasmus-info',
    loadChildren: () => import('./views/datos-erasmus/datos-erasmus.module').then( m => m.DatosErasmusPageModule)
  },
  {
    path: 'comments/:id',
    loadChildren: () => import('./views/comments/comments.module').then( m => m.CommentsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
