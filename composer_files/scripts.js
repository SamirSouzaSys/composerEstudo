var tableless = (function() {
  'use strict';

  function init(){
    var touch = 'ontouchstart' in document.documentElement;
    if(touch){
      document.addEventListener('touchstart', menuOffcanvas, false);
    } else {
      document.addEventListener('click', menuOffcanvas, false);
    }    
    prettyPrintHighlight();
    showSearch();
  }

  //
  // Start PrettyPrint
  //
  function prettyPrintHighlight(){
    var $root = document.querySelector('html');
    if ($root.classList.contains('single')) {
      preHighlight();
      prettyPrint();
    }
  }

  function preHighlight() {
    var $pre = document.querySelectorAll('pre');

    for (var i = 0; i < $pre.length; i++) {
      $pre[i].classList.add('prettyprint', 'linenums');
    }
  }

  function showSearch() {
    var $searchBtn = document.querySelector('.tb-search-btn');
    var $searchBox = document.querySelector('.tb-search-box');

    $searchBtn.addEventListener('click', function(){
      $searchBox.classList.toggle('tb-is-active');
    });

  }

  function menuOffcanvas(e) {
    var $menuButton = document.querySelector('.tb-sandwich');
    var $menuOffcanvas = document.querySelector('.tb-offcanvas-parent');
    if (e.target === $menuButton || e.target === $menuOffcanvas){
      e.preventDefault();
      $menuOffcanvas.classList.toggle('tb-is-active');
    }
  }

  return {
    init: init,
    preHighlight: preHighlight
  }

}());

(function(){
  tableless.init();
}());