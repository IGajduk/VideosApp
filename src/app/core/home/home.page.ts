import {Component, Renderer2, ViewChild} from '@angular/core';
import {NavController, ToastController} from '@ionic/angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {PlayerService} from '../../services/player.service';
import {Router} from '@angular/router';
import {PlayerComponent} from '../player/player.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  trustedVideoUrl: SafeResourceUrl;
  arrayOfLinks = [
      'https://www.youtube.com/embed/2MpUj-Aua48?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=2&autoplay=1',
      'https://www.youtube.com/embed/ZWrKakQOCYE?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=2&autoplay=1'];
  @ViewChild('playerComponent')playerComponent: PlayerComponent;

  dummyJson = {
    days: [
      { description: 'mon' },
      { description: 'tue' },
      { description: 'wed' },
      { description: 'thu' },
      { description: 'fri' }
    ],
    people: [
      { description: 'Mike' },
      { description: 'Max' },
      { description: 'Adam' },
      { description: 'Brandy' },
      { description: 'Ben' }
    ]
  };
  constructor(
              public navCtrl: NavController,
              private domSanitizer: DomSanitizer,
              private rend: Renderer2,
              private youtube: YoutubeVideoPlayer,
              private playerService: PlayerService,
              private router: Router
  ) {

  }


//   openPlayer(link) {
//     console.log(link);
//     // this.playerComponent.pushLinkInArr(link,);
//   }
//
// sendLink(link) {
//   console.log(link);
//   this.router.navigateByUrl(`/player-page?link=${link}`);
// }
//   opeVideo() {
//     this.youtube.openVideo('myvideoid');
//   }



  // createIframe() {
  //   for(let i of this.array_of_objects as any) {
  //     const iframe = this.rend.createElement('iframe');
  //     iframe.src = i.trustedVideoUrl;
  //     this.rend.appendChild(document.body, iframe);
  //   }
  // }

}
