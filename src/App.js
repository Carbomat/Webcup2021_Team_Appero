import logo from './logo.svg';
import './App.css';
import ncr from './ncr.png'
function App() {
  return (
    <div className="App">
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */

                <div>
                <div id="loading" style={{display: 'none'}}>
                  <div id="loading-center">
                    <div id="loading-center-absolute">
                      <div className="object" id="object_four" style={{display: 'none'}} />
                      <div className="object" id="object_three" style={{display: 'none'}} />
                      <div className="object" id="object_two" style={{display: 'none'}} />
                      <div className="object" id="object_one" style={{display: 'none'}} />
                    </div>
                  </div>
                </div>
                <header className="row alt-bg" id="header">
                  <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                      <div className="navbar-header">
                        <a className="navbar-brand" href="https://demo.web3canvas.com/themeforest/proland/index_kickstarter.html#header"><img src="./ProLand - Product Landing Page Template_files/logo-white.png" className="white-logo" alt="" /><img src="./ProLand - Product Landing Page Template_files/logo.png" className="dark-logo" alt="" /></a>
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navbar" aria-expanded="false">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar" />
                          <span className="icon-bar" />
                          <span className="icon-bar" />
                        </button>
                      </div>
                      <div className="collapse navbar-collapse" id="main-navbar">
                        <a href="https://kickstarter.com/" className=" btn btn-warning pull-right hidden-sm hidden-xs">Back this project</a>
                        <ul className="nav navbar-nav navbar-right">
                          <li className><a href="https://demo.web3canvas.com/themeforest/proland/index_kickstarter.html#product">Product</a></li>
                          <li className><a href="https://demo.web3canvas.com/themeforest/proland/index_kickstarter.html#features">Features</a></li>
                          <li className><a href="https://demo.web3canvas.com/themeforest/proland/index_kickstarter.html#reviews">Reviews</a></li>
                          <li className="dropdown">
                            <a href="https://demo.web3canvas.com/themeforest/proland/index_kickstarter.html#" className="dropdown-toggle" data-toggle="dropdown">Pages <span className="caret" /></a>
                            <ul className="dropdown-menu">
                              <li><a href="https://demo.web3canvas.com/themeforest/proland/index.html">Pre-order (Email)</a></li>
                              <li><a href="https://demo.web3canvas.com/themeforest/proland/index_email.html">Email Signup (Mailchimp)</a></li>
                              <li><a href="https://demo.web3canvas.com/themeforest/proland/index_buy_paypal.html">Buy Now (PayPal)</a></li>
                              <li><a href="https://demo.web3canvas.com/themeforest/proland/index_kickstarter.html">Kickstarter Campaign</a></li>
                              <li><a href="https://demo.web3canvas.com/themeforest/proland/index_indegogo.html">Indegogo Campaign</a></li>
                              <li><a href="https://demo.web3canvas.com/themeforest/proland/index_boxed.html">Boxed Version</a></li>
                              <li><a href="https://demo.web3canvas.com/themeforest/proland/index_rtl.html">RTL Version</a></li>
                              <li><a href="https://demo.web3canvas.com/themeforest/proland/index_video.html">Video Background</a></li>
                              <li className="divider" />
                              <li><a href="https://demo.web3canvas.com/themeforest/proland/blog.html">Blog</a></li>
                              <li><a href="https://demo.web3canvas.com/themeforest/proland/blog-single.html">Blog Single</a></li>
                              <li><a href="https://demo.web3canvas.com/themeforest/proland/about.html">About Us</a></li>
                              <li><a href="https://demo.web3canvas.com/themeforest/proland/faq.html">FAQ</a></li>
                              <li><a href="https://demo.web3canvas.com/themeforest/proland/shortcodes.html">Shortcodes</a></li>
                            </ul>
                          </li>
                          <li className><a href="https://demo.web3canvas.com/themeforest/proland/index_kickstarter.html#contact">contact</a></li>
                        </ul>
                      </div>
                    </div>
                  </nav>

                  <div className="top-banner row m0 text-center">
                    <div className="container">

                      <div className="row">
                        <div className="col-md-7 split-header text-left">
                          <h2>The Watch</h2>
                          <p>Holisticly incentivize revolutionary collaboration and idea sharing before cost effective users. Actual focused services before highly efficient human capital. </p>
                          <a href="https://kickstarter.com/" target="_blank" className="btn btn-kickstarter btn-lg">Back us on <img src="./ProLand - Product Landing Page Template_files/kickstarter.png" alt="kickstarter" /></a>
                        </div>
                        <div className="col-md-5">
                          <div className="play-video-block m-b-100-sm">
                            <a href="https://www.youtube.com/watch?v=dPL1-8ypnEs" className="video">
                              <img src="./ProLand - Product Landing Page Template_files/video-thumb.png" alt="Video" className="img-responsive video-thumb" />
                              <img src="./ProLand - Product Landing Page Template_files/play-btn-big.png" alt="play" className="play-btn" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
                <section className="row the-product" id="product">
                  <div className="container">
                    <div className="row section-header wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                      <h2>NCR</h2>
                      <p>Introduce the product here. A small description about what it is and how it helps the user. You can also add some photos below.</p>
                    </div>
                    <div className="row apple-watch-note-feature text-center">
                      <img style={{width:400}} src={ncr} alt="" />
                      <div className="feature-note right top wow fadeInRight show-cont" style={{visibility: 'visible', animationName: 'fadeInRight'}}>
                        <div className="indicator">
                          <div className="plus-icon">
                            <span className="plus">+</span>
                          </div>
                        </div>
                        <div className="feature-name">
                          metalic strap
                        </div>
                      </div>
                      <div className="feature-note left top wow fadeInLeft show-cont" style={{visibility: 'visible', animationName: 'fadeInLeft'}}>
                        <div className="indicator">
                          <div className="plus-icon">
                            <span className="plus">+</span>
                          </div>
                        </div>
                        <div className="feature-name">
                          Gps tracker
                        </div>
                      </div>
                      <div className="feature-note right bottom wow fadeInUp show-cont" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                        <div className="indicator">
                          <div className="plus-icon">
                            <span className="plus">+</span>
                          </div>
                        </div>
                        <div className="feature-name">
                          Bluetooth 4.2
                        </div>
                      </div>
                      <div className="feature-note left bottom wow fadeInLeft show-cont" style={{visibility: 'visible', animationName: 'fadeInLeft'}}>
                        <div className="indicator">
                          <div className="plus-icon">
                            <span className="plus">+</span>
                          </div>
                        </div>
                        <div className="feature-name">
                          water resistant
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="row how-it-works">
                  <div className="container">
                    <div className="row section-header v2 wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                      <h2>how it works</h2>
                      <p>Everybody loves tech gadgets, But our’s is different. Here is how it works. Its should be simple. Add how easy is to install your product</p>
                    </div>
                    <div className="row work-processes">
                      <div className="col-sm-4 work-process wow fadeIn" style={{visibility: 'visible', animationName: 'fadeIn'}}>
                        <div className="row m0 process-icon">
                          <img src="./ProLand - Product Landing Page Template_files/desktop.png" alt="" />
                        </div>
                        <h3>Connect Device</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit.</p>
                      </div>
                      <div className="col-sm-4 work-process wow fadeIn" data-wow-delay="0.5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeIn'}}>
                        <div className="row m0 process-icon">
                          <img src="./ProLand - Product Landing Page Template_files/toggles.png" alt="" />
                        </div>
                        <h3>Configure it</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit.</p>
                      </div>
                      <div className="col-sm-4 work-process wow fadeIn" data-wow-delay="1s" style={{visibility: 'visible', animationDelay: '1s', animationName: 'fadeIn'}}>
                        <div className="row m0 process-icon">
                          <img src="./ProLand - Product Landing Page Template_files/trophy.png" alt="" />
                        </div>
                        <h3>Yay! Done.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit.</p>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="row the-benefits" id="features">
                  <div className="container">
                    <div className="row section-header wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                      <h2>The Benefits</h2>
                      <p>List out your product’s benefit here. A small description about what it is and how it helps the user. You can also add some icons.</p>
                    </div>
                    <div className="row benefit-notes">
                      <div className="col-sm-6 col-md-4 benefit wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                        <div className="media">
                          <div className="media-left">
                            <span><i className="li_location" /></span>
                          </div>
                          <div className="media-body">
                            <h4>GPS Tracking</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 benefit wow fadeInUp" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
                        <div className="media">
                          <div className="media-left">
                            <span><i className="li_heart" /></span>
                          </div>
                          <div className="media-body">
                            <h4>Heartbeat Analysis</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 benefit wow fadeInUp" data-wow-delay="0.6s" style={{visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp'}}>
                        <div className="media">
                          <div className="media-left">
                            <span><i className="li_lock" /></span>
                          </div>
                          <div className="media-body">
                            <h4>Security first</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 benefit wow fadeInUp" data-wow-delay="0.9s" style={{visibility: 'visible', animationDelay: '0.9s', animationName: 'fadeInUp'}}>
                        <div className="media">
                          <div className="media-left">
                            <span><i className="li_bulb" /></span>
                          </div>
                          <div className="media-body">
                            <h4>Innovative idea</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 benefit wow fadeInUp" data-wow-delay="1.2s" style={{visibility: 'visible', animationDelay: '1.2s', animationName: 'fadeInUp'}}>
                        <div className="media">
                          <div className="media-left">
                            <span><i className="li_banknote" /></span>
                          </div>
                          <div className="media-body">
                            <h4>Save your bills</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 benefit wow fadeInUp" data-wow-delay="1.5s" style={{visibility: 'visible', animationDelay: '1.5s', animationName: 'fadeInUp'}}>
                        <div className="media">
                          <div className="media-left">
                            <span><i className="li_lab" /></span>
                          </div>
                          <div className="media-body">
                            <h4>Proven technology</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="row left-right-contents">
                  <div className="container">
                    <div className="row ">
                      <div className="col-sm-12 col-md-4 col-md-push-4 text-center wow fadeIn" style={{visibility: 'visible', animationName: 'fadeIn'}}>
                        <img src="./ProLand - Product Landing Page Template_files/apple-watch-3.png" alt="" />
                      </div>
                      <div className="col-md-4 col-sm-6 col-md-pull-4 left-content">
                        <div className="media wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                          <div className="media-left">
                            <span><i className="li_key" /></span>
                          </div>
                          <div className="media-body">
                            <h4>Fast and secure</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                          </div>
                        </div>
                        <div className="media wow fadeInUp" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
                          <div className="media-left">
                            <span><i className="li_megaphone" /></span>
                          </div>
                          <div className="media-body">
                            <h4>Voice Assistant</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                          </div>
                        </div>
                        <div className="media wow fadeInUp" data-wow-delay="0.6s" style={{visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp'}}>
                          <div className="media-left">
                            <span><i className="li_diamond" /></span>
                          </div>
                          <div className="media-body">
                            <h4>Apps you love</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 right-content">
                        <div className="media wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                          <div className="media-left">
                            <span><i className="li_like" /></span>
                          </div>
                          <div className="media-body">
                            <h4>Stay in touch</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                          </div>
                        </div>
                        <div className="media wow fadeInUp" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
                          <div className="media-left">
                            <span><i className="li_user" /></span>
                          </div>
                          <div className="media-body">
                            <h4>Designed for you</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                          </div>
                        </div>
                        <div className="media wow fadeInUp" data-wow-delay="0.6s" style={{visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp'}}>
                          <div className="media-left">
                            <span><i className="li_clock" /></span>
                          </div>
                          <div className="media-body">
                            <h4>Precise timepiece</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="row our-collection">
                  <div className="container">
                    <div className="row section-header wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                      <h2>Our Collection</h2>
                      <p>You are unique. You have unique style and you need a unique watch for you. Choose from our collection of watches.</p>
                    </div>
                    <div className="row collections">
                      <div className="col-sm-6 col-md-3 item wow fadeIn" style={{visibility: 'visible', animationName: 'fadeIn'}}>
                        <div className="row m0 featured-img">
                          <img src="./ProLand - Product Landing Page Template_files/collection-1.jpg" alt="" />
                        </div>
                        <h4 className="title">Watch Limited Edition</h4>
                        <h5 className="category">Stainless steel case</h5>
                        <h4 className="price">$399</h4>
                        <a href="https://demo.web3canvas.com/themeforest/proland/index_kickstarter.html#product-choose" className="btn">CHOOSE</a>
                      </div>
                      <div className="col-sm-6 col-md-3 item wow fadeIn" data-wow-delay="0.5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeIn'}}>
                        <div className="row m0 featured-img">
                          <img src="./ProLand - Product Landing Page Template_files/collection-2.jpg" alt="" />
                        </div>
                        <h4 className="title">Watch Bracelet</h4>
                        <h5 className="category">White strap &amp; Stainless steel</h5>
                        <h4 className="price">$299</h4>
                        <a href="https://demo.web3canvas.com/themeforest/proland/index_kickstarter.html#product-choose" className="btn">CHOOSE</a>
                      </div>
                      <div className="col-sm-6 col-md-3 item wow fadeIn" data-wow-delay="1s" style={{visibility: 'visible', animationDelay: '1s', animationName: 'fadeIn'}}>
                        <div className="row m0 featured-img">
                          <img src="./ProLand - Product Landing Page Template_files/collection-3.jpg" alt="" />
                        </div>
                        <h4 className="title">Watch Original</h4>
                        <h5 className="category">The FirstWatch ever released</h5>
                        <h4 className="price">$249</h4>
                        <a href="https://demo.web3canvas.com/themeforest/proland/index_kickstarter.html#product-choose" className="btn">CHOOSE</a>
                      </div>
                      <div className="col-sm-6 col-md-3 item wow fadeIn" data-wow-delay="1.5s" style={{visibility: 'visible', animationDelay: '1.5s', animationName: 'fadeIn'}}>
                        <div className="row m0 featured-img">
                          <img src="./ProLand - Product Landing Page Template_files/collection-4.jpg" alt="" />
                        </div>
                        <h4 className="title">Watch Soprts Edition</h4>
                        <h5 className="category">Water proof and Fitness tracking</h5>
                        <h4 className="price">$399</h4>
                        <a href="https://demo.web3canvas.com/themeforest/proland/index_kickstarter.html#product-choose" className="btn">CHOOSE</a>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="row the-watch">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-5 col-md-offset-1 text-center the-watch-img wow zoomIn" style={{visibility: 'visible', animationName: 'zoomIn'}}>
                        <img src="./ProLand - Product Landing Page Template_files/the-watch.png" alt="" className="img-responsive" />
                      </div>
                      <div className="col-md-6 the-watch-features">
                        <div className="row section-header v3 wow fadeIn" style={{visibility: 'visible', animationName: 'fadeIn'}}>
                          <h2>The Watch</h2>
                          <p>With an image in the side of this conetent, you can use this section to write about some cool thing about your product or its features.</p>
                        </div>
                        <ul className="nav">
                          <li className="wow fadeIn" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeIn'}}>Compatible with all devices</li>
                          <li className="wow fadeIn" data-wow-delay="0.4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeIn'}}>Android and iOS Support</li>
                          <li className="wow fadeIn" data-wow-delay="0.6s" style={{visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeIn'}}>Activity &amp; Health Tracker</li>
                          <li className="wow fadeIn" data-wow-delay="0.8s" style={{visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeIn'}}>Read &amp; reply to messages</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="row split-columns">
                  <div className="row m0 split-column wow fadeIn" style={{visibility: 'visible', animationName: 'fadeIn'}}>
                    <div className="col-sm-6 image text-right">
                      <img src="./ProLand - Product Landing Page Template_files/split-1.jpg" alt="" />
                    </div>
                    <div className="col-sm-6 texts">
                      <div className="texts-inner row m0">
                        <h2>Every Apps you wanted</h2>
                        <p>You won’t just send and receive messages, calls, and mail more easily and efficiently. You’ll express yourself in unique, fun, and more personal ways. Communicating with Watch is discreet, sophisticated, and nuanced. a whole new way to connect with others.</p>
                      </div>
                    </div>
                  </div>
                  <div className="row m0 split-column wow fadeIn" style={{visibility: 'visible', animationName: 'fadeIn'}}>
                    <div className="col-sm-6 col-sm-push-6 image">
                      <img src="./ProLand - Product Landing Page Template_files/split-2.jpg" alt="" />
                    </div>
                    <div className="col-sm-6 col-sm-pull-6 texts">
                      <div className="texts-inner row m0">
                        <h2>Health and Fitness</h2>
                        <p>Fitness isn’t just about running, biking, or hitting the gym. It’s also about being active throughout the day. Watch measures all the ways you move, such as walking the dog, taking the stairs, or playing with your kids. It even keeps track of when you stand up.</p>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="row reviews" id="reviews">
                  <div className="container">
                    <div className="row section-header wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                      <h2>Reviews</h2>
                      <p>Don’t take our word,. See what our experts says about the watch. We have got over 1000s of positive reviews.</p>
                    </div>
                    <div className="row">
                      <div className="review col-sm-4 wow fadeIn" style={{visibility: 'visible', animationName: 'fadeIn'}}>
                        <img src="./ProLand - Product Landing Page Template_files/quote.png" alt="" className="review-sign" />
                        <p>The Watch is the nicest smartwatch available, but it's more status symbol than wearable revolutionary. Most of the Watch's features are great.</p>
                        <img src="./ProLand - Product Landing Page Template_files/reviewer1.png" alt="" className="reviewer" />
                      </div>
                      <div className="review col-sm-4 wow fadeIn" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeIn'}}>
                        <img src="./ProLand - Product Landing Page Template_files/quote.png" alt="" className="review-sign" />
                        <p>Watch is the most ambitious, well constructed smartwatch ever seen, but first-gen shortfalls make it feel more like a fashionable toy than a necessary tool.</p>
                        <img src="./ProLand - Product Landing Page Template_files/reviewer2.png" alt="" className="reviewer" />
                      </div>
                      <div className="review col-sm-4 wow fadeIn" data-wow-delay="0.6s" style={{visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeIn'}}>
                        <img src="./ProLand - Product Landing Page Template_files/quote.png" alt="" className="review-sign" />
                        <p>Watch is the best smartwatch we’ve used, and the first that feels friendly and has character. Watch OS 2.0 adds needed app and Siri abilities.</p>
                        <img src="./ProLand - Product Landing Page Template_files/reviewer3.png" alt="" className="reviewer" />
                      </div>
                    </div>
                  </div>
                </section>
                <section className="row  featured-on">
                  <div className="container">
                    <div className="row">
                      <h3>As featured on</h3>
                      <ul className="nav nav-justified">
                        <li className="wow fadeInUp" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}><img src="./ProLand - Product Landing Page Template_files/featured1.png" alt="" /></li>
                        <li className="wow fadeInUp" data-wow-delay="0.4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp'}}><img src="./ProLand - Product Landing Page Template_files/featured2.png" alt="" /></li>
                        <li className="wow fadeInUp" data-wow-delay="0.6s" style={{visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp'}}><img src="./ProLand - Product Landing Page Template_files/featured3.png" alt="" /></li>
                        <li className="wow fadeInUp" data-wow-delay="0.8s" style={{visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInUp'}}><img src="./ProLand - Product Landing Page Template_files/featured4.png" alt="" /></li>
                        <li className="wow fadeInUp" data-wow-delay="1s" style={{visibility: 'visible', animationDelay: '1s', animationName: 'fadeInUp'}}><img src="./ProLand - Product Landing Page Template_files/featured5.png" alt="" /></li>
                        <li className="wow fadeInUp" data-wow-delay="1.2s" style={{visibility: 'visible', animationDelay: '1.2s', animationName: 'fadeInUp'}}><img src="./ProLand - Product Landing Page Template_files/featured6.png" alt="" /></li>
                      </ul>
                    </div>
                  </div>
                </section>
                <section className="row faqs">
                  <div className="container">
                    <div className="row section-header wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                      <h2>faq</h2>
                      <p>Got questions? We’ve got answers. If you have some other questions, feel free to send us an email to <a href="https://demo.web3canvas.com/themeforest/proland/index_kickstarter.html#">hello@product.com</a></p>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 faq wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                        <h4>What is Watch? How it works?</h4>
                        <p>Watch took center stage at this year's Product Show with a preview of watch OS 2. The next generation of Watch software is packed with features that just might turn the device from a nice-to-have into a must-have. If you already own an Apple Watch, you'll have to live with the old software until fall. You’ll love it at the first use.</p>
                      </div>
                      <div className="col-sm-6 faq wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                        <h4>How the watch is made?</h4>
                        <p>Watch has an anodized aluminum case (which is lighter than stainless steel) in silver or space gray, and the face is Ion-X glass, which also designed to be hard and rugged (as well as a little bit lighter) than the sapphire. It’s definitely the lightest of the three Apple Watch editions, making it an ideal exercise companion. </p>
                      </div>
                      <div className="col-sm-6 faq wow fadeInUp" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
                        <h4>Can I swap out the watch band?</h4>
                        <p>Absolutely. Watch comes with six bands that are easy to mix and match any band with any watch. You can swap them out as your heart desires without the aid of any tools—as long as the band and watch are the same size. (The Leather Loop band, for example, only fits 42mm watches, not the smaller 38mm size.) </p>
                      </div>
                      <div className="col-sm-6 faq wow fadeInUp" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
                        <h4>So it’s a watch and a fitness tracker?</h4>
                        <p>The accelerometer lets the watch count your steps, and it extrapolate distance on its own, or rely on the GPS in the paired Phone to trace your exact route. That step data comes in handy for two of the apps included on the watch: Activity and Workout. Both of the watch’s fitness apps sync data back to the Health and Fitness apps on your Phone.</p>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="row tech-specs">
                  <div className="container">
                    <div className="row section-header wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                      <h2>tech specs</h2>
                      <p>Need more info? Please have a look at the tech specs of the watch. We’ve used Latest technology &amp; quality materials</p>
                    </div>
                    <div className="row tech-specs-row">
                      <div className="col-sm-6 col-md-4 tech-spec wow fadeIn" data-wow-delay="0s" style={{visibility: 'visible', animationDelay: '0s', animationName: 'fadeIn'}}>
                        <h4>Compatibility</h4>
                        <ul className="nav">
                          <li>iPhone iOS 7 &amp; up</li>
                          <li>Android 4.3 &amp; uptexts</li>
                          <li>Bluetooth 4.0</li>
                          <li>Notification for calls / texts</li>
                        </ul>
                      </div>
                      <div className="col-sm-6 col-md-4 tech-spec wow fadeIn" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeIn'}}>
                        <h4>App</h4>
                        <ul className="nav">
                          <li>Set daily goals</li>
                          <li>Analyze history</li>
                          <li>Sync to phone &amp; cloud</li>
                          <li>Connect to Apple health kit</li>
                          <li>Connect to Google fit</li>
                          <li>Watch firmware upgrade</li>
                        </ul>
                      </div>
                      <div className="col-sm-6 col-md-4 tech-spec wow fadeIn" data-wow-delay="0.6s" style={{visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeIn'}}>
                        <h4>Vibration silent alarms</h4>
                        <ul className="nav">
                          <li>Phone notifications</li>
                          <li>Daily goal reached</li>
                          <li>Daily wake-up alarm</li>
                          <li>Location assistance</li>
                          <li>Accessiblity features</li>
                        </ul>
                      </div>
                      <div className="col-sm-6 col-md-4 tech-spec wow fadeIn" data-wow-delay="0.9s" style={{visibility: 'visible', animationDelay: '0.9s', animationName: 'fadeIn'}}>
                        <h4>Watch</h4>
                        <ul className="nav">
                          <li>12.6mm thickness</li>
                          <li>3.16L stainless steel case</li>
                          <li>40mm diameter</li>
                          <li>5 ATM water resistant</li>
                          <li>Sapphire glass crystal</li>
                        </ul>
                      </div>
                      <div className="col-sm-6 col-md-4 tech-spec wow fadeIn" data-wow-delay="1.2s" style={{visibility: 'visible', animationDelay: '1.2s', animationName: 'fadeIn'}}>
                        <h4>Straps</h4>
                        <ul className="nav">
                          <li>Italian leather with natural lining</li>
                          <li>Comfort sport fabric</li>
                          <li>Quick-release pins</li>
                        </ul>
                      </div>
                      <div className="col-sm-6 col-md-4 tech-spec wow fadeIn" data-wow-delay="1.5s" style={{visibility: 'visible', animationDelay: '1.5s', animationName: 'fadeIn'}}>
                        <h4>Activity tracking</h4>
                        <ul className="nav">
                          <li>Step counting</li>
                          <li>Distance</li>
                          <li>Calories burned</li>
                          <li>Swimming (strokes)</li>
                        </ul>
                      </div>
                      <div className="col-sm-6 col-md-4 tech-spec wow fadeIn" data-wow-delay="1.8s" style={{visibility: 'visible', animationDelay: '1.8s', animationName: 'fadeIn'}}>
                        <h4>Timekeeping</h4>
                        <ul className="nav">
                          <li>Swiss ETA movement</li>
                          <li>Accurate, reliable</li>
                        </ul>
                      </div>
                      <div className="col-sm-6 col-md-4 tech-spec wow fadeIn" data-wow-delay="2.1s" style={{visibility: 'visible', animationDelay: '2.1s', animationName: 'fadeIn'}}>
                        <h4>Battery power</h4>
                        <ul className="nav">
                          <li>Standard CR2025 6+ months</li>
                          <li>Standard 364 for timekeeping 5+ years</li>
                          <li>Solar Power available as aupgrade</li>
                        </ul>
                      </div>
                      <div className="col-sm-6 col-md-4 tech-spec wow fadeIn" data-wow-delay="2.4s" style={{visibility: 'visible', animationDelay: '2.4s', animationName: 'fadeIn'}}>
                        <h4>Sensors</h4>
                        <ul className="nav">
                          <li>MEMS 3-axis accelerometer</li>
                          <li>Highly accurate</li>
                          <li>Low power consumption</li>
                        </ul>
                      </div>
                    </div>
                    <div className="row tech-specs-row">
                    </div>
                    <div className="row tech-specs-row">
                    </div>
                  </div>
                </section>
                <section className="row team">
                  <div className="container">
                    <div className="row section-header wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                      <h2>meet the team</h2>
                      <p>We are a small group of inverntors, hackers and designers from the differrent parts of the world on a mission.</p>
                    </div>
                    <div className="row team_members">
                      <div className="col-md-3 col-sm-6 member wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                        <div className="row m0 inner">
                          <div className="row m0 image">
                            <img src="./ProLand - Product Landing Page Template_files/team-1.jpg" alt="" />
                          </div>
                          <div className="texts row m0">
                            <h4>Gary Elliott</h4>
                            <h5>Co-Founder and CEO</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6 member wow fadeInUp" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
                        <div className="row m0 inner">
                          <div className="row m0 image">
                            <img src="./ProLand - Product Landing Page Template_files/team-2.jpg" alt="" />
                          </div>
                          <div className="texts row m0">
                            <h4>Jeffrey Allen</h4>
                            <h5>Co-Founder and CTO</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6 member wow fadeInUp" data-wow-delay="0.6s" style={{visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp'}}>
                        <div className="row m0 inner">
                          <div className="row m0 image">
                            <img src="./ProLand - Product Landing Page Template_files/team-3.jpg" alt="" />
                          </div>
                          <div className="texts row m0">
                            <h4>Sara Mendez</h4>
                            <h5>Lead Developer, Hacker</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6 member wow fadeInUp" data-wow-delay="0.9s" style={{visibility: 'visible', animationDelay: '0.9s', animationName: 'fadeInUp'}}>
                        <div className="row m0 inner">
                          <div className="row m0 image">
                            <img src="./ProLand - Product Landing Page Template_files/team-4.jpg" alt="" />
                          </div>
                          <div className="texts row m0">
                            <h4>Albert Castro</h4>
                            <h5>3D Designer &amp; Prototyper</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="row timeline">
                  <div className="container">
                    <div className="row section-header wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                      <h2>timeline</h2>
                      <p>Here’s a roadmap of our product to highlight the milestones from the initial phase to delivery and future updates.</p>
                    </div>
                    <div className="row timeline-row">
                      <div className="row m0 timeline-post">
                        <div className="bar-content">
                          <div className="inner">now</div>
                        </div>
                      </div>
                      <div className="row m0 timeline-post has-content wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                        <div className="col-sm-6 half-side date">
                          23 jan 2014
                        </div>
                        <div className="col-sm-6 half-side content">
                          <div className="inner">
                            <h4 className="title">Mass Production</h4>
                          </div>
                        </div>
                      </div>
                      <div className="row m0 timeline-post has-content odd wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                        <div className="col-sm-6 half-side date">
                          23 jan 2014
                        </div>
                        <div className="col-sm-6 half-side content">
                          <div className="inner">
                            <h4 className="title">Testing Pre-Production Samples</h4>
                          </div>
                        </div>
                      </div>
                      <div className="row m0 timeline-post has-content wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                        <div className="col-sm-6 half-side date">
                          23 jan 2014
                        </div>
                        <div className="col-sm-6 half-side content">
                          <div className="inner">
                            <h4 className="title">Croudfunding Campaign</h4>
                            <p>And an optional description. You may add little description of your milestone if you want.</p>
                          </div>
                        </div>
                      </div>
                      <div className="row m0 timeline-post has-content odd wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                        <div className="col-sm-6 half-side date">
                          23 jan 2014
                        </div>
                        <div className="col-sm-6 half-side content">
                          <div className="inner">
                            <h4 className="title">Preview at CES</h4>
                          </div>
                        </div>
                      </div>
                      <div className="row m0 timeline-post wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                        <div className="bar-content">
                          <div className="inner">2015</div>
                        </div>
                      </div>
                      <div className="row m0 timeline-post has-content wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                        <div className="col-sm-6 half-side date">
                          23 jan 2014
                        </div>
                        <div className="col-sm-6 half-side content">
                          <div className="inner">
                            <h4 className="title">3D Prototype &amp; Testing</h4>
                          </div>
                        </div>
                      </div>
                      <div className="row m0 timeline-post has-content odd wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                        <div className="col-sm-6 half-side date">
                          23 jan 2014
                        </div>
                        <div className="col-sm-6 half-side content">
                          <div className="inner">
                            <h4 className="title">Research and Development</h4>
                          </div>
                        </div>
                      </div>
                      <div className="row m0 timeline-post">
                        <div className="bar-content">
                          <div className="inner">idea</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="row mobile-app">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-6 col-sm-push-6 wow fadeIn" style={{visibility: 'visible', animationName: 'fadeIn'}}>
                        <h2>Mobile App for watch</h2>
                        <p>The smartwatch connects to your iPhone and other iOS devices using Bluetooth, alerting you to incoming calls, emails, messages and alerts. Customize your with over 1,000 watchapps found within the smartwatch app.</p>
                        <div className="row m0 downloads-btns">
                          <a href="https://demo.web3canvas.com/themeforest/proland/index_kickstarter.html#" className="dload-link"><img src="./ProLand - Product Landing Page Template_files/app-store.png" alt="" /></a>
                          <a href="https://demo.web3canvas.com/themeforest/proland/index_kickstarter.html#" className="dload-link"><img src="./ProLand - Product Landing Page Template_files/google-play.png" alt="" /></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-sm-pull-6 wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                        <img src="./ProLand - Product Landing Page Template_files/app-screen.png" alt="" className="mobile-img" />
                      </div>
                    </div>
                  </div>
                </section>
                <section className="row newsletter">
                  <div className="container">
                    <div className="row section-header wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                      <h2>newsletter</h2>
                      <p>Subscribe to our product newsletter to get notified when we launch the product or when we completed a milestone</p>
                    </div>
                    <form action="https://demo.web3canvas.com/themeforest/proland/php/subscribe.php" id="subscribeform" className="row newsletter-form" method="post" noValidate="novalidate">
                      <div className="input-group">
                        <input type="email" className="form-control" name="email" placeholder="Enter Your Email Address" />
                        <span className="input-group-addon">
                          <button type="submit" id="js-subscribe-btn"><img src="./ProLand - Product Landing Page Template_files/right-angle-white.png" alt="" /></button>
                        </span>
                      </div>
                      <div id="js-subscribe-result" className="text-center" data-success-msg="Almost finished. Please check your email and verify." data-error-msg="Oops. Something went wrong.">
                        <p>
                          <img src="./ProLand - Product Landing Page Template_files/protect.png" alt="" />No Spam. We Promise. Unsubscribe anytime.
                        </p>
                      </div>
                    </form>
                  </div>
                </section>
                <section className="row contact" id="contact">
                  <div id="mapBox" className="row m0" data-lat="37.3818288" data-lon="-122.0636325" data-zoom={15} style={{position: 'relative', overflow: 'hidden'}}><div style={{height: '100%', width: '100%', position: 'absolute', top: '0px', left: '0px', backgroundColor: 'rgb(229, 227, 223)'}}><div className="gm-style" style={{position: 'absolute', zIndex: 0, left: '0px', top: '0px', height: '100%', width: '100%', padding: '0px', borderWidth: '0px', margin: '0px'}}><div tabIndex={0} aria-label="Map" aria-roledescription="map" role="group" style={{position: 'absolute', zIndex: 0, left: '0px', top: '0px', height: '100%', width: '100%', padding: '0px', borderWidth: '0px', margin: '0px', cursor: 'url("https://maps.gstatic.com/mapfiles/openhand_8_8.cur"), default', touchAction: 'pan-x pan-y'}}><div style={{zIndex: 1, position: 'absolute', left: '50%', top: '50%', width: '100%', transform: 'translate(0px, 0px)'}}><div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 100, width: '100%'}}><div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 0}}><div style={{position: 'absolute', zIndex: 985, transform: 'matrix(1, 0, 0, 1, -175, -219)'}}><div style={{position: 'absolute', left: '0px', top: '-256px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '-256px', top: '-256px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '-256px', top: '-512px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '0px', top: '-512px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '256px', top: '-512px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '256px', top: '-256px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '256px', top: '0px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '0px', top: '0px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '-256px', top: '0px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '-512px', top: '0px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '-512px', top: '-256px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '-512px', top: '-512px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '512px', top: '-512px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '512px', top: '-256px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '512px', top: '0px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '-768px', top: '0px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '-768px', top: '-256px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '-768px', top: '-512px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '768px', top: '-512px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '768px', top: '-256px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '768px', top: '0px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '512px', top: '256px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '256px', top: '256px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '0px', top: '256px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '-256px', top: '256px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '768px', top: '256px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div><div style={{position: 'absolute', left: '-512px', top: '256px', width: '256px', height: '256px'}}><div style={{width: '256px', height: '256px'}} /></div></div></div></div><div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 101, width: '100%'}} /><div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 102, width: '100%'}} /><div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 103, width: '100%'}} /><div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 0}}><div style={{position: 'absolute', zIndex: 985, transform: 'matrix(1, 0, 0, 1, -175, -219)'}}><div style={{position: 'absolute', left: '-256px', top: '-512px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="./ProLand - Product Landing Page Template_files/vt" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '0px', top: '-512px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="./ProLand - Product Landing Page Template_files/vt(1)" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '0px', top: '-256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="./ProLand - Product Landing Page Template_files/vt(2)" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '-256px', top: '-256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="./ProLand - Product Landing Page Template_files/vt(3)" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '256px', top: '-256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="./ProLand - Product Landing Page Template_files/vt(4)" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '0px', top: '0px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="./ProLand - Product Landing Page Template_files/vt(5)" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '256px', top: '-512px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="./ProLand - Product Landing Page Template_files/vt(6)" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '256px', top: '0px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="./ProLand - Product Landing Page Template_files/vt(7)" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '-256px', top: '0px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="./ProLand - Product Landing Page Template_files/vt(8)" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '512px', top: '-512px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="./ProLand - Product Landing Page Template_files/vt(9)" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '-512px', top: '0px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="./ProLand - Product Landing Page Template_files/vt(10)" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '-512px', top: '-512px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="./ProLand - Product Landing Page Template_files/vt(11)" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '-512px', top: '-256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="./ProLand - Product Landing Page Template_files/vt(12)" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '512px', top: '0px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="./ProLand - Product Landing Page Template_files/vt(13)" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '512px', top: '-256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="./ProLand - Product Landing Page Template_files/vt(14)" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '-768px', top: '0px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="./ProLand - Product Landing Page Template_files/vt(15)" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '-768px', top: '-256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="./ProLand - Product Landing Page Template_files/vt(16)" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '768px', top: '-512px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="./ProLand - Product Landing Page Template_files/vt(17)" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '-768px', top: '-512px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="./ProLand - Product Landing Page Template_files/vt(18)" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '768px', top: '-256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="./ProLand - Product Landing Page Template_files/vt(19)" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '768px', top: '0px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="./ProLand - Product Landing Page Template_files/vt(20)" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '-256px', top: '256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="./ProLand - Product Landing Page Template_files/vt(21)" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '-768px', top: '256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="./ProLand - Product Landing Page Template_files/vt(22)" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '-512px', top: '256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="./ProLand - Product Landing Page Template_files/vt(23)" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '256px', top: '256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="./ProLand - Product Landing Page Template_files/vt(24)" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '0px', top: '256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="./ProLand - Product Landing Page Template_files/vt(25)" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '768px', top: '256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="./ProLand - Product Landing Page Template_files/vt(26)" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '512px', top: '256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="./ProLand - Product Landing Page Template_files/vt(27)" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div></div></div></div><div className="gm-style-pbc" style={{zIndex: 2, position: 'absolute', height: '100%', width: '100%', padding: '0px', borderWidth: '0px', margin: '0px', left: '0px', top: '0px', opacity: 0, transitionDuration: '0.8s'}}><p className="gm-style-pbt" /></div><div style={{zIndex: 3, position: 'absolute', height: '100%', width: '100%', padding: '0px', borderWidth: '0px', margin: '0px', left: '0px', top: '0px', touchAction: 'pan-x pan-y'}}><div style={{zIndex: 4, position: 'absolute', left: '50%', top: '50%', width: '100%', transform: 'translate(0px, 0px)'}}><div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 104, width: '100%'}} /><div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 105, width: '100%'}} /><div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 106, width: '100%'}} /><div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 107, width: '100%'}} /></div></div></div><iframe aria-hidden="true" frameBorder={0} tabIndex={-1} style={{zIndex: -1, position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px', border: 'none'}} src="./ProLand - Product Landing Page Template_files/saved_resource.html" /><div style={{pointerEvents: 'none', width: '100%', height: '100%', boxSizing: 'border-box', position: 'absolute', zIndex: 1000002, opacity: 0, border: '2px solid rgb(26, 115, 232)'}} /><div><div className="gmnoprint gm-bundled-control" draggable="false" controlwidth={40} controlheight={81} style={{margin: '10px', userSelect: 'none', position: 'absolute', left: '0px', top: '0px'}}><div className="gmnoprint" controlwidth={40} controlheight={81} style={{position: 'absolute', left: '0px', top: '0px'}}><div draggable="false" style={{userSelect: 'none', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px', borderRadius: '2px', cursor: 'pointer', backgroundColor: 'rgb(255, 255, 255)', width: '40px', height: '81px'}}><button draggable="false" title="Zoom avant" aria-label="Zoom avant" type="button" className="gm-control-active" style={{background: 'none', display: 'block', border: '0px', margin: '0px', padding: '0px', textTransform: 'none', appearance: 'none', position: 'relative', cursor: 'pointer', userSelect: 'none', overflow: 'hidden', width: '40px', height: '40px', top: '0px', left: '0px'}}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M18%207h-7V0H7v7H0v4h7v7h4v-7h7z%22/%3E%3C/svg%3E" alt="" style={{height: '18px', width: '18px'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M18%207h-7V0H7v7H0v4h7v7h4v-7h7z%22/%3E%3C/svg%3E" alt="" style={{height: '18px', width: '18px'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M18%207h-7V0H7v7H0v4h7v7h4v-7h7z%22/%3E%3C/svg%3E" alt="" style={{height: '18px', width: '18px'}} /></button><div style={{position: 'relative', overflow: 'hidden', width: '30px', height: '1px', margin: '0px 5px', backgroundColor: 'rgb(230, 230, 230)', top: '0px'}} /><button draggable="false" title="Zoom arrière" aria-label="Zoom arrière" type="button" className="gm-control-active" style={{background: 'none', display: 'block', border: '0px', margin: '0px', padding: '0px', textTransform: 'none', appearance: 'none', position: 'relative', cursor: 'pointer', userSelect: 'none', overflow: 'hidden', width: '40px', height: '40px', top: '0px', left: '0px'}}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%207h18v4H0V7z%22/%3E%3C/svg%3E" alt="" style={{height: '18px', width: '18px'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%207h18v4H0V7z%22/%3E%3C/svg%3E" alt="" style={{height: '18px', width: '18px'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%207h18v4H0V7z%22/%3E%3C/svg%3E" alt="" style={{height: '18px', width: '18px'}} /></button></div></div></div></div><div /><div /><div /><div><button draggable="false" title="Passer en plein écran" aria-label="Passer en plein écran" type="button" className="gm-control-active gm-fullscreen-control" style={{background: 'none rgb(255, 255, 255)', border: '0px', margin: '10px', padding: '0px', textTransform: 'none', appearance: 'none', position: 'absolute', cursor: 'pointer', userSelect: 'none', borderRadius: '2px', height: '40px', width: '40px', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px', overflow: 'hidden', top: '0px', right: '0px'}}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%200v6h2V2h4V0H0zm16%200h-4v2h4v4h2V0h-2zm0%2016h-4v2h6v-6h-2v4zM2%2012H0v6h6v-2H2v-4z%22/%3E%3C/svg%3E" alt="" style={{height: '18px', width: '18px'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%200v6h2V2h4V0H0zm16%200h-4v2h4v4h2V0h-2zm0%2016h-4v2h6v-6h-2v4zM2%2012H0v6h6v-2H2v-4z%22/%3E%3C/svg%3E" alt="" style={{height: '18px', width: '18px'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%200v6h2V2h4V0H0zm16%200h-4v2h4v4h2V0h-2zm0%2016h-4v2h6v-6h-2v4zM2%2012H0v6h6v-2H2v-4z%22/%3E%3C/svg%3E" alt="" style={{height: '18px', width: '18px'}} /></button></div><div /><div /><div /><div /><div><div className="gmnoprint gm-bundled-control gm-bundled-control-on-bottom" draggable="false" controlwidth={0} controlheight={0} style={{margin: '10px', userSelect: 'none', position: 'absolute', display: 'none', bottom: '14px', right: '0px'}}><div className="gmnoprint" controlwidth={40} controlheight={40} style={{display: 'none', position: 'absolute'}}><div style={{backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px', borderRadius: '2px', width: '40px', height: '40px'}}><button draggable="false" title="Faire pivoter la carte dans le sens des aiguilles d'une montre" aria-label="Faire pivoter la carte dans le sens des aiguilles d'une montre" type="button" className="gm-control-active" style={{background: 'none', display: 'none', border: '0px', margin: '0px', padding: '0px', textTransform: 'none', appearance: 'none', position: 'relative', cursor: 'pointer', userSelect: 'none', left: '0px', top: '0px', overflow: 'hidden', width: '40px', height: '40px'}}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E" style={{width: '20px', height: '20px'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E" style={{width: '20px', height: '20px'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E" style={{width: '20px', height: '20px'}} /></button><div style={{position: 'relative', overflow: 'hidden', width: '30px', height: '1px', margin: '0px 5px', backgroundColor: 'rgb(230, 230, 230)', display: 'none'}} /><button draggable="false" title="Faire pivoter la carte dans le sens inverse des aiguilles d'une montre" aria-label="Faire pivoter la carte dans le sens inverse des aiguilles d'une montre" type="button" className="gm-control-active" style={{background: 'none', display: 'none', border: '0px', margin: '0px', padding: '0px', textTransform: 'none', appearance: 'none', position: 'relative', cursor: 'pointer', userSelect: 'none', left: '0px', top: '0px', overflow: 'hidden', width: '40px', height: '40px', transform: 'scaleX(-1)'}}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E" style={{width: '20px', height: '20px'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E" style={{width: '20px', height: '20px'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E" style={{width: '20px', height: '20px'}} /></button><div style={{position: 'relative', overflow: 'hidden', width: '30px', height: '1px', margin: '0px 5px', backgroundColor: 'rgb(230, 230, 230)', display: 'none'}} /><button draggable="false" title="Incliner la carte" aria-label="Incliner la carte" type="button" className="gm-tilt gm-control-active" style={{background: 'none', display: 'block', border: '0px', margin: '0px', padding: '0px', textTransform: 'none', appearance: 'none', position: 'relative', cursor: 'pointer', userSelect: 'none', top: '0px', left: '0px', overflow: 'hidden', width: '40px', height: '40px'}}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2016%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2016h8V9H0v7zm10%200h8V9h-8v7zM0%207h8V0H0v7zm10-7v7h8V0h-8z%22/%3E%3C/svg%3E" style={{width: '18px'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2016%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2016h8V9H0v7zm10%200h8V9h-8v7zM0%207h8V0H0v7zm10-7v7h8V0h-8z%22/%3E%3C/svg%3E" style={{width: '18px'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2016%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2016h8V9H0v7zm10%200h8V9h-8v7zM0%207h8V0H0v7zm10-7v7h8V0h-8z%22/%3E%3C/svg%3E" style={{width: '18px'}} /></button></div></div></div></div><div><div style={{marginLeft: '5px', marginRight: '5px', zIndex: 1000000, position: 'absolute', left: '0px', bottom: '0px'}}><a target="_blank" rel="noopener" href="https://maps.google.com/maps?ll=37.371406,-122.061586&z=15&t=m&hl=fr-FR&gl=US&mapclient=apiv3" title="Ouvrir cette zone dans Google Maps (dans une nouvelle fenêtre)" style={{position: 'static', overflow: 'visible', float: 'none', display: 'inline'}}><div style={{width: '66px', height: '26px', cursor: 'pointer'}}><img alt="" src="./ProLand - Product Landing Page Template_files/google_white5.png" draggable="false" style={{position: 'absolute', left: '0px', top: '0px', width: '66px', height: '26px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px'}} /></div></a></div></div><div /><div><div className="gmnoprint" style={{zIndex: 1000001, position: 'absolute', right: '378px', bottom: '0px', width: '193px'}}><div draggable="false" className="gm-style-cc" style={{userSelect: 'none', height: '14px', lineHeight: '14px'}}><div style={{opacity: '0.7', width: '100%', height: '100%', position: 'absolute'}}><div style={{width: '1px'}} /><div style={{backgroundColor: 'rgb(245, 245, 245)', width: 'auto', height: '100%', marginLeft: '1px'}} /></div><div style={{position: 'relative', paddingRight: '6px', paddingLeft: '6px', boxSizing: 'border-box', fontFamily: 'Roboto, Arial, sans-serif', fontSize: '10px', color: 'rgb(0, 0, 0)', whiteSpace: 'nowrap', direction: 'ltr', textAlign: 'right', verticalAlign: 'middle', display: 'inline-block'}}><button draggable="false" title="Données cartographiques" aria-label="Données cartographiques" type="button" style={{background: 'none', display: 'none', border: '0px', margin: '0px', padding: '0px', textTransform: 'none', appearance: 'none', position: 'relative', cursor: 'pointer', userSelect: 'none', color: 'rgb(0, 0, 0)', fontFamily: 'inherit'}}>Données cartographiques</button><span>Données cartographiques ©2021 Google</span></div></div></div><div draggable="false" className="gm-style-cc" style={{position: 'absolute', userSelect: 'none', height: '14px', lineHeight: '14px', right: '278px', bottom: '0px'}}><div style={{opacity: '0.7', width: '100%', height: '100%', position: 'absolute'}}><div style={{width: '1px'}} /><div style={{backgroundColor: 'rgb(245, 245, 245)', width: 'auto', height: '100%', marginLeft: '1px'}} /></div><div style={{position: 'relative', paddingRight: '6px', paddingLeft: '6px', boxSizing: 'border-box', fontFamily: 'Roboto, Arial, sans-serif', fontSize: '10px', color: 'rgb(0, 0, 0)', whiteSpace: 'nowrap', direction: 'ltr', textAlign: 'right', verticalAlign: 'middle', display: 'inline-block'}}><span>200 m&nbsp;</span><div style={{position: 'relative', display: 'inline-block', height: '8px', bottom: '-1px', width: '57px'}}><div style={{width: '100%', height: '4px', position: 'absolute', left: '0px', top: '0px'}} /><div style={{width: '4px', height: '8px', left: '0px', top: '0px', backgroundColor: 'rgb(255, 255, 255)'}} /><div style={{width: '4px', height: '8px', position: 'absolute', backgroundColor: 'rgb(255, 255, 255)', right: '0px', bottom: '0px'}} /><div style={{position: 'absolute', backgroundColor: 'rgb(102, 102, 102)', height: '2px', left: '1px', bottom: '1px', right: '1px'}} /><div style={{position: 'absolute', width: '2px', height: '6px', left: '1px', top: '1px', backgroundColor: 'rgb(102, 102, 102)'}} /><div style={{width: '2px', height: '6px', position: 'absolute', backgroundColor: 'rgb(102, 102, 102)', bottom: '1px', right: '1px'}} /></div></div></div><div className="gmnoprint gm-style-cc" draggable="false" style={{zIndex: 1000001, userSelect: 'none', height: '14px', lineHeight: '14px', position: 'absolute', right: '165px', bottom: '0px'}}><div style={{opacity: '0.7', width: '100%', height: '100%', position: 'absolute'}}><div style={{width: '1px'}} /><div style={{backgroundColor: 'rgb(245, 245, 245)', width: 'auto', height: '100%', marginLeft: '1px'}} /></div><div style={{position: 'relative', paddingRight: '6px', paddingLeft: '6px', boxSizing: 'border-box', fontFamily: 'Roboto, Arial, sans-serif', fontSize: '10px', color: 'rgb(0, 0, 0)', whiteSpace: 'nowrap', direction: 'ltr', textAlign: 'right', verticalAlign: 'middle', display: 'inline-block'}}><a href="https://www.google.com/intl/fr-FR_US/help/terms_maps.html" target="_blank" rel="noopener" style={{textDecoration: 'none', cursor: 'pointer', color: 'rgb(0, 0, 0)'}}>Conditions d'utilisation</a></div></div><div draggable="false" className="gm-style-cc" style={{userSelect: 'none', height: '14px', lineHeight: '14px', position: 'absolute', right: '0px', bottom: '0px'}}><div style={{opacity: '0.7', width: '100%', height: '100%', position: 'absolute'}}><div style={{width: '1px'}} /><div style={{backgroundColor: 'rgb(245, 245, 245)', width: 'auto', height: '100%', marginLeft: '1px'}} /></div><div style={{position: 'relative', paddingRight: '6px', paddingLeft: '6px', boxSizing: 'border-box', fontFamily: 'Roboto, Arial, sans-serif', fontSize: '10px', color: 'rgb(0, 0, 0)', whiteSpace: 'nowrap', direction: 'ltr', textAlign: 'right', verticalAlign: 'middle', display: 'inline-block'}}><a target="_blank" rel="noopener" title="Signaler à Google une erreur dans la carte routière ou les images" dir="ltr" href="https://www.google.com/maps/@37.3714062,-122.0615857,15z/data=!10m1!1e1!12b1?source=apiv3&rapsrc=apiv3" style={{fontFamily: 'Roboto, Arial, sans-serif', fontSize: '10px', color: 'rgb(0, 0, 0)', textDecoration: 'none', position: 'relative'}}>Signaler une erreur cartographique</a></div></div><div className="gmnoscreen" style={{position: 'absolute', right: '0px', bottom: '0px'}}><div style={{fontFamily: 'Roboto, Arial, sans-serif', fontSize: '11px', color: 'rgb(0, 0, 0)', direction: 'ltr', textAlign: 'right', backgroundColor: 'rgb(245, 245, 245)'}}>Données cartographiques ©2021 Google</div></div></div><div style={{backgroundColor: 'white', padding: '15px 21px', border: '1px solid rgb(171, 171, 171)', fontFamily: 'Roboto, Arial, sans-serif', color: 'rgb(34, 34, 34)', boxSizing: 'border-box', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 16px', zIndex: 10000002, display: 'none', width: '300px', height: '180px', position: 'absolute', left: '505px', top: '183px'}}><div style={{padding: '0px 0px 10px', fontSize: '16px', boxSizing: 'border-box'}}>Données cartographiques</div><div style={{fontSize: '13px'}}>Données cartographiques ©2021 Google</div><button draggable="false" title="Fermer" aria-label="Fermer" type="button" className="gm-ui-hover-effect" style={{background: 'none', display: 'block', border: '0px', margin: '0px', padding: '0px', textTransform: 'none', appearance: 'none', position: 'absolute', cursor: 'pointer', userSelect: 'none', top: '0px', right: '0px', width: '37px', height: '37px'}}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M19%206.41L17.59%205%2012%2010.59%206.41%205%205%206.41%2010.59%2012%205%2017.59%206.41%2019%2012%2013.41%2017.59%2019%2019%2017.59%2013.41%2012z%22/%3E%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22/%3E%3C/svg%3E" alt="" style={{pointerEvents: 'none', display: 'block', width: '13px', height: '13px', margin: '12px'}} /></button></div></div></div><div style={{backgroundColor: 'white', fontWeight: 500, fontFamily: 'Roboto, sans-serif', padding: '15px 25px', boxSizing: 'border-box', top: '5px', border: '1px solid rgba(0, 0, 0, 0.12)', borderRadius: '5px', left: '50%', maxWidth: '375px', position: 'absolute', transform: 'translateX(-50%)', width: 'calc(100% - 10px)', zIndex: 1}}><div><img alt="" src="./ProLand - Product Landing Page Template_files/google_gray.svg" draggable="false" style={{padding: '0px', margin: '0px', border: '0px', height: '17px', verticalAlign: 'middle', width: '52px', userSelect: 'none'}} /></div><div style={{lineHeight: '20px', margin: '15px 0px'}}><span style={{color: 'rgba(0, 0, 0, 0.87)', fontSize: '14px'}}>Impossible de charger Google&nbsp;Maps correctement sur cette page.</span></div><table style={{width: '100%'}}><tbody><tr><td style={{lineHeight: '16px', verticalAlign: 'middle'}}><a href="https://developers.google.com/maps/documentation/javascript/error-messages?utm_source=maps_js&utm_medium=degraded&utm_campaign=keyless#api-key-and-billing-errors" target="_blank" rel="noopener" style={{color: 'rgba(0, 0, 0, 0.54)', fontSize: '12px'}}>Ce site Web vous appartient&nbsp;?</a></td><td style={{textAlign: 'right'}}><button className="dismissButton">OK</button></td></tr></tbody></table></div></div>
                  <div className="flip-box-container row m0">
                    <div className="flip-box row m0 wow fadeIn" style={{visibility: 'visible', animationName: 'fadeIn'}}>
                      <div className="row contact-box flip-box-part">
                        <h2>get in touch</h2>
                        <ul className="nav">
                          <li><i className="fa fa-map-marker" />523 Sylvan Ave, 5th Floor
                            <br />Mountain View, CA 94041USA</li>
                          <li><i className="fa fa-phone" />+1 (234) 56789
                            <br />+1 987 654 3210</li>
                          <li><i className="fa fa-envelope" />support@watchland.com</li>
                        </ul>
                        <button className="flip-contact-box btn btn-block">contact us</button>
                      </div>
                      <div className="row contact-form flip-box-part">
                        <a href="javascript:void(0);" className="js-close-flip">×</a>
                        <form action="https://demo.web3canvas.com/themeforest/proland/php/contact.php" id="phpcontactform" method="POST" noValidate="novalidate">
                          <div className="row">
                            <div className="form-group col-sm-6">
                              <input type="text" name="name" className="form-control" placeholder="Name" required aria-required="true" />
                            </div>
                            <div className="form-group col-sm-6">
                              <input type="email" name="email" className="form-control" placeholder="Email Address" required aria-required="true" />
                            </div>
                          </div>
                          <div className="form-group">
                            <input type="text" name="subject" className="form-control" placeholder="Subject" required aria-required="true" />
                          </div>
                          <div className="form-group">
                            <textarea className="form-control" name="message" placeholder="Message" required aria-required="true" defaultValue={""} />
                          </div>
                          <button type="submit" id="js-contact-btn" className="btn btn-block">Send Message</button>
                          <div id="js-contact-result" data-success-msg="Form submitted successfully." data-error-msg="Oops. Something went wrong." />
                        </form>
                      </div>
                    </div>
                  </div>
                </section>
                <footer className="row">
                  <div className="container">
                    <div className="row m0 social-links">
                      <ul className="nav">
                        <li className="wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}><a href="https://demo.web3canvas.com/themeforest/proland/index_kickstarter.html#"><i className="fa fa-facebook" /></a></li>
                        <li className="wow fadeInUp" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp'}}><a href="https://demo.web3canvas.com/themeforest/proland/index_kickstarter.html#"><i className="fa fa-twitter" /></a></li>
                        <li className="wow fadeInUp" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}><a href="https://demo.web3canvas.com/themeforest/proland/index_kickstarter.html#"><i className="fa fa-linkedin" /></a></li>
                        <li className="wow fadeInUp" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp'}}><a href="https://demo.web3canvas.com/themeforest/proland/index_kickstarter.html#"><i className="fa fa-youtube" /></a></li>
                        <li className="wow fadeInUp" data-wow-delay="0.4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp'}}><a href="https://demo.web3canvas.com/themeforest/proland/index_kickstarter.html#"><i className="fa fa-google-plus" /></a></li>
                        <li className="wow fadeInUp" data-wow-delay="0.5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}><a href="https://demo.web3canvas.com/themeforest/proland/index_kickstarter.html#"><i className="fa fa-pinterest" /></a></li>
                      </ul>
                    </div>
                    <div className="row m0 menu-rights">
                      <ul className="nav footer-menu">
                        <li><a href="https://demo.web3canvas.com/themeforest/proland/about.html">About</a></li>
                        <li><a href="https://demo.web3canvas.com/themeforest/proland/terms-of-use.html">Terms of Use</a></li>
                        <li><a href="https://demo.web3canvas.com/themeforest/proland/privacy-policy.html">Privacy Policy</a></li>
                        <li><a href="https://demo.web3canvas.com/themeforest/proland/index_kickstarter.html#">Mobile App</a></li>
                        <li><a href="https://demo.web3canvas.com/themeforest/proland/presskit.zip">PressKit</a></li>
                      </ul>
                      <p>Copyright © 2016. Proland.
                        <br className="small-divide" /> All rights reserved</p>
                    </div>
                  </div>
                </footer>
                <div className="row product-box mfp-hide" id="product-choose">
                  <button className="mfp-close custom_close" title="Close (Esc)" type="button">×</button>
                  <div className="product-img-gallery">
                    <div id="product-imgs" className="carousel slide" data-ride="carousel">
                      <ol className="carousel-indicators">
                        <li data-target="#product-imgs" data-slide-to={0} className />
                        <li data-target="#product-imgs" data-slide-to={1} className />
                        <li data-target="#product-imgs" data-slide-to={2} className="active" />
                      </ol>
                      <div className="carousel-inner" role="listbox">
                        <div className="item">
                          <img src="./ProLand - Product Landing Page Template_files/the-watch-1.png" alt="watch-1" />
                        </div>
                        <div className="item active left">
                          <img src="./ProLand - Product Landing Page Template_files/the-watch-2.png" alt="watch-2" />
                        </div>
                        <div className="item next left">
                          <img src="./ProLand - Product Landing Page Template_files/the-watch-3.png" alt="watch-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-desc">
                    <form action="https://demo.web3canvas.com/themeforest/proland/php/pre-order.php" id="preorderform" className="choose-form row m0" method="get" data-redirect="none" noValidate="novalidate">
                      <div id="js-product-info" className="product-info">
                        <h4 className="name">Smart Watch</h4>
                        <h2 className="edition">Sports Edition</h2>
                        <h5 className="model">MODEL AS1500</h5>
                        <h2 className="price"><del>$349</del>$299 <span className="label label-default">early bird offer</span></h2>
                        <div className="row m0 description">
                          <p>8mm Silver Aluminum Case with Blue Sport Band. Its perfect fit for tracking fitness. 100% waterproof. Buy this limted edition sports edition.</p>
                        </div>
                        <div className="choose-options row m0" id="js-choose-color">
                          <div className="option">
                            <h4 className="form-label">Choose a color</h4>
                            <div className="row m0 colors">
                              <input type="radio" name="color" defaultValue="Blue" id="color-1" defaultChecked />
                              <label htmlFor="color-1" />
                              <input type="radio" name="color" defaultValue="Violet" id="color-2" />
                              <label htmlFor="color-2" />
                              <input type="radio" name="color" defaultValue="Magenta" id="color-3" />
                              <label htmlFor="color-3" />
                              <input type="radio" name="color" defaultValue="Yellow" id="color-4" />
                              <label htmlFor="color-4" />
                              <input type="radio" name="color" defaultValue="Green" id="color-5" />
                              <label htmlFor="color-5" />
                            </div>
                          </div>
                          <div className="option">
                            <h4 className="form-label">Qty</h4>
                            <div className="input-group bootstrap-touchspin"><span className="input-group-addon bootstrap-touchspin-prefix" style={{display: 'none'}} /><input type="text" defaultValue={1} name="Quantity" className="quanity form-control" style={{display: 'block'}} /><span className="input-group-addon bootstrap-touchspin-postfix" style={{display: 'none'}} /><span className="input-group-btn-vertical"><button className="btn btn-default bootstrap-touchspin-up" type="button"><i className="glyphicon glyphicon-plus" /></button><button className="btn btn-default bootstrap-touchspin-down" type="button"><i className="glyphicon glyphicon-minus" /></button></span></div>
                          </div>
                          <div className="option">
                            <h4 className="form-label">Size</h4>
                            <div className="btn-group bootstrap-select"><button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" title="M"><span className="filter-option pull-left">M</span>&nbsp;<span className="bs-caret"><span className="caret" /></span></button><div className="dropdown-menu open"><ul className="dropdown-menu inner" role="menu"><li data-original-index={0} className="selected"><a tabIndex={0} className style={{}} data-tokens="null"><span className="text">M</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={1}><a tabIndex={0} className style={{}} data-tokens="null"><span className="text">L</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={2}><a tabIndex={0} className style={{}} data-tokens="null"><span className="text">XL</span><span className="glyphicon glyphicon-ok check-mark" /></a></li></ul></div><select className="selectpicker" tabIndex={-98}>
                                <option value="m" selected>M</option>
                                <option value="l">L</option>
                                <option value="xl">XL</option>
                              </select></div>
                          </div>
                        </div>
                        <div className="submit-area row m0">
                          <a href="javscript:void(0);" className="btn btn-rounded btn-block" id="next-personal">pre-order now</a>
                        </div>
                      </div>
                      <div className="personal-info" id="js-personal-info">
                        <div className="form-group text-center"><a href="javscript:void(0);" className="btn" id="prev-product-info">Go Back</a></div>
                        <div className="row">
                          <div className="form-group col-sm-6">
                            <input type="text" name="First_Name" className="form-control" placeholder="First Name" required aria-required="true" />
                          </div>
                          <div className="form-group col-sm-6">
                            <input type="text" name="Last_Name" className="form-control" placeholder="Last Name" required aria-required="true" />
                          </div>
                        </div>
                        <div className="form-group">
                          <input type="email" name="Email" className="form-control" placeholder="Email Address" required aria-required="true" />
                        </div>
                        <div className="form-group">
                          <input type="text" name="Address_Line_1" className="form-control" placeholder="Address Line 1" required aria-required="true" />
                        </div>
                        <div className="form-group">
                          <input type="text" name="Address_Line_2" className="form-control" placeholder="Address Line 2" required aria-required="true" />
                        </div>
                        <div className="row">
                          <div className="form-group col-sm-6">
                            <input type="text" name="State" className="form-control" placeholder="State" required aria-required="true" />
                          </div>
                          <div className="form-group col-sm-6">
                            <input type="text" name="Zip_Code" className="form-control" placeholder="Zip Code" required aria-required="true" />
                          </div>
                        </div>
                        <div className="form-group">
                          <select className="form-control" name="Country" required aria-required="true">
                            <option selected value>Choose a country</option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Australia">Australia</option>
                            <option value="India">India</option>
                          </select>
                        </div>
                        <div className="submit-area-2 row m0">
                          <button type="submit" className="btn btn-rounded js-preorder-btn btn-block"><span>Finish Purchase</span></button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
    </div>
  );
}

export default App;
