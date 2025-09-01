import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { API_URLS } from '../../constant/api-url';

@Component({
  selector: 'app-search-products',
  imports: [CommonModule, FormsModule],
  templateUrl: './search-products.html',
  styleUrl: './search-products.css'
})
export class SearchProducts {
  searchText: string = '';
  products: any[] = [];
  loading: boolean = false;

  constructor( private http: HttpClient) {}

  searchProducts() {
    if (!this.searchText.trim()) return;
    this.loading = true;

    this.http
      .get<any>(`${API_URLS.search}${this.searchText}`)
      .subscribe({
        next: (res) => {
          this.products = res.products;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
  }
}
