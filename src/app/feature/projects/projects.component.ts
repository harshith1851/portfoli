import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.portfolioData = [
      {
        img: 'https://jonny.me/dist/images/agyle-intelligence.webp',
        title: 'Noise - Audio Mixer',
        data: 'A SwiftUI application to implement widgets on HomeScreen and Lockscreen to show countdown to FIFA WorldCup 2022 in Qatar. The widgets show country flags and players with countdown.',
      },
      {
        img: 'https://jonny.me/dist/images/hal-con.webp',
        title: 'Hal-Con',
        data: 'A SwiftUI application to implement widgets on HomeScreen and Lockscreen to show countdown to FIFA WorldCup 2022 in Qatar. The widgets show country flags and players with countdown.'       
      },
      {
        img: 'https://jonny.me/dist/images/ladyslipper-cottages.webp',
        title: 'Lady Slipper Cottages',
        data: 'A SwiftUI application to implement widgets on HomeScreen and Lockscreen to show countdown to FIFA WorldCup 2022 in Qatar. The widgets show country flags and players with countdown.'
      },
      {
        img: 'https://jonny.me/dist/images/tweetmap.webp',
        title: 'Tweetmap',
        data: 'A SwiftUI application to implement widgets on HomeScreen and Lockscreen to show countdown to FIFA WorldCup 2022 in Qatar. The widgets show country flags and players with countdown.'
      }

    ];
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
  portfolioData: any = [];
}
