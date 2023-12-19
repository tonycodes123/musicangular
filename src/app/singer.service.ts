import { Injectable } from '@angular/core';
import { singerlist } from './singerlist';
@Injectable({
  providedIn: 'root'
})
export class SingerService {

  constructor() { }
  getsingerlist():singerlist[]{
return[
{
singerid:1,
singername:"modiji",
singerimageurl:"assets/modi.jpg"
},
{
  singerid:2,
  singername:"billi bahi",
  singerimageurl:"assets/billi.jpg"
  },
  {
    singerid:3,
    singername:"neha akka",
    singerimageurl:"assets/neha.jpg"
    },
    {
      singerid:4,
      singername:"neha akka",
      singerimageurl:"assets/neha.jpg"
      },
]
  }
}