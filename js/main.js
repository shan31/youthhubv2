       /*----------  Preloader Function  ----------*/
       $(window).load(function() {
           $('#loading').hide();
       }); /*----------  End Preloder Function  ----------*/

       /*----------  MOBILE FUNCTION  ----------*/
       $(".ion-navicon").click(function() {
           $(this).toggleClass('ion-navicon ion-ios-close-outline');
           $(".left_bar").toggle("slide", {
               direction: "left"
           }, 500);
       });
       $('.ion-ios-search-strong').on('click', function() {
           $('.mob_header .search').toggleClass('expanded');
           $(this).toggleClass('change_i');
       }); /*----------  Subsection comment block  ----------*/

       /*----------  END MOBILE FUNCTION  ----------*/
       (function() {
           [].slice.call(document.querySelectorAll('select.cs-select')).forEach(function(el) {
               new SelectFx(el);
           });
       })(); /*---------- SELECT  FUNCTION  ----------*/
       /*----------  GRID   FUNCTION  ----------*/
       var $grid = $('.grid');
       $grid.imagesLoaded(function() {
           $grid.isotope({
               itemSelector: '.grid-item',
               columnWidth: '.grid-sizer',
               percentPosition: true,
               
           });
       });
       $grid.on('arrangeComplete', function(event, filteredItems) {
           console.log('arrangeComplete with ' + filteredItems.length + ' items');
       });
       var filters = [];
       $('.filters').on('click', '.cs-options li', function(event) {
           event.preventDefault();
           var $target = $(event.currentTarget);
           var isChecked = $target.hasClass('cs-selected');
           $target.toggleClass('cs-selected');
           var filter = $target.attr('data-value');
           if (isChecked) {
               addFilter(filter);
           } else {
               removeFilter(filter);
           }
           $grid.isotope({
               filter: filters.join(', ')
           });
       });

       function addFilter(filter) {
           if (filters.indexOf(filter) == -1) {
               filters.push(filter);
           }
       }

       function removeFilter(filter) {
           var index = filters.indexOf(filter);
           if (index != -1) {
               filters.splice(index, 1);
           }
       } /*----------  END GRID  FUNCTION  ----------*/

       /*----------  YOUTUBE API FUNCTION  ----------*/
       var player, time_update_interval = 0;
       // var vid = $('.post_img iframe').attr('src').match(/[^/]*$/)[0];

       // console.log(vid);

       function onYouTubeIframeAPIReady() {
           var vid = $('.post_img iframe').attr('src').match(/[^/]*$/)[0];
           player = new YT.Player('video-placeholder', {
               width: 200,
               height: 200,
               videoId: 'DQFwe_P5tv8',
               playerVars: {
                   controls: 0,
                   autoplay: 0,
                   autohide: 0,
                   disablekb: 0,
                   iv_load_policy: 3,
                   loop: 1,
                   playlist: 'DQFwe_P5tv8',
                   modestbranding: 1,
                   showinfo: 0,
               },
               events: {
                   onReady: initialize
               }
           });
       }

       function initialize() {

       }

       $('#play').on(' click ', function() {

           player.playVideo();
           $(this).hide();
           $('#pause').show();
           $('#volume-input').show();
       });

       $('#pause').on(' click ', function() {
           player.pauseVideo();
           $(this).hide();
           $('#play').show();

           $('#volume-input').hide();
       });
       $('#volume-input').on('change', function() {
           player.setVolume($(this).val());
       });
       // 

       $(".group2").colorbox({
           rel: 'group2',
           transition: "fade"
       });
       $(".youtube").colorbox({
           iframe: true,
           innerWidth: 640,
           innerHeight: 390
       });

       /*----------  END  YOUTUBE API FUNCTION  ----------*/


       /*----------  Semantic Dropdown  ----------*/
       $(function() {
           $('.ui.multiple.dropdown').dropdown({
               maxSelections: 6
           });
       });
       /*----------  End  comment block  ----------*/



       /*----------  Mobile Filter comment block  ----------*/
       $(".filter_tags").click(function() {
           $('.filter_cat_mob').toggle();
       });
       $(".filter_tags").click(function() {
           $(this).text(function(i, v) {
               return v === 'Filters' ? 'Close' : 'Filters';
           });
       });
       $(".filter_tags").click(function() {
           $(".mob_filter").toggleClass('mob_filter_white');
       });
       var mobilecategory = $('.mob_filter .mob_category ul li a');
       mobilecategoryclose = $('.mob_filter .mob_category ul li a span');
       var $this = $(this);
       mobilecategory.click(function() {
           $(this).toggleClass('active');
           $("span", this).toggleClass('active');
       });
       /*----------  End Filter comment block  ----------*/