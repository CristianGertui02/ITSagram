import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/services/users.service';
import {user} from '../../types/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  usersList : user[];

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit() {
    this.fillUsers();
  }

  async fillUsers(){
    this.usersList = (await this.userService.getAllUser()).data;
  }

  //Metodo per navigare alla pagina delle foto dell'utente
  goToUserPhotos(){
    this.router.navigateByUrl("/user-photos")
  }

}
