import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UserregserviceService } from 'src/app/userregservice.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user:User=new User();
  message:any;

  constructor(private servicve:UserregserviceService) { }

  ngOnInit() {
  }

public registerNow(){
    let resp=this.servicve.doRegistration(this.user);
    resp.subscribe((data)=>this.message=data);
  }

}
