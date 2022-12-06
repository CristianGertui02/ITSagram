import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/services/users.service';
import { user } from 'src/types/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  user : user;

  constructor(private userService: UsersService, private router: Router) {
   }

  ngOnInit() {
    this.fillUser();
  }

  //riempie gli utenti DA COMPLETARE
  async fillUser(){
     this.user = (await this.userService.getUser()).data;
  }

  //Metodo per navigare alla pagina delle foto dell'utente
  goToUserPhotos(){
    this.router.navigateByUrl("/user-photos")
  }

}
