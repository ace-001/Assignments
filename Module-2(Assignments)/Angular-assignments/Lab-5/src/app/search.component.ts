import { Component } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styles: ['']
})
export class SearchComponent
{
  movieData;
  movie:Movie[];
  public constructor(private movieService:MovieService){}
  ngOnInit()
  {
    this.movieData ;
    this.movie = this.movieService.getAllMovies();
  }
  public searchMovie(genre:string) :void
  {
    this.movieData = new Array<Movie>();
    this.movie.forEach(m =>{
      if(m.genre==genre)
      this.movieData.push(m);
    });
  }
}
