import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';



import { routing } from './app.routing';

import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  imports: [ 
    BrowserModule,
    routing
   ],
  declarations: [ 
    AppComponent,
    //NavbarComponent,
    SearchComponent,
    AboutComponent 
  ],
  bootstrap: [ 
    AppComponent
  ]
})
export class AppModule { }
