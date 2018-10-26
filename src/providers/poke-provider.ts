import { Injectable } from '@angular/core'; //Imports injectable decorator
import { Http } from '@angular/http'; 
import 'rxjs/Rx';

/*
  Generated class for the PokeServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PokeServiceProvider {
  url: string;

  constructor(public http: Http) {
    this.url = 'https://pokeapi.co/api/v2/';
    console.log('Hello pokeServiceProvider Provider');
  }

  //returns the pokedex based on the number
  getPokedexNumber(pokedex: string){
    var completeUrl = this.url+'pokedex/'+pokedex;
    console.log('provider reached', completeUrl)
    return this.http.get(completeUrl).map(res=> res.json());
  }

  getPokemonDetails() {

  }

  getGeneration(generation: number){
    var completeUrl = this.url+'generation/'+generation;
    return this.http.get(completeUrl).map(res=> res.json());
  }

}