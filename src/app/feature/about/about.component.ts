import { Component,OnInit,AfterViewInit,ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { gsap,TimelineLite } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit,AfterViewInit {
  constructor(private route: ActivatedRoute, private router: Router,private elementRef: ElementRef) {
    gsap.registerPlugin(ScrollTrigger);
    
  }
  ngOnInit(): void {
    this.skillsArray=['HTML','SCSS','CSS','Javascript','Nodejs','TypeScript','Express','Angular','C++','JavaCore','MongoDB','SEO','Tailwindcss','Bootstrap']
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        console.log('ele---',element)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
  skillsArray:any=[];
  ngAfterViewInit(){
    const timeline = new TimelineLite();
    timeline.from('.aboutme', {
      opacity: 0, y:500,duration: 0.6,  
    }).addLabel('startSkills');

    timeline.from('.getKnow', {
      opacity: 0, x:-500,duration: 1, 
    }, 'startSkills');

    timeline.from('.mySkills', {
      opacity: 0, x:500,duration: 1, 
    }, 'startSkills');
 
      }
      
  
}
