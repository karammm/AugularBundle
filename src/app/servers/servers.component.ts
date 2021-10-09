import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  //     <app-server></app-server>
  //     `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers=false;
  serverCreationStatus='No server is created!';
  serverName='Sophos';
  serverCreatd=false;
  constructor() { 
    //it is nothing but a method runs at the point of time component is created by angular
    setTimeout(()=>{
      this.allowNewServers=true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreatd=true;
    this.serverCreationStatus='Server was created And Name is: '+this.serverName;
  }
  onUpdateServerName(event:any){
    this.serverName=(<HTMLInputElement>event.target).value;
    console.log(this.serverName);
  }
}
