import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  searchProd(query: string) {
    const url = `https://pokeapi.co/api/v2/type/${query}`;
    let obsProd = this.http.get(url);
    return obsProd;
  }

  searchDet(query: any) {
    const url = `https://pokeapi.co/api/v2/pokemon/${query}`;
    let obsDet = this.http.get(url);
    return obsDet;
    }
}