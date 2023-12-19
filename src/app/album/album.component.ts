import { Component } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  list = [
    {
        number: '1',
        name: 'My love',
        image: 'assets/images/04.jpg',
        description: 'Song description'
    },
    {
        number: '2',
        name: 'East River Dale',
        image: 'assets/images/05.jpg',
        description: 'Song description'
    },
    {
        number: '3',
        name: 'Never Coming Home',
        image: 'assets/images/06.jpg',
        description: 'Song description'
    },
    {
        number: '4',
        name: 'Bye Bye Baby',
        image: 'assets/images/07.jpg',
        description: 'Song description'
    },
    {
        number: '5',
        name: 'Chicken Run',
        image: 'assets/images/08.jpg',
        description: 'Song description'
    },
    {
        number: '6',
        name: 'End Of The Road',
        image: 'assets/images/09.jpg',
        description: 'Song description'
    },
    {
        number: '7',
        name: 'Jail Aint Good',
        image: 'assets/images/11.jpg',
        description: 'Song description'
    },
    {
        number: '8',
        name: 'Fix My Bike',
        image: 'assets/images/13.jpg',
        description: 'Song description'
    },
    {
        number: '9',
        name: 'Journey To the End',
        image: 'assets/images/14.jpg',
        description: 'Song description'
    }
  ];
}
