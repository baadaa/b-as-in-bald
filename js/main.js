$(document).ready(function() {
  var b = {
    UI: {
      isHidden: true
    },
    init: function() {
      this.bindEvents();
    },
    bindEvents: function() {
      $('.menu-btn').on('click', this.navToggle.bind(this));
    },
    navToggle: function() {
      $('#overlay-bg').toggleClass('hidden');
      this.UI.isHidden = !this.UI.isHidden;
      $('#overlay-bg').attr('aria-hidden', this.UI.isHidden);
      $('.menu-btn').toggleClass('open');
      $('body').toggleClass('noscroll');
    }
  };
  b.init();
});
