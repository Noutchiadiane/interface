import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-footer',
  templateUrl: './shared-footer.component.html',
  styleUrls: ['./shared-footer.component.scss']
})
export class SharedFooterComponent implements OnInit {

  active = 'all';

  constructor(
    
  ) { }

  ngOnInit(): void {
  }

 

  scrollToTop() {
    window.scroll(0,0);
  }

}
