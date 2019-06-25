<?php

/**
Template Name: Register
*/

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<div class="post-inner">

		<div class="post-top">
			<div class="post-top-inner">
				<div class="post-author">
					<?php indotimeline_posted_by(); ?>
				</div>
				<div class="post-date">
					<?php indotimeline_posted_on(); ?>
				</div>
			</div>
		</div>
<?php echo do_shortcode('[wpuf_profile type="registration" id="265"]'); ?>

	</div>
</article>