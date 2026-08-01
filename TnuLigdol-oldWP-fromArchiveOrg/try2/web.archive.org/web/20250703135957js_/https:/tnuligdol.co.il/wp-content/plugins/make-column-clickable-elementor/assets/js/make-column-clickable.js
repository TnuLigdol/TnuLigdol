var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
jQuery( function( $ ) {
  $( document ).on( 'click', 'body:not(.elementor-editor-active) .make-column-clickable-elementor', function( e ) {
    var wrapper = $( this ),
        url     = wrapper.data( 'column-clickable' );

    if ( url ) {
      if ( $( e.target ).filter( 'a, a *, .no-link, .no-link *' ).length ) {
        return true;
      }

      // handle elementor actions
      if ( url.match( "^#elementor-action" ) ) {

        var hash = url;
        var hash = decodeURIComponent( hash );

        // if is Popup
        if ( hash.includes( "elementor-action:action=popup:open" ) || hash.includes( "elementor-action:action=lightbox" ) ) {

          if ( 0 === wrapper.find( '#make-column-clickable-open-dynamic' ).length ) {
            wrapper.append( '<a id="make-column-clickable-open-dynamic" style="display: none !important;" href="' + url + '">Open dynamic content</a>' );
          }

          wrapper.find( '#make-column-clickable-open-dynamic' ).click();

          return true;
        }

        return true;
      }

      // smooth scroll
      if ( url.match( "^#" ) ) {
        var hash = url;

        $( 'html, body' ).animate( {
          scrollTop: $( hash ).offset().top
        }, 800, function() {
          window.location.hash = hash;
        });

        return true;
      }

      window.open( url, wrapper.data( 'column-clickable-blank' ) );
      return false;
    }
  });
});

}

/*
     FILE ARCHIVED ON 22:08:50 Oct 10, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:50:05 Jul 31, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.63
  load_resource: 113.092
  PetaboxLoader3.resolve: 30.444
  PetaboxLoader3.datanode: 70.129 (2)
  loaddict: 70.126
*/