/* =============================================================
 * bootstrap-scrollspy.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#scrollspy
 * =============================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================== */


!function ($) {

  "use strict"; // jshint ;_;


  /* SCROLLSPY CLASS DEFINITION
   * ========================== */

  function ScrollSpy(element, options) {
    var process = $.proxy(this.process, this)
        , $element = $(element).is('body') ? $(window) : $(element)
        , href
    this.options = $.extend({}, $.fn.scrollspy.defaults, options)
    this.$scrollElement = $element.on('scroll.scroll-spy.data-api', process)
    this.selector = (this.options.target
        || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
        || '') + ' .nav li > a'
    this.$body = $('body')
    this.refresh()
    this.process()
  }

  ScrollSpy.prototype = {

    constructor: ScrollSpy

    , refresh: function () {
      var self = this
          , $targets

      this.offsets = $([])
      this.targets = $([])

      $targets = this.$body
          .find(this.selector)
          .map(function () {
            var $el = $(this)
                , href = $el.data('target') || $el.attr('href')
                , $href = /^#\w/.test(href) && $(href)
            return ( $href
                && $href.length
                && [[ $href.position().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]] ) || null
          })
          .sort(function (a, b) { return a[0] - b[0] })
          .each(function () {
            self.offsets.push(this[0])
            self.targets.push(this[1])
          })
    }

    , process: function () {
      var scrollTop = this.$scrollElement.scrollTop() + this.options.offset
          , scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
          , maxScroll = scrollHeight - this.$scrollElement.height()
          , offsets = this.offsets
          , targets = this.targets
          , activeTarget = this.activeTarget
          , i

      if (scrollTop >= maxScroll) {
        return activeTarget != (i = targets.last()[0])
            && this.activate ( i )
      }

      for (i = offsets.length; i--;) {
        activeTarget != targets[i]
            && scrollTop >= offsets[i]
            && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate( targets[i] )
      }
    }

    , activate: function (target) {
      var active
          , selector

      this.activeTarget = target

      $(this.selector)
          .parent('.active')
          .removeClass('active')

      selector = this.selector
          + '[data-target="' + target + '"],'
          + this.selector + '[href="' + target + '"]'

      active = $(selector)
          .parent('li')
          .addClass('active')

      if (active.parent('.dropdown-menu').length)  {
        active = active.closest('li.dropdown').addClass('active')
      }

      active.trigger('activate')
    }

  }


  /* SCROLLSPY PLUGIN DEFINITION
   * =========================== */

  var old = $.fn.scrollspy

  $.fn.scrollspy = function (option) {
    return this.each(function () {
      var $this = $(this)
          , data = $this.data('scrollspy')
          , options = typeof option == 'object' && option
      if (!data) $this.data('scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scrollspy.Constructor = ScrollSpy

  $.fn.scrollspy.defaults = {
    offset: 10
  }


  /* SCROLLSPY NO CONFLICT
   * ===================== */

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  /* SCROLLSPY DATA-API
   * ================== */

  $(window).on('load', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      $spy.scrollspy($spy.data())
    })
  })

}(window.jQuery);



!function ($) {

  "use strict"; // jshint ;_;

  $('#company li').hover(function(e) {
    $(this).find('.overlay').fadeIn(200);
  }, function(e) {
    $(this).find('.overlay').fadeOut(200);
  });

  $('#advertisers .video .play').click(function(e) {
    $(this).parent().html('<iframe src="http://player.vimeo.com/video/70266562?autoplay=1" width="640" height="361" style="max-width: 100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
  });

  $('header .btn-navbar').click(function(e) {
    var $nav = $('header .nav');
    $nav.toggleClass('in');

    $('header .nav, header #home-link').one('click', function(e) {
      $nav.removeClass('in');
    });
  });

  $('header a').click(function(e) {
    var href = $(this).attr('href');
    if (href.charAt(0) == '#')
    {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: (href == '#' ? 0 : $(href).offset().top)
      }, 350, function () {
        window.location.hash = href;
      });
    }
  });
}(window.jQuery);

/* Carousel */
$('.carousel').carousel({
   interval: 5000
 });

$('.carousel').carousel()

var softEngBool = false;
var bayAccntBool = false;
var nyAccntBool = false;
var salesBool = false;
var csrBool = false;

$('.career').click(function(){
  
  var city = $(this).parent('div').prev().text();
  var career = $(this).text();
  
  if(career === 'Software Engineer'){
    
    if(!softEngBool){
    
      $('#softEng').slideDown(400);
      softEngBool = true;
    
    }else{
      
      $('#softEng').slideUp(400);
      softEngBool = false;
    }
    
  }else if(career === 'Account Manager' && city === 'San Carlos'){

    if(!bayAccntBool){

      $('#bayAccnt').slideDown(400);
      bayAccntBool = true;
    
    }else{
      
      $('#bayAccnt').slideUp(400);
      bayAccntBool = false;
    }
    
  }else if(career === 'Account Manager' && city === 'New York'){

    if(!nyAccntBool){

      $('#nyAccnt').slideDown(400);
      nyAccntBool = true;
    
    }else{
      
      $('#nyAccnt').slideUp(400);
      nyAccntBool = false;
    }
    
  }else if(career === 'Sales Engineer'){
    
    if(!salesBool){

      $('#sales').slideDown(400);
      salesBool = true;
    
    }else{
      
      $('#sales').slideUp(400);
      salesBool = false;
    }
    
  }else{
    
    if(!csrBool){

      $('#CSR').slideDown(400);
      csrBool = true;
    
    }else{
      
      $('#CSR').slideUp(400);
      csrBool = false;
    }
  }
});
