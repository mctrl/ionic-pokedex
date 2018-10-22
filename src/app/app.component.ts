import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { PokedexList } from '../pages/list/list';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  pages: Array<{title: string, pokedex: number}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
    ) {

    // set our app's pages
    this.pages = [
      { title: 'Kanto', pokedex: 2},
      { title: 'Johto', pokedex: 3},
      { title: 'Hoenn', pokedex: 4},
      { title: 'Sinnoh', pokedex: 5},
      { title: 'Unova', pokedex: 9},
      { title: 'Kalos', pokedex: 13},
      { title: 'Alola', pokedex: 14}

    ];
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  openPage(pokedex) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(PokedexList);
    console.log('trying to navigate to generation', pokedex)
  }
}

