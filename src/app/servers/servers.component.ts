import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverCreationStatus = 'No server was created';
  serverName = 'Powerhouse';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push('New server');
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

}
