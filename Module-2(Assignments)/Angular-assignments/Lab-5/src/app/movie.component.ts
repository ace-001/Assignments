import { Component } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent
{
  movieData:Movie[];
  public constructor(private movieService:MovieService){}
  ngOnInit()
  {
    this.movieData = this.movieService.getAllMovies();
  }
  public addMovie(mname:string,mrate:number,genre:string)
  {
    this.movieData.push(new Movie(mname,mrate,genre));
  }
}
