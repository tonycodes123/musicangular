import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.css'],
})

export class SideNavComponent implements OnInit {
// handleClick(_t4: HTMLUListElement) {
// this.sideNavStatus=!this.sideNavStatus;
// }
    @Input() sideNavStatus: boolean = true;
    list = [
        {
            number: '1',
            name: 'home',
            icon: 'fa-solid fa-house',
        },
        {
            number: '2',
            name: 'albums',
            icon: 'fa-solid fa-record-vinyl',
        },
        {
            number: '3',
            name: 'artists',
            icon: 'fa-solid fa-music',
        }

];
//sideNavStatus: any; (should add this?)

    constructor() {}

    ngOnInit(): void {}

}
