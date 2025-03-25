<<<<<<< HEAD
import View from './View.js';
=======
import View from './view.js';
>>>>>>> 164eac80dfc1ffd4d7cd8c16e0ce21260b7d32a3
import icons from 'url:../../img/icons.svg'; // Parcel 2

class PreviewView extends View {
  _parentElement = '';

  _generateMarkup() {
    const id = window.location.hash.slice(1);

    return `
<<<<<<< HEAD
      <li class="preview">
        <a class="preview__link ${
          this._data.id === id ? 'preview__link--active' : ''
        }" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
            <div class="preview__user-generated ${
              this._data.key ? '' : 'hidden'
            }">
              <svg>
              <use href="${icons}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `;
=======
    <li class="preview">
          <a class="preview__link ${
            this._data.id === id ? 'preview__link--active' : ''
          }"href="#${this._data.id}">
            <figure class="preview__fig">
              <img src=${this._data.image} alt="${this._data.title}" />
            </figure>
            <div class="preview__data">
              <h4 class="preview__title">${this._data.title}</h4>
              <p class="preview__publisher">${this._data.publisher}</p>
            </div>
          </a>
        </li>
        `;
>>>>>>> 164eac80dfc1ffd4d7cd8c16e0ce21260b7d32a3
  }
}

export default new PreviewView();
