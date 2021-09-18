class MovieDetails {
  constructor() {
    this.model = new Model();
    this.view = new MovieDetailsView();
  }
  async init() {
    const id = this.getIdFromUrl();
    const movie = await this.model.getMoviesById(id);
    this.view.render(movie);
  }

  async deleteMovie() {
    const id = this.getIdFromUrl();
    this.view.delete(id);
  }

  getIdFromUrl() {
    const params = new URLSearchParams(location.search);
    return params.get("id");
  }
}

const page = new MovieDetails();

page.init();
