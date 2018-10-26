import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PokeServiceProvider } from '../../providers/poke-provider';

@Component({
  templateUrl: 'list.html'
})
export class PokedexList { 
  pokelist;
  pokedexName: string;
  imageAt: number;
  constructor(params: NavParams, public pokeService:PokeServiceProvider) {
console.log(params)
    this.pokeService.getGeneration(params.data.page.generation).subscribe(data => {
      this.pokelist = data.pokemon_species.sort((a, b) => {
        var url_a = a.url.split('/');
        var url_b = b.url.split('/');
        return url_a[url_a.length-2] - url_b[url_b.length-2] //order them from lower to higher number using the poke number in the returned URL 
      });
      console.log(this.pokelist)
      this.pokedexName = data.name;
      this.imageAt = params.data.page.imgStartAt;

    });
  }
}