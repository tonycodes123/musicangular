import { Injectable } from '@angular/core';
import { Albumlist } from 'src/app/albumlist';
@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor() { }
  getall() : Albumlist[]{
return[
  {
    albumname:"rock music",
    albumimageurl:"assets/R.jpg",
    albumid:1,
    favourite:false,
    desc:"rock music ka description moye moye  moye moye  moye moye  moye moye  moye moye  moye moye  moye moye "
  },
  {
    albumname:"ukulele music",
    albumimageurl:"assets/ukulele.jpg",
    albumid:2,
    favourite:true,
    desc:"ukulele music ka description moye moye  moye moye  moye moye  moye moye  moye moye  moye moye  moye moye "
  },
  {
    albumname:"Retro music",
    albumimageurl:"assets/OIP.jpg",
    albumid:3,
    favourite:false,
    desc:"Retro music ka description moye moye  moye moye  moye moye  moye moye  moye moye  moye moye  moye moye "
  },
  // {
  //   albumname:"Love music",
  //   albumimageurl:"assets/flowers-roses-macro-53141.jpg",
  //   albumid:4,
  //   favourite:false,
  //   desc:"Love music ka description moye moye  moye moye  moye moye  moye moye  moye moye  moye moye  moye moye "
  // },
  {
    albumname:"Guitar music",
    albumimageurl:"assets/guitar.jpg",
    albumid:4,
    favourite:false,
    desc:"Guitar music ka description moye moye  moye moye  moye moye  moye moye  moye moye  moye moye  moye moye "
  },
];
  }
}