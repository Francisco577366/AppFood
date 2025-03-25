<<<<<<< HEAD
import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfully uploaded :)';
=======
import View from './view.js';
import icons from 'url:../../img/icons.svg';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfully uploaded';
>>>>>>> 164eac80dfc1ffd4d7cd8c16e0ce21260b7d32a3

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
<<<<<<< HEAD
    this._addHandlerShowWindow();
=======
    this._AddHandlerShowWindow();
>>>>>>> 164eac80dfc1ffd4d7cd8c16e0ce21260b7d32a3
    this._addHandlerHideWindow();
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

<<<<<<< HEAD
  _addHandlerShowWindow() {
=======
  _AddHandlerShowWindow() {
>>>>>>> 164eac80dfc1ffd4d7cd8c16e0ce21260b7d32a3
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
<<<<<<< HEAD
=======

>>>>>>> 164eac80dfc1ffd4d7cd8c16e0ce21260b7d32a3
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
