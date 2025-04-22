import { HttpClient } from '@angular/common/http'; //Modulo de angular para realizar peticiones en http como el get post
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService { //definimos la clase donde se declara la variable que se le va a añadir el nombre que el usuario busca
  private url: string = "https://pokeapi.co/api/v2/pokemon/"

  constructor(private http: HttpClient) { } //constructor que inyecta el httpclient

  getpokemon(name: string){
    return this.http.get(this.url + name)  //usamos la peticion get a la api con la url y el nombre que se busca
  }
}
