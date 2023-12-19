import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongListComponent } from './song-list/song-list.component';
import { AddMusicComponent } from './add-music/add-music.component';
import { HomeComponent } from './homecomponent/homecomponent.component';
import { AlbumComponent } from './album/album.component';
import { ArtistsComponent } from './artists/artists.component';


const routes: Routes = [
  {path:'', component: SongListComponent},
  {path:'addmusic', component: AddMusicComponent},
  {path:'albumpage', component:AlbumComponent},
  {path:'homecomp', component:HomeComponent},
  {path:'artistpage', component:ArtistsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
