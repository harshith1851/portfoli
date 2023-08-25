import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
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
  
  
}
