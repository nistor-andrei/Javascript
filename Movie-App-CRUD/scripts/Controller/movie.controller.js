class Controller {
  constructor() {
    this.model = new Model();
    this.getCurrentPaginationPage();
    this.model.getMovies(this.page).then((movies) => (this.view = new View(movies)));
  }

  getCurrentPaginationPage() {
    this.page = new URLSearchParams(location.search).get('page');
  }
}

new Controller();
