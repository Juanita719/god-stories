/*
** Instantly live-update customizer settings in the preview for improved user experience.
*/

(function( $ ) {

	var $Elem = {
		Window : window,
		Document : $(document),
		Html : $('html'),
		Body : $('body'),
		Page : $('#page'),
		Header : $('#masthead'),
		Content : $('#content'),
		Sidebar : $('.sidebar'),
		Navbar : $('.navbar-header'),
		Navigation : $('.navigation'),
		AvatarTimeline : $('.js_timeline_avatar'),
		AvatarLine : $('.js_timelineLine')
	}

	// Header
	wp.customize( 'header_textcolor', function( value ) {
		value.bind( function( val ) {
			if ( 'blank' === val ) {
				$('.site-branding .site-title').hide();
				$('.site-branding .site-description').hide();
			} else {
				$('.site-branding .site-title').show();
				$('.site-branding .site-description').show();

				$('.site-branding').css( 'color', val );
			}
		});
	});

	// Title
	wp.customize( 'blogname', function( value ) {
		value.bind( function( val ) {
			$('.site-branding .site-title a').text(val);
		});
	});

	// Description
	wp.customize( 'blogdescription', function( value ) {
		value.bind( function( val ) {
			$('.site-branding .site-description').text(val);
		});
	});


	// Timeline Indicator
	wp.customize( "indotimeline_options[timeline_timeline_indicator]", function( value ) {
		value.bind( function( val ) {
			if ( val == "arrow") {
				$Elem.Body.addClass('timeline-use-arrow');
				$Elem.Body.removeClass('timeline-use-bullet');
			}else if( val == "bullet" ){
				$Elem.Body.addClass('timeline-use-bullet');
				$Elem.Body.removeClass('timeline-use-arrow');
			}else{
				$Elem.Body.removeClass('timeline-use-arrow');
				$Elem.Body.removeClass('timeline-use-bullet');
			}
		});
	});

	// Timeline Display Line
	wp.customize( "indotimeline_options[timeline_display_line]", function( value ) {
		// console.log(value);
		value.bind( function( val ) {
			// console.log(val);
			if ( val ) {
				$Elem.Body.removeClass('remove-timeline-line');
			}else{
				$Elem.Body.addClass('remove-timeline-line');
			}
		});
	});

	// Timeline Display Avatar
	wp.customize( "indotimeline_options[timeline_display_avatar]", function( value ) {
		// console.log(value);
		value.bind( function( val ) {
			// console.log(val);
			if ( val ) {
				$Elem.Body.removeClass('remove-timeline-avatar');
			}else{
				$Elem.Body.addClass('remove-timeline-avatar');
			}
		});
	});

	// General Widget
	wp.customize( "indotimeline_options[general_widget_display]", function( value ) {
		value.bind( function( val ) {
			if ( val == "hide") {
				$Elem.Body.removeClass('open-sidebar');
				$Elem.AvatarTimeline.css('left', Elem.Body.width() / 2 + 'px');
				$Elem.AvatarLine.css('left', Elem.Body.width() / 2 + 'px');
			}else{
				$Elem.Body.addClass('open-sidebar');
				$Elem.AvatarTimeline.css('left', (Elem.Body.width() / 2) + (Elem.Sidebar.outerWidth() / 2) + 'px');
				$Elem.AvatarLine.css('left', (Elem.Body.width() / 2) + (Elem.Sidebar.outerWidth() / 2) + 'px');
			}
		});
	});

	// General Navigation
	wp.customize( "indotimeline_options[general_navigation_display]", function( value ) {
		value.bind( function( val ) {
			if ( val == "hide") {
				$Elem.Body.removeClass('open-main-navigation');
			}else{
				$Elem.Body.addClass('open-main-navigation');
			}
		});
	});



} )( jQuery );
