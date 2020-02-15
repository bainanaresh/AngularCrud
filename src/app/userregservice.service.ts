import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserregserviceService {

  constructor(private http:HttpClient) { }

public doRegistration(user){
return this.http.post("http://localhost:8082/reg",user,{responseType:'text' as 'json'});
}

public getAllUsers(){
  return this.http.get("http://localhost:8082/users");
}

public deleteUser(id){
  return this.http.delete("http://localhost:8082/delete/"+id,{responseType:'text' as 'json'});
}

public getUserByEmail(email){
  return this.http.get("http://localhost:8082/user/"+email);
}

}
