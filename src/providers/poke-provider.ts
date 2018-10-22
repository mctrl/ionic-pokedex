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


  constructor(public http: Http) {
    var url = 'https://pokeapi.co/api/v2/';
    console.log('Hello pokeServiceProvider Provider');
  }

  //Function that returns the current popular movies from the TMDb
   getPopularMovies(){}

  //Function that returns movies that are currently showing in Cinemas from the TMDb
  getInTheaters(){}

  //Uses the TMDb Search api to return movies based on the users search
  searchMovies(searchStr:string){}

  //returns the information on a particular movie using it's ID
  getMovie(id){}

    //Returns a the list of genres in TMDB
   getGenres(){}

    //Returns a list of movies with a specified genre 
   getMoviesByGenre(genreId){}

}