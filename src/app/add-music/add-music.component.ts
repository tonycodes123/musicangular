import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.css']
})
export class AddMusicComponent implements OnInit {
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.postmethod();
  }
  public getjsonval:any;
  public postjsonval:any;
  public postmethod() {
  this.http.get('https://localhost:7050/api/songs').subscribe((data)=>console.log(data));
}

}
