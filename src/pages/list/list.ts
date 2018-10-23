import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'list.html'
})
export class PokedexList { 
  pokedex;
  constructor(params: NavParams) {
    this.pokedex = params.data.pokedex;
    console.log('Pokedex List', params)
  }
}