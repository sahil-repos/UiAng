import { Component, OnInit } from '@angular/core';

@Component({
// selecting by element
selector: 'app-servers',

  // selecting by attribute
  // selector: '[app-servers]',

  // select by class
  // selector:'.app-servers',
 
  // template: `<app-server></app-server>
  // <app-server></app-server>`,
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  constructor() { 

    setTimeout(()=>{
      this.allowNewServer=true;
    },3000)
  }

  ngOnInit() {
  }

}
 