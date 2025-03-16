import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:5090/api/products'; // Update with your API URL

  constructor(private http: HttpClient) { }

  // 🔹 GET Request: Fetch products from API
  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
