class createMovie {
  addMoreRatings() {
    const buttonAdd = document.querySelector('[data-rating-add]');
    const buttonRemove = document.querySelector('[data-rating-remove]');

    buttonAdd.addEventListener('click', this.handleAdd);
    buttonRemove.addEventListener('click', this.handleRemove);
  }
  handleAdd(e) {
    const newRating = document.querySelector('[data-new-rating]');

    e.preventDefault();

    const labelSource = document.createElement('label');
    const inputSource = document.createElement('input');
    const labelRate = document.createElement('label');
    const inputRate = document.createElement('input');
    const div = document.createElement('div');
    div.setAttribute('class', 'child-form-ratings-div');

    // Create input attributes
    inputSource.type = 'text';
    inputSource.id = 'source';
    inputSource.name = 'source';

    inputRate.type = 'text';
    inputRate.id = 'value';
    inputRate.name = 'rate';

    // Config labels
    labelSource.for = 'source';
    labelSource.innerText = 'Source';
    labelRate.for = 'value';
    labelRate.innerText = 'Rate';
    div.append(labelSource, inputSource, labelRate, inputRate);
    newRating.appendChild(div);
  }

  handleRemove(e) {
    e.preventDefault();
    const parentRating = document.querySelectorAll('[data-new-rating]');
    const newRating = document.getElementsByClassName('child-form-ratings-div');
    if (newRating.length > 1) {
      const lastElem = newRating[newRating.length - 1];
      for (const rating of parentRating) {
        rating.removeChild(lastElem);
      }
    }
  }

  createNewMovie() {
    const form = document.querySelector('[data-form]');

    form.addEventListener('submit', this.handleCreateMovie);
  }
  handleCreateMovie(e) {
    e.preventDefault();

    const accessToken = localStorage.getItem('accessToken');

    const title = e.target.elements.title.value;
    const poster = e.target.elements.poster.value;
    const year = e.target.elements.year.value;
    const genre = e.target.elements.genre.value;
    const imdbId = e.target.elements.imdbid.value;
    const sources = e.target.elements.source;
    const rates = e.target.elements.rate;

    let rate = [];

    for (let i = 0; i < sources.length; i++) {
      const objRate = {};
      objRate.Source = sources[i].value;
      objRate.Value = rates[i].value;

      rate.push(objRate);
    }
    fetch('https://movies-app-siit.herokuapp.com/movies', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'X-Auth-Token': accessToken,
      },
      body: JSON.stringify({
        Title: title,
        Poster: poster,
        Year: year,
        Genre: genre,
        imdbID: imdbId,
        Ratings: rate,
      }),
    })
      .then((res) => res.json())
      .then(alert('The movie was added in database'));
  }
}

const create = new createMovie();
create.addMoreRatings();
create.createNewMovie();
