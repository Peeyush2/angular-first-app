import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverID = 10;

  getServerID() {
    return this.serverID;
  }
}
