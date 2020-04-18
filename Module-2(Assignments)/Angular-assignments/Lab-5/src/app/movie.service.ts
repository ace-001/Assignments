import { Injectable } from '@angular/core';
import { movieList } from './movielist';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public getAllMovies():Movie[]
  {
    return movieList;
  }
}
