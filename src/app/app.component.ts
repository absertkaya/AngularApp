import { Component, OnInit } from '@angular/core';
import { LifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  private products = [];
  public filteredProducts = [];

  ngOnInit() {
      for (let i = 0; i < 10000; i++) {
          this.products.push("Product " + i);
      }

      this.filteredProducts = [...this.products]
  }

  Filter(filterString) {
      this.filteredProducts = this.products.filter(p => p.includes(filterString));
  }
}

