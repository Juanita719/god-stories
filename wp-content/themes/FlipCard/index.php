<?php get_header(); ?>
<h1 style="text-align:center">God Stories</h1>
<h3 style="text-align:center">Read....Connect...Share!</h3>
<?php while ( have_posts() ) : the_post(); ?>
  <article class="<?php post_class(); ?>" id="post-<?php the_ID(); ?>">
    <h2 class="entry-title"><?php the_title(); ?></h2>
    <?php if ( !is_page() ):?>
      <section class="entry-meta">
      <p>Posted on <?php the_date();?> by <?php the_author();?></p>
      </section>
    <?php endif; ?>
    <section class="entry-content">
      <?php the_content(); ?>
    </section>
    <section class="entry-meta"><?php if ( count( get_the_category() ) ) : ?>
      <span class="category-links">
        Posted under: <?php echo get_the_category_list( ', ' ); ?>
      </span>
    <?php endif; ?></section>
  </article>
  
<div class="fullscreen-bg">
    <video loop muted autoplay poster="img/videoframe.jpg" class="fullscreen-bg__video">
        <source src="https://kingdomdomaintransfer.com/kingdomprime/wp-content/uploads/2018/12/ColdLandscape2_1.mp4" type="video/mp4">
    </video>
</div>



<div class="flip-box">

<div class="flip-box-inner" >
  <div class="flip-box-front">
    <h2>Stories</h2>


  </div>
  <a href="www.ourgodstories.com/time-line/">
  <div class="flip-box-back">
          <h2>Show me More!</h2>
	  	<p>Click to See More!</p>
  </div></z>
</div>
</div>

<div class="flip-box2">
<div class="flip-box-inner2">
  <div class="flip-box-front2">
    <h2>Share Your Story</h2>
  </div>
  <a href="www.ourgodstories.com/post-your-story/"><div class="flip-box-back2">
    <h2>Share!</h2>
	  <p>Click to See More!</p>
  </div></a>
</div>
</div>

<div class="flip-box3">
<div class="flip-box-inner3">
  <div class="flip-box-front3">
    <?php if(is_user_logged_in()){
      echo '<h2> My Account </h2>';
    } else { ?>
    <h2>Log In</h2>
	  <?php } ?>
  </div>
   <?php if(is_user_logged_in()){ ?>

     <a href="<?php echo home_url('/my-account/');?>"><div class="flip-box-back3">
    <h2>Welcome Back !</h2>
    <p>Click to See More!</p>
  </div></a>

  <?php } else { ?>
  <a href="wp-login.php"><div class="flip-box-back3">
    <h2>Welcome Back !</h2>
	  <p>Click to See More!</p>
  </div></a>
<?php } ?>
</div>
</div>

<div class="flip-box4">
<div class="flip-box-inner4">
  <div class="flip-box-front4">
    <h2>Register</h2>
	 
  </div>
  <a href="<?php echo home_url('/register/'); ?>"><div class="flip-box-back4">
    <h2>Become Part of the Family!</h2>
	  <p>Click to See More!</p>
  </div></a>
</div>
</div>

<div class="flip-box5">
<div class="flip-box-inner5">
  <div class="flip-box-front5">
    <h2>Meet the Members</h2>
	  
  </div>
  <a href="www.ourgodstories.com/members/"><div class="flip-box-back5">
    <h2>See who We Are !</h2>
	  <p>Click to See More!</p>
  </div></a>
</div>
</div>

<div class="flip-box6">
<div class="flip-box-inner6">
  <div class="flip-box-front6">
    <h2>Video Stories</h2>
	 
  </div>
<a href="category/video/"><div class="flip-box-back6">
    <h2>Powerful Stories!</h2>
	<p>Click to See More!</p>
  </div></a>
</div>
</div>

<div class="flip-box7">
<div class="flip-box-inner7">
  <div class="flip-box-front7">
    <h2>Social Media</h2>
  </div>
  <a href="www.ourgodstories.com/social-media/"><div class="flip-box-back7">
    <h2>Facebook, Pinterest, Twitter and more...</h2>
	  <p>Click to See More!</p>
  </div></a>
</div>
</div>

<div class="flip-box8">
<div class="flip-box-inner8">
  <div class="flip-box-front8">
    <h2>Get Our Mobile App !</h2>
  </div>
  <a href="www.ourgodstories.com/get-our-mobile-app-to-stay-in-touch/"><div class="flip-box-back8">
    <h2>Available for Android and iOS !</h2>
	  <p>Click to See More!</p>
  </div></a>
</div>
</div>

<div class="flip-box9">
<div class="flip-box-inner9">
  <div class="flip-box-front9">
    <h2>About</h2>
  </div>
  <a href="www.ourgodstories.com/about/"><div class="flip-box-back9">
    <h2>What We Are About!</h2>
	  <p>Click to See More!</p>
  </div></a>
</div>
</div>

<div class="flip-box10">
<div class="flip-box-inner10">
  <a href="www.ourgodstories.com/contact-us/"><div class="flip-box-front10">
    <h2></h2>
  </div>
  <div class="flip-box-back10">
    <h2>Reach Out to Us!</h2>
	  <p>Click to See More!</p>
  </div></a>
</div>
</div>

<div class="flip-box11">
<div class="flip-box-inner11">
  <div class="flip-box-front11">
    <h2>Connections</h2>
  </div>
	<a href="#">  <div class="flip-box-back11">
    <h2>See the Influence</h2>
		<p>Coming Soon!</p>
  </div></a>
</div>
</div>

<div class="flip-box12">
<div class="flip-box-inner12">
  <div class="flip-box-front12">
    <h2>News Stories</h2>
  </div>
  <a href="category/news/"><div class="flip-box-back12">
    <h2>What's the Latest News On God Stories ?</h2>
	  <p>Click to See More!</p>
  </div></a>
</div>
<?php endwhile; ?>
<?php get_sidebar(); ?>
<?php get_footer(); ?>

