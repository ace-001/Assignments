import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pagenotfound.component';
import { EmptyComponent } from './empty.component';
import { SearchComponent } from './search.component';
import { MovieComponent } from './movie.component';

const routes: Routes = [{path:'',component:EmptyComponent},
                        {path:'searchmovie',component:SearchComponent},
                        {path:'addmovie',component:MovieComponent},
                        {path:'**',component:PageNotFoundComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
