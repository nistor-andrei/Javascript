class MovieDetailsView {
  render(movie) {
    const title = document.querySelector("[data-title]");
    const img = document.querySelector("[data-movie-image]");
    const ul = document.querySelector("[data-genre-list]");
    const description = document.querySelector("[data-description]");

    title.innerText = movie.Title;
    img.alt = "Title:" + movie.Title;
    img.src = movie.Poster;
    description.innerText = movie.Plot;

    const genre = movie.Genre.split(",");
    let html = "";
    for (const gen of genre) {
      html += `
    <li class="genre-box">${gen}</li>
    `;
    }
    ul.innerHTML = html;
  }
}
