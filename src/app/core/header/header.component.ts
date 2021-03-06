import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  onSaveData() {
    return this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    return this.dataStorageService.getRecipes();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  onLogout() {
    return this.authService.logout();
  }
}
