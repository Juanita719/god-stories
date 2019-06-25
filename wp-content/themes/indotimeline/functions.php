<?php
/**
 * IndoTimeline functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package IndoTimeline
 */

define('INDOTIMELINE_DEVELOPMENT', false);

if ( ! function_exists( 'indotimeline_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function indotimeline_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on IndoTimeline, use a find and replace
		 * to change 'indotimeline' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'indotimeline', get_template_directory() . '/languages' );


		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'menu-1' => esc_html__( 'Primary', 'indotimeline' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'indotimeline_custom_background_args', array(
			'default-color' => 'f1f1f1',
			'default-image' => '',
		) ) );

		
		// Add Editor Style
		add_editor_style( array( 'dist/css/editor-style.css' ) );


		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );


		/**
		 * Add support for post formats.
		 *
		 * @link https://codex.wordpress.org/Post_Formats
		 */
		/* PRO
		add_theme_support( 'post-formats', array(
			'image',
			'gallery',
		) );
		*/

		/**
		 * Add Image Size.
		 *
		 * @link https://developer.wordpress.org/reference/functions/add_image_size/
		 */
		// PRO
		// add_image_size( 'indotimeline-hd', 1920, 1080, true );
		add_image_size( 'indotimeline-mini', 640, 360, true );

		/**
		 * Remove Admin Bar
		 *
		 */
		// show_admin_bar(false);
	}
