
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { Product } from 'src/app/shared/user';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  // form: FormGroup;
  listProd: Product[];
  constructor(public authService: AuthService, public router: Router) {}
    
     
  ngOnInit(): void {
    this.authService.getAllProducts().subscribe((res) => {
      console.log(res);
      this.listProd = res;
    })
  }
 
  deleteProduct(e){
    console.log(e);
    this.authService.deleteProduct(e).subscribe((res) =>{console.log(res)})
  }
}
