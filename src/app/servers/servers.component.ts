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
  serverCreationStatus='No server was created';
  serverName='TestServer';


  constructor() { 

    setTimeout(()=>{
      this.allowNewServer=true;
    },3000)
  }

  ngOnInit() {
  }


    onCreateServer(){
      this.serverCreationStatus='server was created..';
    }
    onUpdateServerName(event:Event){
this.serverName=(<HTMLInputElement>event.target).value;
//this.serverName=(<HTMLInputElement>event.target).value; tells type script that event target is of type htmlinputelement

    }
}
 