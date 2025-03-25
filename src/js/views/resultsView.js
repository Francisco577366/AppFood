<<<<<<< HEAD
import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2
=======
import View from './view.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';
>>>>>>> 164eac80dfc1ffd4d7cd8c16e0ce21260b7d32a3

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again ;)';
  _message = '';

  _generateMarkup() {
<<<<<<< HEAD
    return this._data.map(result => previewView.render(result, false)).join('');
=======
    return this._data
      .map(results => previewView.render(results, false))
      .join('');
>>>>>>> 164eac80dfc1ffd4d7cd8c16e0ce21260b7d32a3
  }
}

export default new ResultsView();
