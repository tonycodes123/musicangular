import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { SongListComponent } from './song-list/song-list.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AddMusicComponent } from './add-music/add-music.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './homecomponent/homecomponent.component';
import { AlbumComponent } from './album/album.component';
import { ArtistsComponent } from './artists/artists.component';


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    SongListComponent,
    HeaderComponent,
    SideNavComponent,
    AddMusicComponent,
    HomeComponent,
    AlbumComponent,
    ArtistsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
