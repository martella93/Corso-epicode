import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users.interface';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.scss']
})
export class UtentiComponent implements OnInit {

  users: Users[] = [];

    constructor(private userSrv: UsersService) {}

    ngOnInit(): void {
        this.userSrv.getUsers().subscribe((data) => {
            this.users = data;
        });
    }
}
