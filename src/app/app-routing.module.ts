import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongListComponent } from './song-list/song-list.component';
import { AddMusicComponent } from './add-music/add-music.component';

const routes: Routes = [
  {path:'songlist', component: SongListComponent},
  {path:'addmusic', component: AddMusicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
