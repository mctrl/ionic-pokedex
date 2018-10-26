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
  pages: Array<{title: string, generation: number, imgStartAt: number}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
    ) {

    // set our app's pages
    this.pages = [
      { title: 'Kanto', generation: 1, imgStartAt: 1},
      { title: 'Johto', generation: 2, imgStartAt: 152},
      { title: 'Hoenn', generation: 3, imgStartAt: 252},
      { title: 'Sinnoh', generation: 4, imgStartAt: 387}
      // { title: 'Unova', pokedex: '9/'},
      // { title: 'Kalos', pokedex: '13/'},
      // { title: 'Alola', pokedex: '14/'}

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
  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    // this.nav.push(PokedexList, { generation: generation });
    this.nav.setRoot(PokedexList, { page: page});
    console.log('trying to navigate to generation', page)
  }
}

