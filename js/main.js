$(document).ready(function() {
  var b = {
    UI: {
      menuIsHidden: true,
    },
    init: function() {
      this.getCurrentYear();
      this.bindEvents();
      var lang = document.documentElement.lang.toLowerCase();
        if (lang === "ko") {
          // $('.breadcrumb, .title-container, .portfolio-body, .blog-body, nav').addClass('ko');
          // $('body').addClass('ko');
          $('nav, section').addClass('ko');
        }
    },
    bindEvents: function() {
      $('.menu-btn').on('click', this.navToggle.bind(this));
      $('ul.filters').on('click', 'li span', this.markFilter.bind(this));
      $(document).keydown(this.checkForEscapeKey.bind(this));
      $('.grp').on('click', this.expandResume.bind(this));
      $('.grid section a').on('click', this.aboutExpand.bind(this));
      $(window).on("resize", function(){ // remove expanded divs in about page
          $('div.full').remove();
          $('section').removeClass("active");
      });
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
    },
    aboutClose: function(){
      $('div.full').slideUp(100); // close any sliding panel currently open
      $('div.full').remove(); // remove from DOM
    },
    determineFlexOrder: function(width, sectionName) {
      // Determine the ordering of flexbox,
      // so full panel appears correctly in a proper row
      if (width >= 600) { // in larger viewport
        if (sectionName === 'language' || sectionName === 'experience' || sectionName === 'human') {
          return 'order6';
        } else {
          return 'order13';
        }
      } else { // in smaller viewport
        if (sectionName === 'language' || sectionName === 'experience') {
          return 'order4';
        } else if (sectionName === 'human') {
          return 'order6';
        } else if (sectionName === 'curiosity' || sectionName === 'hats') {
          return 'order10';
        } else {
          return 'order13';
        }
      }
    },
    aboutExpand: function(e) {
      e.preventDefault(); // cancel a tag
      this.aboutClose(); // remove any existing panel from display and from DOM

      var target = e.currentTarget, // clicked a tag
        $section = $(e.target).closest('section'), // find parent section
        sectionClassNames = $section.attr('class'), // selected section class name, which can be more than one
        split = sectionClassNames.split(/\s+/g), // split class names, if more than one
        sectionName = split[0],
        img = $(target).data('img'), // image in sliding panel
        title = $(target).data('title'), // title in sliding panel
        desc = $(target).data('description'), // description in sliding panel
        $full = $("<div />", {"class":"full"}), // the slding panel div jQ element
        winWidth = $(window).width(), // current window width
        winHeight = $(window).height(); // current window height


      // if currently open, close it and remove 'active' class
      if ($section.hasClass('active')) {
        $section.removeClass('active');
        return;
      }
      $section.toggleClass("active").siblings().removeClass("active");

      var flexOrder = this.determineFlexOrder(winWidth, sectionName); // get flexOrder
      $full.addClass(flexOrder);
      $full.html(this.getAboutContent(img, title, desc)); // get content
      $($section).after($full); // add to DOM

      var panelHeight = $full.height(),
        sectionHeight = $section.height(),
        navHeight = $('.nav-bar').height(),
        panelPosition = $full.offset().top,
        sectionPosition = $section.offset().top;

      var scrollVal = this.determineScroll(panelHeight, sectionHeight, navHeight, panelPosition, sectionPosition, winHeight);

      $('html, body').animate( { scrollTop : scrollVal }, 200, 'swing', $($section).next('div').slideDown(400));
      // $($section).next('div').slideDown(400);

    },
    determineScroll: function(panelHeight, sectionHeight, navHeight, panelPosition, sectionPosition, winHeight) {

      return (sectionPosition - navHeight);

      //
      // TODO:: Scroll differently depending on viewport size and element panelPosition
      //

      // // case 1: sliding panel and selected section fit in window height minus nav height (WORKING)
      // if (panelHeight + sectionHeight <= winHeight - navHeight) {
      //   console.log('case 1: sliding panel and selected section fit in window height minus nav height');
      //   return (sectionPosition - navHeight);
      //
      // // case 2: sliding panel fits in window height minus nav height (NOT WORKING)
      // } else if (panelHeight < winHeight - navHeight) {
      //   console.log('case 2: sliding panel fits in window height minus nav height');
      //   console.log('scrollVal = panelPosition'+ panelPosition + ' - (winHeight '+ winHeight + '- navHeight '+  navHeight + '- panelHeight ' + panelHeight + ')');
      //   return (panelPosition - (winHeight - navHeight - panelHeight));
      // // case 3: sliding panel is too big to fit in window height minus nav height (NOT WORKING)
      // } else {
      //   console.log('case 3: sliding panel is too big to fit in window height minus nav height');
      //   console.log('scrollVal = panelPosition ' + panelPosition);
      //   console.log($('div.full').offset().top);
      //   return panelPosition;
      // }

    },
    getAboutContent: function(img, title, desc) {
      var str = '<span>' +
                '<h1>' + title + '</h1>' +
                // '<img src="'+ img +'">' +
                '<div class="emb-video vimeo wide" style="margin-bottom: 0.5rem;"><iframe src="https://player.vimeo.com/video/208750976?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>' +
                // <iframe src="https://player.vimeo.com/video/208750976?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="https://vimeo.com/208750976">Bumhan on Fatherhood</a> from <a href="https://vimeo.com/baadaa">Bumhan Yu</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
                '<p>' + desc + '</p>' +
                '<div class="close-full"></div>' + 
                '</span>';
      return str;
    }
  };
  b.init();
});
