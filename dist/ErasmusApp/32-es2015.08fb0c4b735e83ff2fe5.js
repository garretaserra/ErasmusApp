(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"2clK":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class i{}var o=u("pMnS"),e=u("oBZk"),r=u("ZZ/e"),s=u("SVse"),b=u("mrSG"),a=u("Z5J9"),c=u("n0tf");class p{constructor(l,n,u,t,i){this.userService=l,this.postService=n,this.route=u,this.router=t,this.menuCtrl=i}ngOnInit(){return b.b(this,void 0,void 0,(function*(){this.load()}))}load(){return b.b(this,void 0,void 0,(function*(){this._id=this.route.snapshot.paramMap.get("id"),yield this.postService.getPosts(this._id).subscribe(l=>{const n=l;console.log(l),this.posts=n.posts},l=>{console.log("error")})}))}openMenu(){return b.b(this,void 0,void 0,(function*(){yield this.menuCtrl.open()}))}closeMenu(){return b.b(this,void 0,void 0,(function*(){yield this.menuCtrl.close()}))}openMessagePage(){return b.b(this,void 0,void 0,(function*(){yield this.router.navigateByUrl("/message")}))}openProfilePage(){return b.b(this,void 0,void 0,(function*(){yield this.router.navigateByUrl("/profile")}))}openFriendsPage(){return b.b(this,void 0,void 0,(function*(){yield this.router.navigateByUrl("/friends")}))}openGlobePage(){return b.b(this,void 0,void 0,(function*(){yield this.router.navigateByUrl("/globe")}))}openSettingPage(){return b.b(this,void 0,void 0,(function*(){yield this.router.navigateByUrl("/login")}))}openHomePage(){return b.b(this,void 0,void 0,(function*(){yield this.router.navigateByUrl("/home")}))}}var d=u("iInd"),v=t.Bb({encapsulation:0,styles:[[""]],data:{}});function h(l){return t.Yb(0,[(l()(),t.Db(0,0,null,null,4,"ion-card",[["class","vertical-margin"]],null,null,null,e.R,e.g)),t.Cb(1,49152,null,0,r.n,[t.j,t.p,t.G],null,null),(l()(),t.Db(2,0,null,0,2,"ion-toolbar",[],null,null,null,e.nb,e.G)),t.Cb(3,49152,null,0,r.Db,[t.j,t.p,t.G],null,null),(l()(),t.Wb(4,0,["",""]))],null,(function(l,n){l(n,4,0,n.context.$implicit.message)}))}function g(l){return t.Yb(0,[(l()(),t.Db(0,0,null,null,17,"ion-app",[],null,null,null,e.H,e.a)),t.Cb(1,49152,null,0,r.f,[t.j,t.p,t.G],null,null),(l()(),t.Db(2,0,null,0,15,"div",[["class","ion-page"],["main",""]],null,null,null,null,null)),(l()(),t.Db(3,0,null,null,10,"ion-header",[],null,null,null,e.Y,e.r)),t.Cb(4,49152,null,0,r.C,[t.j,t.p,t.G],null,null),(l()(),t.Db(5,0,null,0,8,"ion-toolbar",[],null,null,null,e.nb,e.G)),t.Cb(6,49152,null,0,r.Db,[t.j,t.p,t.G],null,null),(l()(),t.Db(7,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,e.M,e.f)),t.Cb(8,49152,null,0,r.m,[t.j,t.p,t.G],null,null),(l()(),t.Db(9,0,null,0,1,"ion-menu-button",[],null,null,null,e.fb,e.z)),t.Cb(10,49152,null,0,r.S,[t.j,t.p,t.G],null,null),(l()(),t.Db(11,0,null,0,2,"ion-title",[],null,null,null,e.mb,e.F)),t.Cb(12,49152,null,0,r.Bb,[t.j,t.p,t.G],null,null),(l()(),t.Wb(-1,0,["Posts"])),(l()(),t.Db(14,0,null,null,3,"ion-content",[],null,null,null,e.V,e.o)),t.Cb(15,49152,null,0,r.v,[t.j,t.p,t.G],null,null),(l()(),t.sb(16777216,null,0,1,null,h)),t.Cb(17,278528,null,0,s.i,[t.Y,t.U,t.y],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,17,0,n.component.posts)}),null)}function f(l){return t.Yb(0,[(l()(),t.Db(0,0,null,null,1,"app-posts",[],null,null,null,g,v)),t.Cb(1,114688,null,0,p,[a.a,c.a,d.a,d.m,r.Hb],null,null)],(function(l,n){l(n,1,0)}),null)}var m=t.zb("app-posts",p,f,{},{},[]),y=u("s7LF");class C{}u.d(n,"PostsPageModuleNgFactory",(function(){return N}));var N=t.Ab(i,[],(function(l){return t.Mb([t.Nb(512,t.m,t.lb,[[8,[o.a,m]],[3,t.m],t.E]),t.Nb(4608,s.l,s.k,[t.A,[2,s.w]]),t.Nb(4608,y.u,y.u,[]),t.Nb(4608,r.b,r.b,[t.G,t.g]),t.Nb(4608,r.Ib,r.Ib,[r.b,t.m,t.x]),t.Nb(4608,r.Lb,r.Lb,[r.b,t.m,t.x]),t.Nb(1073742336,s.b,s.b,[]),t.Nb(1073742336,y.t,y.t,[]),t.Nb(1073742336,y.i,y.i,[]),t.Nb(1073742336,r.Fb,r.Fb,[]),t.Nb(1073742336,d.p,d.p,[[2,d.u],[2,d.m]]),t.Nb(1073742336,C,C,[]),t.Nb(1073742336,i,i,[]),t.Nb(1024,d.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);