endif;
add_action( 'after_setup_theme', 'indotimeline_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function indotimeline_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'indotimeline_content_width', 640 );
}
add_action( 'after_setup_theme', 'indotimeline_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function indotimeline_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar Fixed', 'indotimeline' ),
		'id'            => 'sidebar-fixed',
		'description'   => esc_html__( 'Add widgets sidebar Fixed here.', 'indotimeline' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar Content', 'indotimeline' ),
		'id'            => 'sidebar-content',
		'description'   => esc_html__( 'Add widgets sidebar content here. Go to Customizer, Then General Settings to activated.', 'indotimeline' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
	register_sidebar( array(
		'name'          => esc_html__( 'Footer Widget', 'indotimeline' ),
		'id'            => 'footer-widget',
		'description'   => esc_html__( 'Add widgets Footer content here.', 'indotimeline' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );

	register_sidebar( array(
		'name'          => esc_html__( 'Category Cool Tag', 'indotimeline' ),
		'id'            => 'cat-cool-tag',
		'description'   => esc_html__( 'Add widgets Cat Cool here. Go to Customizer, Then General Settings to activated.', 'indotimeline' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'indotimeline_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function indotimeline_scripts() {
	wp_enqueue_style( 'indotimeline-style', get_stylesheet_uri() );
	wp_enqueue_style( 'indotimeline-font-open-sans', 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i' , array(), '1.0.0', "screen" );
	wp_enqueue_style( 'indotimeline-font-roboto', 'https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i' , array(), '1.0.0', "screen" );
	wp_enqueue_script("jquery");


	if ( INDOTIMELINE_DEVELOPMENT ) {

		// CSS
		wp_enqueue_style( 'indotimeline-main', get_template_directory_uri() . '/dev/css/style.css' , array(), time(), "screen" );
		wp_enqueue_style( 'indotimeline-icon', get_template_directory_uri() . '/dev/css/ionicons.css' , array(), time(), "screen" );

		// JS
		wp_enqueue_script( 'indotimeline-moment', get_template_directory_uri() . '/dev/tools/moment/moment.js', array(), time(), true );
		wp_enqueue_script( 'indotimeline-masonry', get_template_directory_uri() . '/dev/tools/masonry-layout/dist/masonry.pkgd.js', array(), time(), true );
		wp_enqueue_script( 'indotimeline-loadimages', get_template_directory_uri() . '/dev/tools/waitForImages/dist/jquery.waitforimages.js', array(), time(), true );

		wp_enqueue_script( 'indotimeline-build-js', get_template_directory_uri() . '/dev/js/app.js', array('jquery'), '1.0.2', true );

	}else{

		// CSS
		wp_enqueue_style( 'indotimeline-build-style', get_template_directory_uri() . '/dist/css/style.css' , array(), '1.0.2', "screen" );
		wp_enqueue_style( 'indotimeline-build-icons', get_template_directory_uri() . '/dist/css/ionicons.css' , array(), '1.0.2', "screen" );

		// JS
		wp_enqueue_script( 'indotimeline-build-plugins', get_template_directory_uri() . '/dist/js/plugins.js', array('jquery'), '1.0.2', true );
		wp_enqueue_script( 'indotimeline-build-app', get_template_directory_uri() . '/dist/js/app.js', array('jquery'), '1.0.2', true );

	}


	wp_register_script( 'indotimeline_js_config', null);
	$indotimeline_js_array = array(
		'home_url' => esc_url( home_url( '/' ) ),
		'general' => array(
			'sidebar_display' => indotimeline_options('general_sidebar_display')
		),
		'timeline' => array(
			'load_more_type' => esc_html( indotimeline_options( 'timeline_load_more_type' ) ),
			'indicator' => esc_html ( indotimeline_options( 'timeline_timeline_indicator' ) ),
			'display_line' => esc_html( indotimeline_options( 'timeline_display_line' ) ),
			'columns' => indotimeline_options( 'timeline_columns' ),
		)
	);

	wp_localize_script( 'indotimeline_js_config', 'indotimeline_config', $indotimeline_js_array );
	wp_enqueue_script( 'indotimeline_js_config' );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'indotimeline_scripts' );

/**
 * Function
 */

function indotimeline_post_avatar() {
	echo get_avatar(get_the_author_meta('email'), 30);
}

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer/customizer.php';
require get_template_directory() . '/inc/customizer/customizer-defaults.php';
require get_template_directory() . '/inc/customizer/dynamic-css.php';


/**
 * Timeline Before & After
 */
function indotimeline_timeline_before($timeline_class = ""){ ?>
	<div class="timeline <?php echo esc_attr($timeline_class, 'indotimeline') ?>">
		<?php if ( !is_singular() ) : ?>

			<?php

			$indotimeline_timeline_avatar = indotimeline_options( 'timeline_avatar' );
			if ( empty($indotimeline_timeline_avatar)) {
				$timeline_avatar = get_template_directory_uri() . '/dist/img/default-avatar.png';
			}else{
				$timeline_avatar = wp_get_attachment_url( indotimeline_options( 'timeline_avatar' ) );
			}

			?>
			<div class="timeline-avatar js_timeline_avatar">
				<img src="<?php echo esc_url( $timeline_avatar ); ?>" alt="<?php bloginfo( 'name' ); ?>">
			</div>
		<?php endif ; ?>
		<div class="timeline-list js_timeline" data-loadtext="<?php echo esc_attr("Load More"); ?>">

<?php }

function indotimeline_timeline_after(){ ?>
		</div>
		<!-- /.timeline-list -->
		<div class="js_timelineLine timeline-line"></div>
		<!-- .timeline-line -->

	</div>
	<!-- / .timeline -->
<?php }

/**
 * Masondry Before & After
 */
function indotimeline_masondry_before($timeline_class = ""){ ?>
	<div class="timeline <?php echo esc_attr($timeline_class, 'indotimeline') ?>">
		<div class="timeline-list js_timeline" data-loadtext="<?php echo esc_attr("Load More"); ?>">

<?php }

function indotimeline_masondry_after(){ ?>
		</div>
		<!-- /.timeline-list -->
	</div>
	<!-- / .timeline -->
<?php }

/**
 * Blog Before & After
 */
function indotimeline_blog_before($blog_class = ""){ ?>
	<div class="timeline-blog <?php echo esc_attr($blog_class, 'indotimeline') ?>">
		<div class="timeline-blog-list" data-loadtext="<?php echo esc_attr("Load More"); ?>">

<?php }

function indotimeline_blog_after(){ ?>
		</div>
		<!-- /.timeline-blog-list -->
	</div>
	<!-- / .timeline-blog -->
<?php }

add_action('init','custom_login');


function my_login_redirect( $redirect_to, $request, $user ) {
    //is there a user to check?
    if (isset($user->roles) && is_array($user->roles)) {
        //check for subscribers
        
            // redirect them to another URL, in this case, the homepage 
            $redirect_to =  home_url('/my-account/');
      
    }

    return $redirect_to;
}

add_filter( 'login_redirect', 'my_login_redirect', 10, 3 );

add_action( 'wp_logout', 'wstheme_auto_redirect_external_after_logout');
function wstheme_auto_redirect_external_after_logout(){
  wp_redirect( '/godstories/wp-login.php' );
  exit();
}
