$(document).ready(function() {
  var b = {
    UI: {
      isHidden: true
    },
    init: function() {
      this.getCurrentYear();
      this.bindEvents();
    },
    bindEvents: function() {
      $('.menu-btn').on('click', this.navToggle.bind(this));
      $('ul.filters').on('click', 'li span', this.markFilter.bind(this));
    },
    navToggle: function() {
      $('#overlay-bg').toggleClass('hidden');
      this.UI.isHidden = !this.UI.isHidden;
      $('#overlay-bg').attr('aria-hidden', this.UI.isHidden);
      $('.menu-btn').toggleClass('open');
      $('body').toggleClass('noscroll');
    },
    markFilter: function(e) {
      $('ul.filters li span').removeClass('selected-filter');
      $(e.target).addClass('selected-filter');
    },
    getCurrentYear: function() {
      var d = new Date();
      var dString = "&copy;" + d.getFullYear();
      console.log($('.year'));
      $('.year').html(dString);
    }
  };
  b.init();
});
