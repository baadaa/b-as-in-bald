$(document).ready(function() {
  var b = {
    UI: {
      menuIsHidden: true,
    },
    init: function() {
      this.getCurrentYear();
      this.bindEvents();
    },
    bindEvents: function() {
      $('.menu-btn').on('click', this.navToggle.bind(this));
      $('ul.filters').on('click', 'li span', this.markFilter.bind(this));
      $(document).keydown(this.checkForEscapeKey.bind(this));
      $('.grp').on('click', this.expandResume.bind(this));
    },
    checkForEscapeKey: function(e) {
      var ESC = 27;
       if (e.which === ESC) {
       this.cancelNav();
       }
      },
    navToggle: function() {
      $('#overlay-bg').toggleClass('hidden');
      this.UI.menuIsHidden = !this.UI.menuIsHidden;
      $('#overlay-bg').attr('aria-hidden', this.UI.menuIsHidden);
      $('.menu-btn').toggleClass('open');
      $('body').toggleClass('noscroll');
    },
    cancelNav: function() {
      $('#overlay-bg').addClass('hidden');
      this.UI.menuIsHidden = true;
      $('#overlay-bg').attr('aria-hidden', this.UI.menuIsHidden);
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
      $('.year').html(dString);
    },
    expandResume: function(e) {
      var clickedItem = $(e.target).parents('span.grp');
      var itemDetail = $(clickedItem).find('.r-detail');
      $(itemDetail).toggle(300);
      $('.r-detail').not(itemDetail).hide(300);
    }
  };
  b.init();
});
