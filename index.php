<!DOCTYPE html>
<html lang="en-US">

<head>
<?php include 'template/meta.php'; ?>

</head>

<body>
    <div class="preloader">
        <div class="animation circle"></div>
    </div>

<?php include 'template/header.php'; ?>


    <div class="site-content">

        <!-- Header slides -->
        <div class="page-header slider owl-carousel owl-theme">
            <div class="img big" style="background-image:url(<?php include 'template/root.php'; ?>/assets/img/headers/header_1920x1100.jpg)">
                <div class="container">
                    <div class="caption text-right">
                        <h2>Crafting &amp; Creating<br><strong>Minimal Designs</strong></h2>
                        <p>I center myself, personally, around minimalism.<br>My design aesthetic reflects this greatly.</p>
                        <div class="btn-wrapper">
                            <a href="#portfolio" class="primary-btn">
                                <span>Latest Work</span>
                                <i class="fas fa-arrow-down"></i>
                            </a>
                        </div>
                        <div class="btn-wrapper">
                            <a href="https://dribbble.com/jasperlachance" class="secondary-btn dribbble-outline" target="_blank">
                                <span>See on Dribbble</span>
                                <i class="fab fa-dribbble"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="img big" style="background-image:url(<?php include 'template/root.php'; ?>/assets/img/headers/header_1920x750.jpg)">
                <div class="container">
                    <div class="caption">
                        <h2>Who <strong>Am I</strong></h2>
                        <p>A User Experience Designer and Front-End Developer.<br>Innovative and creative thinking powers my work.</p>
                        <!--div class="btn-wrapper">
                            <a href="<?php include 'template/root.php'; ?>/about" class="primary-btn">
                                <span>Find Out More</span>
                                <i class="fas fa-arrow-right"></i>
                            </a>
                        </div-->
                        <div class="btn-wrapper">
                            <a href="#portfolio" class="primary-btn">
                                <span>Latest Work</span>
                                <i class="fas fa-arrow-down"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="site-main">

            <!-- Portfolio -->
            <div id="portfolio" class="content-section">
                <div class="container">
                    <div class="row">
                        <div class="section-title col-md-6">
                            <h3><strong>Featured</strong> Work</h3>
                            <p>Check out some featured selected works.</p>
                        </div>
                        <ul class="filter col-md-6">
                            <li class="active"><a href="javascript:void(0)" data-filter="*">All</a></li>
                            <li><a href="javascript:void(0)" data-filter=".branding">Branding</a></li>
                            <li><a href="javascript:void(0)" data-filter=".web">Web</a></li>
                            <li><a href="javascript:void(0)" data-filter=".app">App</a></li>
                            <li><a href="javascript:void(0)" data-filter=".illustration">Illustration</a></li>
                            <li><a href="javascript:void(0)" data-filter=".daily-ui">Daily UI</a></li>
                        </ul>
                    </div>
                    <div class="portfolio-row grid row">
                        <div class="item col-md-4 col-sm-6 col-12 branding">
                            <div class="slide-in">
                                <a href="https://dribbble.com/shots/6563010-Quack-Worlds-Brand-Mark" target="_blank">
                                    <div class="overlay"></div>
                                    <img src="https://cdn.dribbble.com/users/74861/screenshots/6563010/qw_brand-mark_dribbble_4x.png" alt="Quack Worlds (Brand Mark)" />
                                    <div class="caption">
                                        <h4>Quack Worlds<br>(Brand Mark)</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="item col-md-4 col-sm-6 col-12 app web">
                            <div class="slide-in">
                                <a href="https://dribbble.com/shots/6538056-nuhomes-A-Real-Estate-App-Concept" target="_blank">
                                    <div class="overlay"></div>
                                    <img src="https://cdn.dribbble.com/users/74861/screenshots/6538056/nuhomes-desktop-concept.png" alt="nuhomes Real Estate App Concept" />
                                    <div class="caption">
                                        <h4>nuhomes Real Estate<br>(App Concept)</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="item col-md-4 col-sm-6 col-12 app web">
                            <div class="slide-in">
                                <a href="https://dribbble.com/shots/5554175-Mogul-Admin-Dashboard-v3" target="_blank">
                                    <div class="overlay"></div>
                                    <img src="https://cdn.dribbble.com/users/74861/screenshots/5554175/new-dashboard-v3_4x.png" alt="Mogul Admin Dashboard v3" />
                                    <div class="caption">
                                        <h4>Mogul Admin Dashboard v3</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="item col-md-4 col-sm-6 col-12 web">
                            <div class="slide-in">
                                <a href="https://dribbble.com/shots/5490640-Mogul-Splash-Page-Design" target="_blank">
                                    <div class="overlay"></div>
                                    <img src="https://cdn.dribbble.com/users/74861/screenshots/5490640/mogul-splash-page_4x.png" alt="Mogul Splash Page Design" />
                                    <div class="caption">
                                        <h4>Mogul Splash Page Design</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="item col-md-4 col-sm-6 col-12 app web">
                            <div class="slide-in">
                                <a href="https://dribbble.com/shots/5473519-Login-Form" target="_blank">
                                    <div class="overlay"></div>
                                    <img src="https://cdn.dribbble.com/users/74861/screenshots/5473519/login-form_2x_4x.png" alt="Login Form" />
                                    <div class="caption">
                                        <h4>Login Form</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="item col-md-4 col-sm-6 col-12 app web">
                            <div class="slide-in">
                                <a href="https://dribbble.com/shots/5421311-E-Learning-Course-Cards" target="_blank">
                                    <div class="overlay"></div>
                                    <img src="https://cdn.dribbble.com/users/74861/screenshots/5421311/learning-course-cards_4x.png" alt="E-Learning Course Cards" />
                                    <div class="caption">
                                        <h4>E-Learning Course Cards</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="item col-md-4 col-sm-6 col-12 daily-ui web">
                            <div class="slide-in">
                                <a href="https://dribbble.com/shots/4780916-Waitlist-Success-Message" target="_blank">
                                    <div class="overlay"></div>
                                    <img src="https://cdn.dribbble.com/users/74861/screenshots/4780916/daily-ui-011_flash-message.png" alt="Waitlist Success Message" />
                                    <div class="caption">
                                        <h4>Waitlist Success Message</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="item col-md-4 col-sm-6 col-12 web">
                            <div class="slide-in">
                                <a href="https://dribbble.com/shots/4779967-SAM-Brand-Style-Guidelies" target="_blank">
                                    <div class="overlay"></div>
                                    <img src="https://cdn.dribbble.com/users/74861/screenshots/4779967/sam-styleguide-preview.png" alt="SAM Brand & Style Guidelies" />
                                    <div class="caption">
                                        <h4>SAM Brand &amp; Style Guidelies</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="item col-md-4 col-sm-6 col-12 app daily-ui">
                            <div class="slide-in">
                                <a href="https://dribbble.com/shots/4741930-Music-Player-Compact-Concept" target="_blank">
                                    <div class="overlay"></div>
                                    <img src="https://cdn.dribbble.com/users/74861/screenshots/4741930/daily-ui-009_music-player.png" alt="Music Player (Compact Concept)" />
                                    <div class="caption">
                                        <h4>Music Player<br>(Compact Concept)</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="btn-wrapper" style="text-align:center">
                        <a href="/portfolio" class="primary-btn">
                            <span>View More</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Latest posts -->
            <div id="blog" class="content-section">
                <div class="container">
                    <div class="section-title text-center">
                        <h3>Latest <strong>Posts</strong></h3>
                        <p>Check out the latest from the blog.</p>
                    </div>
                    <div class="latest-news owl-carousel owl-theme">
                        <div class="post">
                            <img src="<?php include 'template/root.php'; ?>/assets/img/posts/palma-barcelona.png" alt="Barcelona: Stunning Architecture, Beautiful Culture" />
                            <div class="caption white">
                                <h4>Barcelona: Stunning Architecture, Beautiful Culture</h4>
                                <div class="date">Posted on June 5, 2018</div>
                                <p>After living in London for nearly 2 years, it is finally time I saw Spain. Barcelona’s legendary architecture and beautiful history is what attracted me …</p>
                                <a href="https://jaythechance.com/barcelona-stunning-architecture-beautiful-culture/" class="primary-btn" target="_blank">
                                    <span>Read More</span>
                                    <i class="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div class="post">
                            <img src="<?php include 'template/root.php'; ?>/assets/img/posts/state-of-user-experience-design.png" alt="State of User Experience Design" />
                            <div class="caption white">
                                <h4>State of User Experience Design</h4>
                                <div class="date">Posted on June 5, 2018</div>
                                <p>If we look back on previous years, some pretty great things happened in the field of User Experience. The number of practitioners has continued to grow …</p>
                                <a href="https://jaythechance.com/state-of-user-experience-design/" class="primary-btn" target="_blank">
                                    <span>Read More</span>
                                    <i class="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div class="post">
                            <img src="<?php include 'template/root.php'; ?>/assets/img/posts/thoughts-on-budgeting.png" alt="Thoughts on Budgeting" />
                            <div class="caption white">
                                <h4>Thoughts on Budgeting</h4>
                                <div class="date">Posted on April 23, 2018</div>
                                <p>Setting a budget is one thing. That's the easiest part of the whole process. Setting a budget is exciting, but it's no joke. The hard part is following that budget …</p>
                                <a href="https://jaythechance.com/budgeting/" class="primary-btn" target="_blank">
                                    <span>Read More</span>
                                    <i class="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div class="post">
                            <img src="<?php include 'template/root.php'; ?>/assets/img/posts/brilliant-minds.png" alt="Brilliant Minds" />
                            <div class="caption white">
                                <h4>Brilliant Minds</h4>
                                <div class="date">Posted on November 25, 2017</div>
                                <p>The world is so full of brilliant minds. They're everywhere, innovating the most incredible technologies. Innovation in consumer products is fine, but there lies a problem …</p>
                                <a href="https://jaythechance.com/brilliant-minds/" class="primary-btn" target="_blank">
                                    <span>Read More</span>
                                    <i class="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <!--div class="post">
                            <img src="<?php include 'template/root.php'; ?>/assets/img/posts/scrambled-mind-unscramble-your-mind.png" alt="Scrambled Mind? Unscramble Your Mind" />
                            <div class="caption white">
                                <h4>Scrambled Mind? Unscramble Your Mind</h4>
                                <div class="date">Posted on October 1, 2017</div>
                                <p>My thought process lately has been a bit scrambled. There are plenty of reasons why this has happened, but none really justify upsetting the inner balance …</p>
                                <a href="https://jaythechance.com/scrambled-mind-unscramble-your-mind/" class="primary-btn" target="_blank">
                                    <span>Read More</span>
                                    <i class="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div-->
                    </div>
                </div>
            </div>
            
            <!-- Newsletter subscription form
            <div class="content-section">
                <div class="container">
                    <div class="row">
                        <div class="section-title newsletter-title col-md-4">
                            <h3><strong>Subscribe</strong> Now!</h3>
                            <p>Sign up to the newsletter to get the latest design and tech news &amp; updates.</p>
                        </div>
                        <div class="newsletter col-md-8">
                            <div>
                                <input class="newsletter-input form-control" type="text" name="email" maxlength="80" placeholder="Your email..">
                                <input class="form-control newsletter-submit submit" type="submit" value="Subscribe">
                            </div>
                        </div>
                    </div>
                </div>
            </div-->

        </div>
    </div>

<?php include 'template/footer.php'; ?>


<?php include 'template/scripts.php'; ?>


</body>
</html>