import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';


import { routing } from './app.routing';

import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';



@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
   ],
  declarations: [ 
    AppComponent,
    //NavbarComponent,
    SearchComponent,
    AboutComponent,
    ArtistComponent,
    AlbumComponent
  ],
  bootstrap: [ 
    AppComponent
  ]
})
export class AppModule { }
