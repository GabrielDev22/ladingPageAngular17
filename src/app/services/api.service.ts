import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient);
  private urlBase: string = 'https://fakestoreapi.com/products';

  getProducts(): Observable<Producto[]>{
    return this._http.get<Producto[]>(this.urlBase);
  }

  getProdcut(id: number): Observable<Producto>{
    return this._http.get<Producto>(`${this.urlBase}/${id}`)
  }

  
}
