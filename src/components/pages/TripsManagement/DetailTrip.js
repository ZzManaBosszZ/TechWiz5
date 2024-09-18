import Layout from "../../layouts";

function TripDetail() {
    return (
        <Layout>
            <section class="main-banner inner-banner overlay back-image" style={{ backgroundImage: "url(assets/images/tour-detail-banner.jpg)" }}>
                <div class="sec-wp">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="banner-content wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.1s">
                                    <h1 class="h1-title">Italy</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="main-tour-detail pb-70">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="left-side">
                                <div class="tour-detail-tabbing">
                                    <ul class="nav nav-tabs wow fadeup-animation" id="myTab" role="tablist" data-wow-duration="1s" data-wow-delay="0.1s">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="information-tab" data-toggle="tab" href="#information" role="tab" aria-controls="information" aria-selected="true"><i class="fas fa-info-circle"></i>Information</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="tour-plan-tab" data-toggle="tab" href="#tour-plan" role="tab" aria-controls="tour-plan" aria-selected="false"><i class="fas fa-book-open"></i>Tour Plan</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="location-tab" data-toggle="tab" href="#location" role="tab" aria-controls="location" aria-selected="false"><i class="fas fa-map-marker-alt"></i>Location</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="gallery-tab" data-toggle="tab" href="#gallery" role="tab" aria-controls="gallery" aria-selected="false"><i class="fas fa-camera-retro"></i>Gallery</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false"><i class="fas fa-users"></i>Review</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content wow fadeup-animation" id="myTabContent" data-wow-duration="1s" data-wow-delay="0.2s">
                                        <div class="tab-pane fade show active" id="information" role="tabpanel" aria-labelledby="information-tab">
                                            <div class="tab-box information-tab-box">
                                                <span class="discount-label">22% Off</span>
                                                <div class="row">
                                                    <div class="col-xl-9 col-lg-9">
                                                        <div class="tour-title">
                                                            <h2 class="h2-title">A wonderful serenity has taken possession of my entire soul</h2>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-3 col-lg-3">
                                                        <div class="tour-price-wp">
                                                            <div class="tour-price">
                                                                <h3 class="h3-title">$1200</h3>
                                                                <p>Per Person</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tour-short-info-box">
                                                    <ul>
                                                        <li>
                                                            <i class="fas fa-clock"></i>
                                                            <span class="text">2 days</span>
                                                        </li>
                                                        <li>
                                                            <i class="fas fa-user-friends"></i>
                                                            <span class="text">6 People</span>
                                                        </li>
                                                        <li>
                                                            <i class="fas fa-user-plus"></i>
                                                            <span class="text">18</span>
                                                        </li>
                                                        <li>
                                                            <a href="destination-detail.html">
                                                                <i class="fas fa-map-marker-alt"></i>
                                                                <span class="text">Greece</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);">
                                                                <i class="fas fa-sun"></i>
                                                                <span class="text">Discovery</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="tour-description">
                                                    <p> I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian
                                                        sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams.</p>
                                                    <p> I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian
                                                        sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as
                                                        I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and
                                                        flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath</p>
                                                </div>
                                                <div class="tour-video mt-40">
                                                    <video loop muted autoplay controls>
                                                        <source src="assets/images/highlight-video.mp4" type="video/mp4" />
                                                    </video>
                                                    <a href="javascript:void(0);" title="Play Video" class="play-btn"></a>
                                                </div>
                                                <div class="tour-timetable-schedule mt-40 mb-40">
                                                    <ul>
                                                        <li>
                                                            <div class="tts-label">
                                                                <h4 class="h4-title">Destination</h4>
                                                            </div>
                                                            <div class="tts-description">
                                                                <a href="#">Greece</a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="tts-label">
                                                                <h4 class="h4-title">Departure</h4>
                                                            </div>
                                                            <div class="tts-description">
                                                                Lorem Ipsum
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="tts-label">
                                                                <h4 class="h4-title">Departure Time</h4>
                                                            </div>
                                                            <div class="tts-description">
                                                                9:15 AM To 9:30 AM.
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="tts-label">
                                                                <h4 class="h4-title">Return Time</h4>
                                                            </div>
                                                            <div class="tts-description">
                                                                Approximately 10:30 PM.
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="tts-label">
                                                                <h4 class="h4-title">Dress Code</h4>
                                                            </div>
                                                            <div class="tts-description">
                                                                comfortable clothing and light jacket.
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="tts-label">
                                                                <h4 class="h4-title">Price Included</h4>
                                                            </div>
                                                            <div class="tts-description">
                                                                <ul class="included">
                                                                    <li><i class="fas fa-check"></i>5 Star Accommodation</li>
                                                                    <li><i class="fas fa-check"></i>Air fases</li>
                                                                    <li><i class="fas fa-check"></i>3 Nights Hotel Accomodation</li>
                                                                    <li><i class="fas fa-check"></i>All transportation in destination location</li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="tts-label">
                                                                <h4 class="h4-title">Price Not Included</h4>
                                                            </div>
                                                            <div class="tts-description">
                                                                <ul class="not-included">
                                                                    <li><i class="fas fa-times"></i>Guide Service Fee</li>
                                                                    <li><i class="fas fa-times"></i>Any Private Expenses</li>
                                                                    <li><i class="fas fa-times"></i>Room Service Fees</li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="row no-gutters tour-gallery-slider">
                                                    <div class="col-lg-4 p-0">
                                                        <div class="tour-gallery-slide-image back-image" data-fancybox data-src="assets/images/tour-gallery-slide-image1.jpg" style={{backgroundImage: "url(assets/images/tour-gallery-slide-image1.jpg)"}}></div>
                                                    </div>
                                                    <div class="col-lg-4 p-0">
                                                        <div class="tour-gallery-slide-image back-image" data-fancybox data-src="assets/images/tour-gallery-slide-image2.jpg" style={{backgroundImage: "url(assets/images/tour-gallery-slide-image2.jpg)"}}></div>
                                                    </div>
                                                    <div class="col-lg-4 p-0">
                                                        <div class="tour-gallery-slide-image back-image" data-fancybox data-src="assets/images/tour-gallery-slide-image3.jpg" style={{backgroundImage: "url(assets/images/tour-gallery-slide-image3.jpg)"}}></div>
                                                    </div>
                                                    <div class="col-lg-4 p-0">
                                                        <div class="tour-gallery-slide-image back-image" data-fancybox data-src="assets/images/tour-gallery-slide-image4.jpg" style={{backgroundImage: "url(assets/images/tour-gallery-slide-image4.jpg)"}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="tour-plan" role="tabpanel" aria-labelledby="tour-plan-tab">
                                            <div class="tab-box tour-plan-tab-box">
                                                <div class="tour-timeline-box">
                                                    <div class="tt-box-number">1</div>
                                                    <div class="tt-box-content">
                                                        <h3 class="h3-title">Day 1: <span>Departure</span></h3>
                                                        <p>I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian
                                                            sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and,
                                                            as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless</p>
                                                    </div>
                                                </div>
                                                <div class="tour-timeline-box">
                                                    <div class="tt-box-number">2</div>
                                                    <div class="tt-box-content">
                                                        <h3 class="h3-title">Day 2: <span>Adventure Beggins</span></h3>
                                                        <p>I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian
                                                            sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and,
                                                            as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless</p>
                                                    </div>
                                                </div>
                                                <div class="tour-timeline-box">
                                                    <div class="tt-box-number">3</div>
                                                    <div class="tt-box-content">
                                                        <h3 class="h3-title">Day 3 - 7: <span>Historical Tour</span></h3>
                                                        <p>I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian
                                                            sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and,
                                                            as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless</p>
                                                    </div>
                                                </div>
                                                <div class="tour-timeline-box">
                                                    <div class="tt-box-number">4</div>
                                                    <div class="tt-box-content">
                                                        <h3 class="h3-title">Day 8 - 11: <span>City Tour</span></h3>
                                                        <p>I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian
                                                            sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and,
                                                            as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless</p>
                                                    </div>
                                                </div>
                                                <div class="tour-timeline-box">
                                                    <div class="tt-box-number">5</div>
                                                    <div class="tt-box-content">
                                                        <h3 class="h3-title">Day 12: <span>Return</span></h3>
                                                        <p>I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian
                                                            sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and,
                                                            as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="location" role="tabpanel" aria-labelledby="location-tab">
                                            <div class="tab-box location-tab-box">
                                                <h2 class="h2-title"><span>Tour Location</span></h2>
                                                <div class="tour-location mb-30">
                                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15280118.507895455!2d73.72914987943841!3d20.771144269653607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1608024603420!5m2!1sen!2sin" width="100" height="450" style={{border: "none !important;"}} allowfullscreen aria-hidden="false" tabindex="0"></iframe>
                                                </div>
                                                <div class="history-text">
                                                    <h2 class="h2-title"><span>History Of The City</span></h2>
                                                    <p>I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me a thousand unknown
                                                        plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless</p>
                                                    <p>I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian
                                                        sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as
                                                        I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="gallery" role="tabpanel" aria-labelledby="gallery-tab">
                                            <div class="tab-box gallery-tab-box">
                                                <h2 class="h2-title">Make Your <span>Own Memories</span></h2>
                                                <div class="memories-gallery">
                                                    <div class="row">
                                                        <div class="col-lg-7">
                                                            <div class="memories-gallery-image back-image" data-fancybox data-src="assets/images/memories-gallery-image1.jpg" style={{backgroundImage: "url(assets/images/memories-gallery-image1.jpg)"}}></div>
                                                        </div>
                                                        <div class="col-lg-5">
                                                            <div class="memories-gallery-image back-image" data-fancybox data-src="assets/images/memories-gallery-image2.jpg" style={{backgroundImage: "url(assets/images/memories-gallery-image2.jpg)"}}></div>
                                                        </div>
                                                        <div class="col-lg-5">
                                                            <div class="memories-gallery-image back-image" data-fancybox data-src="assets/images/memories-gallery-image3.jpg" style={{backgroundImage: "url(assets/images/memories-gallery-image3.jpg)"}}></div>
                                                        </div>
                                                        <div class="col-lg-7">
                                                            <div class="memories-gallery-image back-image" data-fancybox data-src="assets/images/memories-gallery-image4.jpg" style={{backgroundImage: "url(assets/images/memories-gallery-image4.jpg)"}}></div>
                                                        </div>
                                                        <div class="col-lg-7">
                                                            <div class="memories-gallery-image back-image" data-fancybox data-src="assets/images/memories-gallery-image5.jpg" style={{backgroundImage: "url(assets/images/memories-gallery-image5.jpg)"}}></div>
                                                        </div>
                                                        <div class="col-lg-5">
                                                            <div class="memories-gallery-image back-image" data-fancybox data-src="assets/images/memories-gallery-image6.jpg" style={{backgroundImage: "url(assets/images/memories-gallery-image6.jpg)"}}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                                            <div class="tab-box review-tab-box">
                                                <h2 class="h2-title">Tour Review Scores And Score Breakdown</h2>
                                                <p>I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me</p>
                                                <div class="review-breakdown">
                                                    <div class="rb-left-side">
                                                        <div class="rb-avarage-rating">
                                                            <h2 class="h2-title"><span>10.0</span></h2>
                                                        </div>
                                                        <div class="rb-avarage-verbal-desc">
                                                            <i class="fas fa-smile"></i> Superb
                                                        </div>
                                                    </div>
                                                    <div class="rb-right-side">
                                                        <div class="rb-progress-bar">
                                                            <div class="progress-bar-item">
                                                                <h4 class="h4-title">Accomodation</h4>
                                                                <div class="progress">
                                                                    <div class="progress-bar progress-bar1"></div>
                                                                    <span class="progress-value">100%</span>
                                                                </div>
                                                            </div>
                                                            <div class="progress-bar-item">
                                                                <h4 class="h4-title">Destination</h4>
                                                                <div class="progress">
                                                                    <div class="progress-bar progress-bar2"></div>
                                                                    <span class="progress-value">100%</span>
                                                                </div>
                                                            </div>
                                                            <div class="progress-bar-item">
                                                                <h4 class="h4-title">Meals</h4>
                                                                <div class="progress">
                                                                    <div class="progress-bar progress-bar3"></div>
                                                                    <span class="progress-value">100%</span>
                                                                </div>
                                                            </div>
                                                            <div class="progress-bar-item">
                                                                <h4 class="h4-title">Transport</h4>
                                                                <div class="progress">
                                                                    <div class="progress-bar progress-bar4"></div>
                                                                    <span class="progress-value">100%</span>
                                                                </div>
                                                            </div>
                                                            <div class="progress-bar-item">
                                                                <h4 class="h4-title">Overall</h4>
                                                                <div class="progress">
                                                                    <div class="progress-bar progress-bar4"></div>
                                                                    <span class="progress-value">100%</span>
                                                                </div>
                                                            </div>
                                                            <div class="progress-bar-item">
                                                                <h4 class="h4-title">Value for Money</h4>
                                                                <div class="progress">
                                                                    <div class="progress-bar progress-bar4"></div>
                                                                    <span class="progress-value">100%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="rb-comment-list">
                                                    <ul>
                                                        <li class="rb-comment-box">
                                                            <div class="rb-comment-image">
                                                                <img src="assets/images/avatar.png" alt="avtar" />
                                                            </div>
                                                            <div class="rb-comment-content">
                                                                <div class="rb-comment-top-text">
                                                                    <h5 class="h5-title">John Doe</h5>
                                                                    <p class="date">February 8, 2020 at 11:51 am</p>
                                                                </div>
                                                                <p>I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me</p>
                                                                <div class="rb-rating">
                                                                    <div class="row">
                                                                        <div class="col-lg-6">
                                                                            <div class="rb-rating-inner">
                                                                                <span class="rb-rating-label">Accommodation</span>
                                                                                <span class="rb-rating-value">
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-6">
                                                                            <div class="rb-rating-inner">
                                                                                <span class="rb-rating-label">Destination</span>
                                                                                <span class="rb-rating-value">
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-6">
                                                                            <div class="rb-rating-inner">
                                                                                <span class="rb-rating-label">Meals</span>
                                                                                <span class="rb-rating-value">
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-6">
                                                                            <div class="rb-rating-inner">
                                                                                <span class="rb-rating-label">Overall</span>
                                                                                <span class="rb-rating-value">
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-6">
                                                                            <div class="rb-rating-inner">
                                                                                <span class="rb-rating-label">Transport</span>
                                                                                <span class="rb-rating-value">
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-6">
                                                                            <div class="rb-rating-inner">
                                                                                <span class="rb-rating-label">Value for Money</span>
                                                                                <span class="rb-rating-value">
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="rb-comment-box">
                                                            <div class="rb-comment-image">
                                                                <img src="assets/images/avatar.png" alt="avtar" />
                                                            </div>
                                                            <div class="rb-comment-content">
                                                                <div class="rb-comment-top-text">
                                                                    <h5 class="h5-title">John Doe</h5>
                                                                    <p class="date">February 8, 2020 at 11:51 am</p>
                                                                </div>
                                                                <p>I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me</p>
                                                                <div class="rb-rating">
                                                                    <div class="row">
                                                                        <div class="col-lg-6">
                                                                            <div class="rb-rating-inner">
                                                                                <span class="rb-rating-label">Accommodation</span>
                                                                                <span class="rb-rating-value">
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-6">
                                                                            <div class="rb-rating-inner">
                                                                                <span class="rb-rating-label">Destination</span>
                                                                                <span class="rb-rating-value">
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-6">
                                                                            <div class="rb-rating-inner">
                                                                                <span class="rb-rating-label">Meals</span>
                                                                                <span class="rb-rating-value">
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-6">
                                                                            <div class="rb-rating-inner">
                                                                                <span class="rb-rating-label">Overall</span>
                                                                                <span class="rb-rating-value">
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-6">
                                                                            <div class="rb-rating-inner">
                                                                                <span class="rb-rating-label">Transport</span>
                                                                                <span class="rb-rating-value">
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-6">
                                                                            <div class="rb-rating-inner">
                                                                                <span class="rb-rating-label">Value for Money</span>
                                                                                <span class="rb-rating-value">
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                    <i class="fas fa-star"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="rb-comment-form">
                                                    <h2 class="h2-title">Post a Comment</h2>
                                                    <form>
                                                        <div class="rb-rating">
                                                            <div class="row">
                                                                <div class="col-lg-4">
                                                                    <div class="rb-rating-inner">
                                                                        <span class="rb-rating-label">Accommodation</span>
                                                                        <span class="rb-rating-value">
                                                                            <i class="fas fa-star"></i>
                                                                            <i class="fas fa-star"></i>
                                                                            <i class="fas fa-star"></i>
                                                                            <i class="fas fa-star"></i>
                                                                            <i class="fas fa-star"></i>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4">
                                                                    <div class="rb-rating-inner">
                                                                        <span class="rb-rating-label">Destination</span>
                                                                        <span class="rb-rating-value">
                                                                            <i class="fas fa-star"></i>
                                                                            <i class="fas fa-star"></i>
                                                                            <i class="fas fa-star"></i>
                                                                            <i class="fas fa-star"></i>
                                                                            <i class="fas fa-star"></i>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4">
                                                                    <div class="rb-rating-inner">
                                                                        <span class="rb-rating-label">Meals</span>
                                                                        <span class="rb-rating-value">
                                                                            <i class="fas fa-star"></i>
                                                                            <i class="fas fa-star"></i>
                                                                            <i class="fas fa-star"></i>
                                                                            <i class="fas fa-star"></i>
                                                                            <i class="fas fa-star"></i>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4">
                                                                    <div class="rb-rating-inner">
                                                                        <span class="rb-rating-label">Overall</span>
                                                                        <span class="rb-rating-value">
                                                                            <i class="fas fa-star"></i>
                                                                            <i class="fas fa-star"></i>
                                                                            <i class="fas fa-star"></i>
                                                                            <i class="fas fa-star"></i>
                                                                            <i class="fas fa-star"></i>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4">
                                                                    <div class="rb-rating-inner">
                                                                        <span class="rb-rating-label">Transport</span>
                                                                        <span class="rb-rating-value">
                                                                            <i class="fas fa-star"></i>
                                                                            <i class="fas fa-star"></i>
                                                                            <i class="fas fa-star"></i>
                                                                            <i class="fas fa-star"></i>
                                                                            <i class="fas fa-star"></i>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4">
                                                                    <div class="rb-rating-inner">
                                                                        <span class="rb-rating-label">Value for Money</span>
                                                                        <span class="rb-rating-value">
                                                                            <i class="fas fa-star"></i>
                                                                            <i class="fas fa-star"></i>
                                                                            <i class="fas fa-star"></i>
                                                                            <i class="fas fa-star"></i>
                                                                            <i class="fas fa-star"></i>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-lg-4">
                                                                <span class="form-control-span">
                                                                    <input type="text" placeholder="Your Name" class="form-input" />
                                                                </span>
                                                            </div>
                                                            <div class="col-lg-4">
                                                                <span class="form-control-span">
                                                                    <input type="email" placeholder="Your Email *" required class="form-input" />
                                                                </span>
                                                            </div>
                                                            <div class="col-lg-4">
                                                                <span class="form-control-span">
                                                                    <input type="text" placeholder="Website" class="form-input" />
                                                                </span>
                                                            </div>
                                                            <div class="col-lg-12">
                                                                <span class="form-control-span">
                                                                    <textarea class="form-input" placeholder="Your Comment" cols="30" rows="10"></textarea>
                                                                </span>
                                                            </div>
                                                            <div class="col-lg-12">
                                                                <button class="sec-btn"><span>Submit</span></button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="right-side">
                                <div class="widget wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.1s">
                                    <div class="line-title">
                                        <h4 class="h4-title">Book This Tour</h4>
                                    </div>
                                    <div class="find-tour-form">
                                        <form>
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <span class="form-control-span">
                                                        <span class="icon"><i class="fas fa-user"></i></span>
                                                        <input type="text" placeholder="Full Name *" class="form-input" required />
                                                    </span>
                                                </div>
                                                <div class="col-lg-12">
                                                    <span class="form-control-span">
                                                        <span class="icon"><i class="fas fa-envelope"></i></span>
                                                        <input type="email" placeholder="Email *" class="form-input" required />
                                                    </span>
                                                </div>
                                                <div class="col-lg-12">
                                                    <span class="form-control-span">
                                                        <span class="icon"><i class="fas fa-envelope"></i></span>
                                                        <input type="email" placeholder="Confirm Email *" class="form-input" required />
                                                    </span>
                                                </div>
                                                <div class="col-lg-12">
                                                    <span class="form-control-span">
                                                        <span class="icon"><i class="fas fa-phone"></i></span>
                                                        <input type="text" placeholder="Phone *" class="form-input" required />
                                                    </span>
                                                </div>
                                                <div class="col-lg-12">
                                                    <span class="form-control-span">
                                                        <span class="icon"><i class="fas fa-calendar-alt"></i></span>
                                                        <input type="date" class="form-input" required />
                                                    </span>
                                                </div>
                                                <div class="col-lg-12">
                                                    <span class="form-control-span">
                                                        <span class="icon"><i class="fas fa-user-tag"></i></span>
                                                        <input type="number" class="form-input" placeholder="Numbers Of Tickets" />
                                                    </span>
                                                </div>
                                                <div class="col-lg-12">
                                                    <span class="form-control-span">
                                                        <textarea class="form-input" placeholder="Message" cols="30" rows="10"></textarea>
                                                    </span>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="checkbox-item">
                                                        <input type="checkbox" id="check-availability" name="check-availability" value="check-availability" />
                                                        <label for="check-availability" class="check-box-label">Check Availability</label>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <button class="sec-btn find-now-btn"><span>Book Now</span></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="widget why-book-with-us wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.2s">
                                    <div class="line-title">
                                        <h4 class="h4-title">Why Book With Us?</h4>
                                    </div>
                                    <ul class="book-with-list">
                                        <li><i class="fas fa-angle-right"></i>Best Price Guarantee</li>
                                        <li><i class="fas fa-angle-right"></i>Customer care available 24/7</li>
                                        <li><i class="fas fa-angle-right"></i>Free Travel Insureance</li>
                                        <li><i class="fas fa-angle-right"></i>Hand-picked Tours &amp; Activities</li>
                                    </ul>
                                </div>
                                <div class="widget get-a-questions back-image wow fadeup-animation" style={{ backgroundImage: "url(assets/images/get-a-questions-back.jpg)" }} data-wow-duration="1s" data-wow-delay="0.3s">
                                    <div class="line-title">
                                        <h4 class="h4-title">Get a Question?</h4>
                                    </div>
                                    <p>Do not hesitage to give us a call. We are an expert team and we are happy to talk to you.</p>
                                    <ul class="gaq-list-item">
                                        <li>
                                            <a href="https://html.geekcodelab.com/cdn-cgi/l/email-protection#69010605000d081019050807070c1b1a290e04080005470a0604" title="holidayplanners@gmail.com">
                                                <i class="fas fa-envelope"></i> <span class="__cf_email__" data-cfemail="e28a8d8e8b86839b928e838c8c879091a2858f838b8ecc818d8f">holidayplanners@gmail.com</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:1234567890" title="+123 456 7890">
                                                <i class="fas fa-phone-alt"></i> +84 367640262
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default TripDetail;