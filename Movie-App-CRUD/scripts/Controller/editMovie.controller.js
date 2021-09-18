'use strict';

class EditMovie {
  constructor() {
    this.model = new Model();
    // this.sendEdit = this.sendEdit.bind(this);
  }
  para = new URLSearchParams(location.search);
  idMovie = this.para.get('id');
  sendEdit = this.sendEdit.bind(this);

  createElement(id, text, type, value) {
    const labelElement = this.createLabel();
    const inputElement = this.createInput();
    labelElement.for = id;
    labelElement.innerText = text;
    inputElement.type = type;
    inputElement.id = id;
    inputElement.name = id;
    inputElement.value = value;

    return [labelElement, inputElement];
  }

  async initEdit() {
    const response = await this.model.getMoviesById(this.idMovie);
    const editForm = document.querySelector('[data-form-edit]');
    const div = document.createElement('div');
    div.className = 'form';
    const button = document.createElement('button');
    button.type = 'submit';
    button.innerText = 'Send';
    button.className = 'imdb-button';
    button.setAttribute('data-send-edit', '');

    const titleElement = this.createElement('Title', 'Title', 'text', response.Title);

    const yearElement = this.createElement('year', 'Year', 'text', response.Year);

    const runtimeElement = this.createElement('runtime', 'Runtime', 'text', response.Runtime);

    const releaseElement = this.createElement('release', 'Released', 'text', response.Released);

    const genreElement = this.createElement('genre', 'Genre', 'text', response.Genre);

    const posterElement = this.createElement('poster', 'Poster', 'text', response.Poster);

    div.append(...titleElement, ...yearElement, ...runtimeElement, ...releaseElement, ...genreElement, ...posterElement, button);

    editForm.append(div);

    const formEdit = document.querySelector('[data-edit-movie]');

    formEdit.addEventListener('click', () => {
      document.querySelector('[data-form-edit]').classList.toggle('hidden');
    });
  }

  // sendEdit = async (e) => {
  async sendEdit(e) {
    console.log(this);
    e.preventDefault();
    const title = e.target.elements.title.value;
    const year = e.target.elements.year.value;
    const runtime = e.target.elements.runtime.value;
    const release = e.target.elements.release.value;
    const genre = e.target.elements.genre.value;
    const poster = e.target.elements.poster.value;

    console.log(this.para, this.idMovie);

    let accessToken = localStorage.getItem('accessToken');
    await fetch(`https://movies-app-siit.herokuapp.com/movies/${this.idMovie}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        'X-Auth-Token': accessToken,
      },
      body: JSON.stringify({
        Title: title,
        Year: year,
        Released: release,
        Runtime: runtime,
        Genre: genre,
        Poster: poster,
      }),
    });
  }

  createLabel() {
    return document.createElement('label');
  }

  createInput() {
    return document.createElement('input');
  }
}

const edit = new EditMovie();
edit.initEdit();
// document.querySelector('[data-form-edit]')?.addEventListener('submit', function (e) {
//   edit.sendEdit(e);
// });

// document.querySelector('[data-form-edit]')?.addEventListener('submit',  edit.sendEdit.bind(edit));
document.querySelector('[data-form-edit]')?.addEventListener('submit', edit.sendEdit);

// const obj = {
//   prop: 'Andrei',
//   func() {
//     console.log(this);
//   },
// };

// const f = obj.func;

// f();

// function parent(cb) {
//   cb.call('elementul pe care s-a declansat evenimentul');
// }

// parent(obj.func);
