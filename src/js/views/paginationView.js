import View from './View.js';
import icons from 'url:../../img/icons.svg';

class paginationView extends View {
  _parentEl = document.querySelector('.pagination');

  _generateMarkup() {
    const currentPage = this._data.page;
    const totalPage = Math.ceil(
      this._data.results.length / this._data.resultPerPage
    );

    if (currentPage === 1 && currentPage < totalPage)
      return this._generatePageMarkup(currentPage, 'next');

    if (currentPage === 1 && currentPage === totalPage) return '';

    if (currentPage === totalPage)
      return this._generatePageMarkup(currentPage, 'prev');

    return this._generatePageMarkup(currentPage);
  }

  _generatePageMarkup(currentPage, pos) {
    if (pos === 'next')
      return `
    <button data-goTo="${
      currentPage + 1
    }" class="btn--inline pagination__btn--${pos}">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
          `;

    if (pos === 'prev')
      return `
          <button data-goTo="${
            currentPage - 1
          }" class="btn--inline pagination__btn--${pos}">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
          </button>`;

    return `
          <button data-goTo="${
            currentPage - 1
          }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
          </button>
          
          <button data-goTo="${
            currentPage + 1
          }" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
          `;
  }

  addHandlerClick(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }
}

export default new paginationView();
