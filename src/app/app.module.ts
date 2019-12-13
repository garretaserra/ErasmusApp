import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {GoogleMaps} from '@ionic-native/google-maps';
import {AuthModule} from './views/auth/auth.module';
import {HomePageModule} from './views/home/home.module';
import {PipesModule} from './pipes/pipes.module';
import {ChatService} from './services/chat.service';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NativeStorage} from "@ionic-native/native-storage/ngx";
import {StorageComponent} from "./storage/storage.component";
import {AuthInterceptorService} from "./services/auth-interceptor.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AuthModule,
    HomePageModule,
    PipesModule],
    providers: [
        StatusBar,
        SplashScreen,
        ChatService,
        NativeStorage,
        StorageComponent,
        GoogleMaps,
        {
            provide: RouteReuseStrategy,
            useClass: IonicRouteStrategy
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
