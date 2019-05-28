import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'home', loadChildren: './core/home/home.module#HomePageModule' },
  { path: 'player-page', loadChildren: './core/player-page/player-page.module#PlayerPagePageModule' },
  { path: 'core', loadChildren: './core/core.module#CorePageModule' },
  { path: 'main', loadChildren: './core/main/main.module#MainPageModule' },
  { path: 'playlist', loadChildren: './core/playlist/playlist.module#PlaylistPageModule' },
  { path: 'player', loadChildren: './core/player/player.module#PlayerModule' },
  { path: 'ion-scroll-picker', loadChildren: './core/ion-scroll-picker/ion-scroll-picker.module#IonScrollPickerPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
