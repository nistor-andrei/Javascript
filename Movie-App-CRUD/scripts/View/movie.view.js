class View {
  constructor(data) {
    const movies = data.results;
    const html = this.buildHtml(movies);
    this.pagination = data.pagination;
    this.render(html);
    this.paginate();
  }

  buildHtml(movies) {
    const html = document.createDocumentFragment();

    for (const movie of movies) {
      const link = document.createElement('a');
      const div = document.createElement('div');
      const img = document.createElement('img');
      const p = document.createElement('p');

      link.href = `moviesDetails.html?id=${movie._id}`;
      img.src = movie.Poster;
      img.alt = 'Photo' + movie.title;
      p.innerText = movie.Title;
      div.className = 'movies-list__item';

      div.append(img, p);
      link.append(div);
      html.append(link);
    }
    return html;
  }
  render(html) {
    const moviesList = document.querySelector('[data-movies]');
    moviesList.append(html);
  }

  paginate() {
    const prevLink = document.querySelector('[data-prev-page]');
    const nextLink = document.querySelector('[data-next-page]');
    const current = document.querySelector('[data-current-page]');
    const currentPage = this.pagination.currentPage;
    const numberOfPages = this.pagination.numberOfPages;
    current.innerText = currentPage;

    let nextPage = currentPage + 1;
    if (nextPage > numberOfPages) {
      nextPage = numberOfPages;
      nextLink.style.display = 'none';
    }

    let prevPage = currentPage - 1;
    if (prevPage < 1) {
      prevPage = 1;
      prevLink.style.display = 'none';
    }

    nextLink.href = `${location.pathname}?page=${nextPage}`;
    prevLink.href = `${location.pathname}?page=${prevPage}`;
  }
}
