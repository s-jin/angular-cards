import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'WowT'
    },
    {
      title: 'Neat Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'Hike',
      content: 'WowM'
    },
    {
      title: 'Neat Bike',
      imageUrl: 'assets/biking.jpeg',
      username: 'trail',
      content: 'WowB'
    }
  ];

  plength = this.posts.length;
}
