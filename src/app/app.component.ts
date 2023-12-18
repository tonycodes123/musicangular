import { Component } from '@angular/core';
import { SideNavComponent } from './side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
handleNavStatus() {
this.sideNavStatus = !this.sideNavStatus;
}
  title = 'musicangular';
  sideNavStatus: boolean = true;
}
