import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
products:any[]=[];
categories:any[]=[];
loading : boolean=false;
cartProducts :any[]=[];
  constructor(private service:ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }
  getAllProducts()
  {
    this.loading = true;
    this.service.getAllProducts().subscribe((res:any) =>{
      this.products=res;
      this.loading = false;
    },error=>{
      this.loading = false;
      alert("404");


    }
    );
  }
  getAllCategories()
  {this.loading = true;
    this.service.getAllCategories().subscribe((res:any) =>{
      this.categories=res;
      this.loading = false;
    },error=>{
      this.loading = false;
      alert("404");
    }
    );
  }
  filterCategory(event:any)
  {
    let value = event.target.value;
    if(value == "All")
    {
      this.getAllProducts();
    }
    else
    this.getProductsByCategory(value);

  }

  getProductsByCategory(key :string)
  {
    this.service.getProductsByCategory(key).subscribe((res:any) =>{
      console.log(res);
      this.products=res;
    },error=>{
      alert("404");
    }
    );
  }

  addToCart(event : any)
  {
    if("cart" in localStorage)
    {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
      if(this.cartProducts.find(item => item.id == event.id))
      {
        alert("Item was Added");
      }
      else
      {
        this.cartProducts.push(event);
        localStorage.setItem("cart" , JSON.stringify(this.cartProducts));
      }
    }
    else
    {
      this.cartProducts.push(event);
      localStorage.setItem("cart" , JSON.stringify(this.cartProducts));
    }
    //localStorage.setItem("cart",JSON.stringify(event) );
  }

}
