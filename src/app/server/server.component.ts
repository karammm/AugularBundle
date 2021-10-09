import { Component } from "@angular/core";


//This component decorator is to tell that that this is not a normal typescript class but a component  
@Component({
    //storing metadata inside it to tell what to do with the class
    selector:'app-server',
    templateUrl:'./server.component.html'

})
export class ServerComponent{
    serverId:number=10;
    serverStatus:string='offline';
    constructor(){
        this.serverStatus=Math.random() >0.5?'Online' : 'Offline'
    }
    getServerStatus(){
        return this.serverStatus;
    }
    getcolor(){
        return this.serverStatus==='Online'?'green' : 'red';
    }

}