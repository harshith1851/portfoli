import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { gsap,TimelineLite } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements AfterViewInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private elementRef: ElementRef
  ) {
    gsap.registerPlugin(ScrollTrigger);
  }
  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });

  }


  ngAfterViewInit(){
    // gsap.from('.myname', {
    //      y:700,
    //      opacity:1,
    //      duration:5,
    //     //  scrollTrigger:'.square2'
    //     });
    const timeline = new TimelineLite();
    timeline.from('.myname', {
      opacity: 0, y:100,duration: 0.6,  
    });

    timeline.from('.myname2', {
      opacity: 0, y:100,duration: 0.6, 
    });
    timeline.from('.myname3', {
      opacity: 0, y:100,duration: 0.6, 
    });
    timeline.from('.myname4', {
      opacity: 0, y:100,duration: 0.6, 
    });
 
      }
  
}
