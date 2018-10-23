import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PokeServiceProvider } from '../../providers/poke-provider';

@Component({
  templateUrl: 'list.html'
})
export class PokedexList { 
  pokelist;
  pokedexName: string;
  constructor(params: NavParams, public pokeService:PokeServiceProvider) {
    
    this.pokeService.getPokedexNumber(params.data.pokedex).subscribe(data => {
      console.log(data)
      this.pokelist = data.pokemon_entries;
      this.pokedexName = data.name;

    });
    console.log('Pokedex List', this.pokelist)
  }
}