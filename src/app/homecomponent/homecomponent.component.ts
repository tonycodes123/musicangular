import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { SingerService } from '../singer.service';
import { Albumlist } from '../albumlist';
import { singerlist } from '../singerlist';
@Component({
  selector: 'app-home',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomeComponent implements OnInit{
  albums:Albumlist[]=[];
  singers:singerlist[]=[];
  constructor(private albumservice:AlbumService, private singerservice:SingerService){}
  ngOnInit():void{
    this.albums=this.albumservice.getall();
    this.singers=this.singerservice.getsingerlist();
  }

 
}