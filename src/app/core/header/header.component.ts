import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  ngOnInit(): void {
     this.menuClass=document.querySelector('.portMenu');
  }
  showDetail:boolean=false;
  menuClass:any;
  showDetailMenu(){
    this.showDetail=!this.showDetail;
    if(!this.showDetail){
      this.menuClass.classList.add('hidden');  
    }else{
      this.menuClass.classList.remove('hidden');
    }
  }
}
