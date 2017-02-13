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
      $(document).keydown(this.checkForEscapeKey.bind(this));
    },
    checkForEscapeKey: function(e) {
      var ESC = 27;
       if (e.which === ESC) {
       this.cancelNav();
       }
      },
    navToggle: function() {
      $('#overlay-bg').toggleClass('hidden');
      this.UI.isHidden = !this.UI.isHidden;
      $('#overlay-bg').attr('aria-hidden', this.UI.isHidden);
      $('.menu-btn').toggleClass('open');
      $('body').toggleClass('noscroll');
    },
    cancelNav: function() {
      $('#overlay-bg').addClass('hidden');
      this.UI.isHidden = true;
      $('#overlay-bg').attr('aria-hidden', this.UI.isHidden);
      $('.menu-btn').removeClass('open');
      $('body').removeClass('noscroll');
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
