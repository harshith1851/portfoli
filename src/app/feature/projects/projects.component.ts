import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { gsap, TimelineMax } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit,AfterViewInit  {
  constructor(private route: ActivatedRoute, private router: Router) {
    gsap.registerPlugin(ScrollTrigger);
  }
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




  ngAfterViewInit(): void {
    gsap.utils.toArray('.project-item').forEach((item:any, index) => {
      gsap.from(item, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: item,
          start: 'top 95%',
          scrub: true, // Enable scrubbing effect
        },
      });
     
    });
    gsap.from('img', {
        
      x: -500,
      duration: 1,
      scrollTrigger: {
        trigger: '.img',
        start: 'top 95%',
        scrub: true, // Enable scrubbing effect
      },
    });
    gsap.from('.mydata', {
    
      x: 500,
      duration: 1,
      scrollTrigger: {
        trigger: '.mydata',
        start: 'top 99%',
        scrub: true, // Enable scrubbing effect
      },
    });
  }
}
