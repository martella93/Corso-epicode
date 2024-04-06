import { Component, OnInit } from '@angular/core';
import { AuthData } from 'src/app/models/auth-data.interface';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss'],
})
export class ProfileDetailsComponent implements OnInit {
  currentUser!: AuthData | null;

  constructor(private authSrv: AuthService) {} 
 ngOnInit(): void {
  this.currentUser = this.authSrv.getCurrentUser();
 }
}