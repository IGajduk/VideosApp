import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {Vibration} from '@ionic-native/vibration/ngx';
import { WheelSelector } from '@ionic-native/wheel-selector/ngx';
import { IonicStorageModule } from '@ionic/storage';
import {NgxYoutubePlayerModule} from 'ngx-youtube-player';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    NgxYoutubePlayerModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    YoutubeVideoPlayer,
    Vibration,
    WheelSelector,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
