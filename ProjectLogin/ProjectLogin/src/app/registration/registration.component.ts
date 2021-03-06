import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private userSerice: UserService) { }

  ngOnInit() {
  }

  registerUser(data){
    this.userSerice.registerUser(data);
  }

}
