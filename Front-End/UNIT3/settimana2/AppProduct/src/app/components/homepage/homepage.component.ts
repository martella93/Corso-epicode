import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/service/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit, OnDestroy {
  products!: Product[];
  sub!: Subscription;

  constructor(private productSrv: ProductService) {}

  ngOnInit(): void {
    this.sub = this.productSrv.getProduct().subscribe(
      (res) => {
        this.products = res.products;
      },
      (error) => console.log(error)
    );
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
