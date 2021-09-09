'use strict';

(async function () {
  const moviesList = document.querySelector('[data-movies]');
  getMovies();
  async function getMovies() {
    const prevButton = document.querySelector('[data-prev-page]');
    const currentButton = document.querySelector('[data-current-page]');
    const nextButton = document.querySelector('[data-next-page]');

    let count = 0;
    nextButton.addEventListener('click', handleNext);
    prevButton.addEventListener('click', handlePrev);
    callAPI();
    async function handleNext() {
      count += 10;
      callAPI();
      return count;
    }
    async function handlePrev() {
      count -= 10;
      callAPI();
      return count;
    }

    async function callAPI() {
      let url = `https://movies-app-siit.herokuapp.com/movies?take=10&skip=${count}`;
      const movies = await fetch(url).then((resp) => resp.json());
      currentButton.innerText = movies.pagination.currentPage;
      console.log(currentButton);
      const data = movies.results;
      let html = '';
      for (const movie of data) {
        html += `
        <div class="movies-list__item">
            <img src="${movie.Poster}"/>
            <p>${movie.Title}</p>
        </div>`;
      }
      moviesList.innerHTML = html;
      return movies.results;
    }
  }
})();
