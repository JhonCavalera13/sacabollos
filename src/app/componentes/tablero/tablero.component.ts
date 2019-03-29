import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  isLoggedIn: boolean;
  loggedInUser: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.getAuth().subscribe( auth => {
      if(auth){
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      }
      else{
        this.isLoggedIn = false;
      }
    });
  }

}
