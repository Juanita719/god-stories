<?php /**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package IndoTimeline
 */ ?>
	</div><!-- #content -->
	
	<footer id="colophon" class="site-footer">
		<div class="container">
			<?php get_footer('widget'); ?>
			<div class="site-info">
				<span><b><?php echo esc_html__( 'Kingom, Inc.&copy; 2019', '' ); ?></b></span>
				<a href="<?php echo esc_url( __( 'https://kingdom.com', '' ) ); ?>">
					<?php echo esc_html__( '', '' ); ?>
				</a>
				<span class="sep"> </span>
					<?php
					/* translators: 1: Theme name, 2: Theme author. */
					printf( esc_html__( ' Theme: %1$s by %2$s.', 'indotimeline' ), 'IndoTimeline', '<a >IndoDevApps</a>' );

					
					?>
			</div><!-- .site-info -->
		</div>
	</footer><!-- #colophon --> </div><!-- #page --> <?php wp_footer(); ?> </body>
</html>
