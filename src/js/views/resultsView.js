import View from './View.js';
import previewView from './previewView.js';
const icons = '/icons.svg';

class resultsView extends View {
  _parentEl = document.querySelector('.results');
  _message;
  _errMSG = 'No recipes found for your query. Please try again!';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new resultsView();
