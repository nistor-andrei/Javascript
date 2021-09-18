'use strict';

const apiUrl = 'https://movies-app-siit.herokuapp.com/';
const displayCount = 9;

class Model {
  endPoint = apiUrl + 'movies';

  getMovies(page = 1) {
    // '?take=10&skip=10'
    const skip = page * displayCount - displayCount;
    return fetch(`${this.endPoint}?take=${displayCount}&skip=${skip}`).then((res) => res.json());
  }

  getMoviesById(id) {
    return fetch(`${this.endPoint}/${id}`).then((res) => res.json());
  }
}
