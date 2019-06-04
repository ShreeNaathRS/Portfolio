import { Component } from '@angular/core';
import { ConnectionService } from "ng-connection-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shree ';
  isConnected:Boolean=true;
  status:String;
  constructor(connectionService:ConnectionService){
    connectionService.monitor().subscribe(isConnected=>{
      this.isConnected=isConnected;
      if(this.isConnected){
        this.status='Connected';
      }else{
        this.status='Disconnected';
      }
    });
  }
  onActivate(componentInstance){
    this.title=componentInstance.title;
  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
