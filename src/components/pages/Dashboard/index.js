import Layout from "../../layouts";
import Banner from "./Banner";
function Home() {


    return (
        <>
            <Layout title="Home Page">
                
            <Banner/>
                <section className="main-about common-sec">
                    <div className="logo-icon">
                        <img src="assets/images/logo-icon.svg" alt="logo-icon" />
                    </div>
                    <div className="sec-wp">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="about-image-wp">
                                        <div className="about-image-box big wow right-animation" data-wow-duration="1s" data-wow-delay="0.1s">
                                            <div className="about-image back-image" style={{ backgroundImage: "url(assets/images/about-big-image.jpg)" }}></div>
                                        </div>
                                        <div className="about-image-box small wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.2s">
                                            <div className="about-image back-image" style={{ backgroundImage: "url(assets/images/about-small-image.jpg)" }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-content wow left-animation" data-wow-duration="1s" data-wow-delay="0.1s">
                                        <div className="line-title">
                                            <h4 className="h4-title">About us</h4>
                                        </div>
                                        <h2 className="h2-title">Plan Your <span>Trip</span> with <span>Us</span></h2>
                                        <div className="about-content-text">
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small
                                                river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control
                                                about the blind texts it is an almost unorthographic. Italic Mountains, she had a last view back on the skyline</p>
                                        </div>
                                        <a href="about.html" title="Read More" className="sec-btn"><span>Read More</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="main-destination common-sec back-image" style={{ backgroundImage: "url(assets/images/wave-design.jpg)" }}>
                    <div className="sec-wp">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="sec-title wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.1s">
                                        <div className="line-title">
                                            <h4 className="h4-title">Amazing Destination</h4>
                                        </div>
                                        <h2 className="h2-title">Choose The <span>Destination</span> Just Right For <span>Your Vacation</span></h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.2s">
                                <div className="col-lg-8">
                                    <div className="destination-box">
                                        <a href="destination-detail.html">
                                            <div className="destination-box-image-wp">
                                                <div className="destination-box-image back-image" style={{ backgroundImage: "url(assets/images/destination-img1.jpg)" }}></div>
                                            </div>
                                            <div className="destination-box-content">
                                                <div className="destination-box-content-inner">
                                                    <h3 className="h3-title">Greece</h3>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="destination-box">
                                                <a href="destination-detail.html">
                                                    <div className="destination-box-image-wp">
                                                        <div className="destination-box-image back-image" style={{ backgroundImage: "url(assets/images/destination-img2.jpg)" }}></div>
                                                    </div>
                                                    <div className="destination-box-content">
                                                        <div className="destination-box-content-inner">
                                                            <h3 className="h3-title">Thailand</h3>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="destination-box">
                                                <a href="destination-detail.html">
                                                    <div className="destination-box-image-wp">
                                                        <div className="destination-box-image back-image" style={{ backgroundImage: "url(assets/images/destination-img3.jpg)" }}></div>
                                                    </div>
                                                    <div className="destination-box-content">
                                                        <div className="destination-box-content-inner">
                                                            <h3 className="h3-title">Switzerland</h3>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="destination-box big-height">
                                        <a href="destination-detail.html">
                                            <div className="destination-box-image-wp">
                                                <div className="destination-box-image back-image" style={{ backgroundImage: "url(assets/images/destination-img4.jpg)" }}></div>
                                            </div>
                                            <div className="destination-box-content">
                                                <div className="destination-box-content-inner">
                                                    <h3 className="h3-title">India</h3>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="destination-see-more">
                                        <a href="destination.html" title="See More" className="sec-btn"><span>View All</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="main-tour-offer">
                    <div className="tour-offer-top pt-70 bg-f6">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="sec-title wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.1s">
                                        <div className="line-title">
                                            <h4 className="h4-title">Amazing Offers</h4>
                                        </div>
                                        <h2 className="h2-title">Special <span>Deals</span> And Last Minute <span>Amazing Offers</span></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tour-offer-slider-wp pb-70">
                        <div className="container">
                            <div className="row tour-offer-slider wow left-animation" data-wow-duration="1s" data-wow-delay="0.1s">
                                <div className="col-lg-4">
                                    <div className="tour-offer-box">
                                        <a href="tour-detail.html">
                                            <div className="tour-offer-box-image-wp">
                                                <div className="tour-offer-box-image back-image" style={{ backgroundImage: "url(assets/images/offer-img1.jpg)" }}>
                                                    <span className="discount-label">22% off</span>
                                                </div>
                                            </div>
                                            <div className="tour-offer-box-content">
                                                <h4 className="h4-title">Cinque Terre, Italy</h4>
                                                <span className="price-label">$1200</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="tour-offer-box">
                                        <a href="tour-detail.html">
                                            <div className="tour-offer-box-image-wp">
                                                <div className="tour-offer-box-image back-image" style={{ backgroundImage: "url(assets/images/offer-img2.jpg)" }}>
                                                    <span className="discount-label">15% off</span>
                                                </div>
                                            </div>
                                            <div className="tour-offer-box-content">
                                                <h4 className="h4-title">Parthenon, Greece</h4>
                                                <span className="price-label">$2500</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="tour-offer-box">
                                        <a href="tour-detail.html">
                                            <div className="tour-offer-box-image-wp">
                                                <div className="tour-offer-box-image back-image" style={{ backgroundImage: "url(assets/images/offer-img3.jpg)" }}>
                                                    <span className="discount-label">38% off</span>
                                                </div>
                                            </div>
                                            <div className="tour-offer-box-content">
                                                <h4 className="h4-title">Jaisalmer Fort, Jaisalmer</h4>
                                                <span className="price-label">$750</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="tour-offer-box">
                                        <a href="tour-detail.html">
                                            <div className="tour-offer-box-image-wp">
                                                <div className="tour-offer-box-image back-image" style={{ backgroundImage: "url(assets/images/offer-img4.jpg)" }}>
                                                    <span className="discount-label">32% off</span>
                                                </div>
                                            </div>
                                            <div className="tour-offer-box-content">
                                                <h4 className="h4-title">JungGrenzgipfel, Thailand</h4>
                                                <span className="price-label">$970</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="tour-offer-box">
                                        <a href="tour-detail.html">
                                            <div className="tour-offer-box-image-wp">
                                                <div className="tour-offer-box-image back-image" style={{ backgroundImage: "url(assets/images/offer-img5.jpg)" }}>
                                                    <span className="discount-label">15% off</span>
                                                </div>
                                            </div>
                                            <div className="tour-offer-box-content">
                                                <h4 className="h4-title">Jungfrau Mountain, Switzerland</h4>
                                                <span className="price-label">$1280</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="main-highlight overlay back-image wow fadeup-animation" style={{ backgroundImage: "url(assets/images/highlight-image.jpg)" }} data-wow-duration="1s" data-wow-delay="0.1s">
                    <div className="highlight-bg-video">
                        <video loop muted autoplay>
                            <source src="assets/images/highlight-video.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="sec-wp">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="sec-title wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.3s">
                                        <h2 className="h2-title"><span>Traveling Highlights</span></h2>
                                        <h3 className="h3-title">Your New Traveling Idea</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="main-tour bg-f6 back-image" style={{ backgroundImage: "url(assets/images/white-map.png)" }}>
                    <div className="tour-services">
                        <div className="container">
                            <div className="tour-services-row wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.3s">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="tour-service-box">
                                            <div className="tour-service-icon">
                                                <img src="assets/images/tour-service-icon1.svg" alt="tour-service-icon1" />
                                            </div>
                                            <div className="tour-service-content">
                                                <h4 className="h4-title">700+ DESTINATIONS</h4>
                                                <p>Far far away, behind the word mountains, far countries Vokalia.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="tour-service-box">
                                            <div className="tour-service-icon">
                                                <img src="assets/images/tour-service-icon2.svg" alt="tour-service-icon2" />
                                            </div>
                                            <div className="tour-service-content">
                                                <h4 className="h4-title">BEST PRICE GUARANTEE</h4>
                                                <p>Far far away, behind the word mountains, far countries Vokalia.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="tour-service-box">
                                            <div className="tour-service-icon">
                                                <img src="assets/images/tour-service-icon3.svg" alt="tour-service-icon3" />
                                            </div>
                                            <div className="tour-service-content">
                                                <h4 className="h4-title">TOP NOTCH SUPPORT</h4>
                                                <p>Far far away, behind the word mountains, far countries Vokalia.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tour-sec pt-70">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="sec-title wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.1s">
                                        <div className="line-title">
                                            <h4 className="h4-title">Amazing Tours</h4>
                                        </div>
                                        <h2 className="h2-title">Trending, <span>Best Selling Tours</span> And Fun Destinations</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row tour-slider wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.2s">
                                <div className="col-lg-4">
                                    <div className="tour-box">
                                        <div className="tour-box-image back-image" style={{ backgroundImage: "url(assets/images/tour-box-image1.jpg)" }}></div>
                                        <div className="tour-box-content">
                                            <div className="tour-box-label">
                                                <div className="tour-box-inner-label">
                                                    <h4 className="h4-title">Italy</h4>
                                                </div>
                                            </div>
                                            <div className="tour-box-title">
                                                <h4 className="h4-title">Holiday Planners is a World Leading Online Tour Booking Platform</h4>
                                            </div>
                                            <div className="tour-box-description">
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                                            </div>
                                            <div className="tour-info-box">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="tour-info">
                                                            <div className="tour-info-icon">
                                                                <i className="fas fa-clock"></i>
                                                            </div>
                                                            <div className="tour-info-content">
                                                                <h5 className="h6-title">Duration</h5>
                                                                <p>2 days</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="tour-info">
                                                            <div className="tour-info-icon">
                                                                <i className="fas fa-user-friends"></i>
                                                            </div>
                                                            <div className="tour-info-content">
                                                                <h5 className="h6-title">Group Size</h5>
                                                                <p>6 People</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tour-box-bottom">
                                                <div className="tour-price">
                                                    <h3 className="h3-title">$1200</h3>
                                                </div>
                                                <div className="book-now-button">
                                                    <a href="tour-detail.html" title="Book Now" className="sec-btn"><span>Book Now</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="tour-box">
                                        <div className="tour-box-image back-image" style={{ backgroundImage: "url(assets/images/tour-box-image2.jpg)" }}><span className="discount-label">15% off</span></div>
                                        <div className="tour-box-content">
                                            <div className="tour-box-label">
                                                <div className="tour-box-inner-label">
                                                    <h4 className="h4-title">Greece</h4>
                                                </div>
                                            </div>
                                            <div className="tour-box-title">
                                                <h4 className="h4-title">Holiday Planners is a World Leading Online Tour Booking Platform</h4>
                                            </div>
                                            <div className="tour-box-description">
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                                            </div>
                                            <div className="tour-info-box">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="tour-info">
                                                            <div className="tour-info-icon">
                                                                <i className="fas fa-clock"></i>
                                                            </div>
                                                            <div className="tour-info-content">
                                                                <h5 className="h6-title">Duration</h5>
                                                                <p>6 days 3 hours</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="tour-info">
                                                            <div className="tour-info-icon">
                                                                <i className="fas fa-user-friends"></i>
                                                            </div>
                                                            <div className="tour-info-content">
                                                                <h5 className="h6-title">Group Size</h5>
                                                                <p>15+ People</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tour-box-bottom">
                                                <div className="tour-price">
                                                    <h3 className="h3-title">$2500</h3>
                                                </div>
                                                <div className="book-now-button">
                                                    <a href="tour-detail.html" title="Book Now" className="sec-btn"><span>Book Now</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="tour-box">
                                        <div className="tour-box-image back-image" style={{ backgroundImage: "url(assets/images/tour-box-image3.jpg)" }}><span className="discount-label">38% off</span></div>
                                        <div className="tour-box-content">
                                            <div className="tour-box-label">
                                                <div className="tour-box-inner-label">
                                                    <h4 className="h4-title">Jaisalmer</h4>
                                                </div>
                                            </div>
                                            <div className="tour-box-title">
                                                <h4 className="h4-title">Holiday Planners is a World Leading Online Tour Booking Platform</h4>
                                            </div>
                                            <div className="tour-box-description">
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                                            </div>
                                            <div className="tour-info-box">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="tour-info">
                                                            <div className="tour-info-icon">
                                                                <i className="fas fa-clock"></i>
                                                            </div>
                                                            <div className="tour-info-content">
                                                                <h5 className="h6-title">Duration</h5>
                                                                <p>1 days 8 hours</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="tour-info">
                                                            <div className="tour-info-icon">
                                                                <i className="fas fa-user-friends"></i>
                                                            </div>
                                                            <div className="tour-info-content">
                                                                <h5 className="h6-title">Group Size</h5>
                                                                <p>50+ People</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tour-box-bottom">
                                                <div className="tour-price">
                                                    <h3 className="h3-title">$750</h3>
                                                </div>
                                                <div className="book-now-button">
                                                    <a href="tour-detail.html" title="Book Now" className="sec-btn"><span>Book Now</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="tour-box">
                                        <div className="tour-box-image back-image" style={{ backgroundImage: "url(assets/images/tour-box-image4.jpg)" }}></div>
                                        <div className="tour-box-content">
                                            <div className="tour-box-label">
                                                <div className="tour-box-inner-label">
                                                    <h4 className="h4-title">Switzerland</h4>
                                                </div>
                                            </div>
                                            <div className="tour-box-title">
                                                <h4 className="h4-title">Holiday Planners is a World Leading Online Tour Booking Platform</h4>
                                            </div>
                                            <div className="tour-box-description">
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                                            </div>
                                            <div className="tour-info-box">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="tour-info">
                                                            <div className="tour-info-icon">
                                                                <i className="fas fa-clock"></i>
                                                            </div>
                                                            <div className="tour-info-content">
                                                                <h5 className="h6-title">Duration</h5>
                                                                <p>7 days 8 hours</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="tour-info">
                                                            <div className="tour-info-icon">
                                                                <i className="fas fa-user-friends"></i>
                                                            </div>
                                                            <div className="tour-info-content">
                                                                <h5 className="h6-title">Group Size</h5>
                                                                <p>50+ People</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tour-box-bottom">
                                                <div className="tour-price">
                                                    <h3 className="h3-title">$750</h3>
                                                </div>
                                                <div className="book-now-button">
                                                    <a href="tour-detail.html" title="Book Now" className="sec-btn"><span>Book Now</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}

export default Home