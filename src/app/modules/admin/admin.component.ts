import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
admins: any = [{
  name: 'Archana',
  type: '1'
},
{
  name: 'Priyanshu',
  type: '1'
}];
show_admin=false;
AdminShow="show Admin";
  constructor() { }

  ngOnInit(): void {
  }
  show_admins(){
    

    if(this.AdminShow==="show Admin"){
      this.AdminShow="Hide Admin";
      this.show_admin=!this.show_admin;
    }
    else if(this.AdminShow==="Hide Admin"){
      this.AdminShow="Show Admin";
      this.show_admin=!this.show_admin;
    }
  }

}
