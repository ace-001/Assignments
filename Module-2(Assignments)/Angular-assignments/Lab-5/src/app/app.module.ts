import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { MovieComponent } from './movie.component';
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [
    AppComponent,MovieComponent,SearchComponent,PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
