'use strict';
var headerBurger = document.querySelector('.header__burger');
var headerNavigation = document.querySelector('.navigation');
var headerSearch = document.querySelector('.search');
// var filterBlock = document.querySelector('.main__filter-block');
// var headerToggle = document.querySelector('.page-header__toggle');


if (headerBurger || headerNavigation || headerSearch) {
  // var filterButton = document.querySelector('.main__filter-button');
  var isJsBlock = function () {
    headerBurger.classList.add('header__burger--js');
    headerNavigation.classList.add('navigation--js');
    headerSearch.classList.add('search--js');
    // filterButton.classList.add('main__filter-button--js');
    // filterBlock.classList.add('main__filter-block--js');
  };
}

isJsBlock();
