'use strict';
var headerBurger = document.querySelector('.header__burger');
var headerNavigation = document.querySelector('.navigation');
var headerSearch = document.querySelector('.search');
// var headerToggle = document.querySelector('.page-header__toggle');


var addBurger = function () {
  headerBurger.classList.add('header__burger--js');
  headerNavigation.classList.add('navigation--js');
  headerSearch.classList.add('search--js');
};

addBurger();

// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });
