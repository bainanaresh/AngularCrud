import { Component, OnInit } from '@angular/core';
import { UserregserviceService } from 'src/app/userregservice.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {
users:any;
message:any;
email:string;
  constructor(private service:UserregserviceService) { }

  ngOnInit() {
    let resp=this.service.getAllUsers();
    resp.subscribe((data)=>this.users=data);
  }
  public delteUser(id){
    confirm("are you want to delete?")
let resp=this.service.deleteUser(id);
let resp2=this.service.getAllUsers();
resp.subscribe((data)=>this.message=data);
resp2.subscribe((data)=>this.users=data);
  }
  public findUserByEmailId(){
    let resp3=this.service.getUserByEmail(this.email);
    alert(this.users[0].id);
    resp3.subscribe((data)=>this.users=data);
   
  }
}
