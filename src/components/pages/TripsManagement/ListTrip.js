import Layout from "../../layouts";

function ListTrip() {
    return (
        <Layout>
            <section class="main-banner inner-banner overlay back-image" style={{backgroundImage: "url(assets/images/tour-banner.jpg)"}}>
                <div class="sec-wp">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="banner-content wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.1s">
                                    <h1 class="h1-title">Your Trip List</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="main-tour-list pb-70">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="left-side">
                                <div class="tour-filter mb-30 wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.2s">
                                    <form>
                                        <div class="row no-gutters">
                                            <div class="col-lg-4">
                                                <label class="form-input filter-label">Sort by :</label>
                                            </div>
                                            <div class="col-lg-4">
                                                <span class="form-control-span release-wrap">
                                                    <select class="form-input">
                                                        <option selected>Release Date</option>
                                                        <option>Tour Date</option>
                                                        <option>Title</option>
                                                        <option>Price</option>
                                                        <option>Popularity</option>
                                                        <option>Rating</option>
                                                        <option>Duration</option>
                                                    </select>
                                                    <span class="arrow"><i class="fas fa-caret-down" aria-hidden="true"></i></span>
                                                </span>
                                            </div>
                                            <div class="col-lg-4">
                                                <span class="form-control-span order-wrap">
                                                    <select class="form-input">
                                                        <option>Ascending</option>
                                                        <option selected>Descending</option>
                                                    </select>
                                                    <span class="arrow"><i class="fas fa-caret-down" aria-hidden="true"></i></span>
                                                </span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="tour-filter-result wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.3s">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6">
                                            <div class="tour-box">
                                                <div class="tour-box-image back-image" style={{backgroundImage: "url(assets/images/tour-box-image1.jpg)"}}></div>
                                                <div class="tour-box-content">
                                                    <div class="tour-box-label">
                                                        <div class="tour-box-inner-label">
                                                            <h4 class="h4-title">Italy</h4>
                                                        </div>
                                                    </div>
                                                    <div class="tour-box-title">
                                                        <h4 class="h4-title">Holiday Planners is a World Leading Online Tour Booking Platform</h4>
                                                    </div>
                                                    <div class="tour-box-description">
                                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                                                    </div>
                                                    <div class="tour-info-box">
                                                        <div class="row">
                                                            <div class="col-6">
                                                                <div class="tour-info">
                                                                    <div class="tour-info-icon">
                                                                        <i class="fas fa-clock"></i>
                                                                    </div>
                                                                    <div class="tour-info-content">
                                                                        <h5 class="h6-title">Duration</h5>
                                                                        <p>2 days</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-6">
                                                                <div class="tour-info">
                                                                    <div class="tour-info-icon">
                                                                        <i class="fas fa-user-friends"></i>
                                                                    </div>
                                                                    <div class="tour-info-content">
                                                                        <h5 class="h6-title">Group Size</h5>
                                                                        <p>6 People</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tour-box-bottom">
                                                        <div class="tour-price">
                                                            <h3 class="h3-title">$1200</h3>
                                                        </div>
                                                        <div class="book-now-button">
                                                            <a href="tour-detail.html" title="Book Now" class="sec-btn"><span>Book Now</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <div class="tour-box">
                                                <div class="tour-box-image back-image" style={{backgroundImage: "url(assets/images/tour-box-image2.jpg)"}}><span class="discount-label">15% off</span></div>
                                                <div class="tour-box-content">
                                                    <div class="tour-box-label">
                                                        <div class="tour-box-inner-label">
                                                            <h4 class="h4-title">Greece</h4>
                                                        </div>
                                                    </div>
                                                    <div class="tour-box-title">
                                                        <h4 class="h4-title">Holiday Planners is a World Leading Online Tour Booking Platform</h4>
                                                    </div>
                                                    <div class="tour-box-description">
                                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                                                    </div>
                                                    <div class="tour-info-box">
                                                        <div class="row">
                                                            <div class="col-6">
                                                                <div class="tour-info">
                                                                    <div class="tour-info-icon">
                                                                        <i class="fas fa-clock"></i>
                                                                    </div>
                                                                    <div class="tour-info-content">
                                                                        <h5 class="h6-title">Duration</h5>
                                                                        <p>6 days 3 hours</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-6">
                                                                <div class="tour-info">
                                                                    <div class="tour-info-icon">
                                                                        <i class="fas fa-user-friends"></i>
                                                                    </div>
                                                                    <div class="tour-info-content">
                                                                        <h5 class="h6-title">Group Size</h5>
                                                                        <p>15+ People</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tour-box-bottom">
                                                        <div class="tour-price">
                                                            <h3 class="h3-title">$2500</h3>
                                                        </div>
                                                        <div class="book-now-button">
                                                            <a href="tour-detail.html" title="Book Now" class="sec-btn"><span>Book Now</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <div class="tour-box">
                                                <div class="tour-box-image back-image" style={{backgroundImage: "url(assets/images/tour-box-image4.jpg)"}}></div>
                                                <div class="tour-box-content">
                                                    <div class="tour-box-label">
                                                        <div class="tour-box-inner-label">
                                                            <h4 class="h4-title">Switzerland</h4>
                                                        </div>
                                                    </div>
                                                    <div class="tour-box-title">
                                                        <h4 class="h4-title">Holiday Planners is a World Leading Online Tour Booking Platform</h4>
                                                    </div>
                                                    <div class="tour-box-description">
                                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                                                    </div>
                                                    <div class="tour-info-box">
                                                        <div class="row">
                                                            <div class="col-6">
                                                                <div class="tour-info">
                                                                    <div class="tour-info-icon">
                                                                        <i class="fas fa-clock"></i>
                                                                    </div>
                                                                    <div class="tour-info-content">
                                                                        <h5 class="h6-title">Duration</h5>
                                                                        <p>7 days 8 hours</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-6">
                                                                <div class="tour-info">
                                                                    <div class="tour-info-icon">
                                                                        <i class="fas fa-user-friends"></i>
                                                                    </div>
                                                                    <div class="tour-info-content">
                                                                        <h5 class="h6-title">Group Size</h5>
                                                                        <p>50+ People</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tour-box-bottom">
                                                        <div class="tour-price">
                                                            <h3 class="h3-title">$750</h3>
                                                        </div>
                                                        <div class="book-now-button">
                                                            <a href="tour-detail.html" title="Book Now" class="sec-btn"><span>Book Now</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <div class="tour-box">
                                                <div class="tour-box-image back-image" style={{backgroundImage: "url(assets/images/tour-box-image1.jpg)"}}></div>
                                                <div class="tour-box-content">
                                                    <div class="tour-box-label">
                                                        <div class="tour-box-inner-label">
                                                            <h4 class="h4-title">Italy</h4>
                                                        </div>
                                                    </div>
                                                    <div class="tour-box-title">
                                                        <h4 class="h4-title">Holiday Planners is a World Leading Online Tour Booking Platform</h4>
                                                    </div>
                                                    <div class="tour-box-description">
                                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                                                    </div>
                                                    <div class="tour-info-box">
                                                        <div class="row">
                                                            <div class="col-6">
                                                                <div class="tour-info">
                                                                    <div class="tour-info-icon">
                                                                        <i class="fas fa-clock"></i>
                                                                    </div>
                                                                    <div class="tour-info-content">
                                                                        <h5 class="h6-title">Duration</h5>
                                                                        <p>2 days</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-6">
                                                                <div class="tour-info">
                                                                    <div class="tour-info-icon">
                                                                        <i class="fas fa-user-friends"></i>
                                                                    </div>
                                                                    <div class="tour-info-content">
                                                                        <h5 class="h6-title">Group Size</h5>
                                                                        <p>6 People</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tour-box-bottom">
                                                        <div class="tour-price">
                                                            <h3 class="h3-title">$1200</h3>
                                                        </div>
                                                        <div class="book-now-button">
                                                            <a href="tour-detail.html" title="Book Now" class="sec-btn"><span>Book Now</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <div class="tour-box">
                                                <div class="tour-box-image back-image" style={{backgroundImage: "url(assets/images/tour-box-image2.jpg)"}}><span class="discount-label">15% off</span></div>
                                                <div class="tour-box-content">
                                                    <div class="tour-box-label">
                                                        <div class="tour-box-inner-label">
                                                            <h4 class="h4-title">Greece</h4>
                                                        </div>
                                                    </div>
                                                    <div class="tour-box-title">
                                                        <h4 class="h4-title">Holiday Planners is a World Leading Online Tour Booking Platform</h4>
                                                    </div>
                                                    <div class="tour-box-description">
                                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                                                    </div>
                                                    <div class="tour-info-box">
                                                        <div class="row">
                                                            <div class="col-6">
                                                                <div class="tour-info">
                                                                    <div class="tour-info-icon">
                                                                        <i class="fas fa-clock"></i>
                                                                    </div>
                                                                    <div class="tour-info-content">
                                                                        <h5 class="h6-title">Duration</h5>
                                                                        <p>6 days 3 hours</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-6">
                                                                <div class="tour-info">
                                                                    <div class="tour-info-icon">
                                                                        <i class="fas fa-user-friends"></i>
                                                                    </div>
                                                                    <div class="tour-info-content">
                                                                        <h5 class="h6-title">Group Size</h5>
                                                                        <p>15+ People</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tour-box-bottom">
                                                        <div class="tour-price">
                                                            <h3 class="h3-title">$2500</h3>
                                                        </div>
                                                        <div class="book-now-button">
                                                            <a href="tour-detail.html" title="Book Now" class="sec-btn"><span>Book Now</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <div class="tour-box">
                                                <div class="tour-box-image back-image" style={{backgroundImage: "url(assets/images/tour-box-image4.jpg)"}}></div>
                                                <div class="tour-box-content">
                                                    <div class="tour-box-label">
                                                        <div class="tour-box-inner-label">
                                                            <h4 class="h4-title">Switzerland</h4>
                                                        </div>
                                                    </div>
                                                    <div class="tour-box-title">
                                                        <h4 class="h4-title">Holiday Planners is a World Leading Online Tour Booking Platform</h4>
                                                    </div>
                                                    <div class="tour-box-description">
                                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                                                    </div>
                                                    <div class="tour-info-box">
                                                        <div class="row">
                                                            <div class="col-6">
                                                                <div class="tour-info">
                                                                    <div class="tour-info-icon">
                                                                        <i class="fas fa-clock"></i>
                                                                    </div>
                                                                    <div class="tour-info-content">
                                                                        <h5 class="h6-title">Duration</h5>
                                                                        <p>7 days 8 hours</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-6">
                                                                <div class="tour-info">
                                                                    <div class="tour-info-icon">
                                                                        <i class="fas fa-user-friends"></i>
                                                                    </div>
                                                                    <div class="tour-info-content">
                                                                        <h5 class="h6-title">Group Size</h5>
                                                                        <p>50+ People</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tour-box-bottom">
                                                        <div class="tour-price">
                                                            <h3 class="h3-title">$750</h3>
                                                        </div>
                                                        <div class="book-now-button">
                                                            <a href="tour-detail.html" title="Book Now" class="sec-btn"><span>Book Now</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <ul class="pagination">
                                                <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>
                                                <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                                                <li class="page-item">
                                                    <a class="page-link" href="javascript:void(0);" aria-label="Next">
                                                        <i class="fas fa-angle-right"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="right-side">
                                <div class="widget wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.1s">
                                    <div class="line-title">
                                        <h4 class="h4-title">Find Your Tour</h4>
                                    </div>
                                    <div class="find-tour-form">
                                        <form>
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <span class="form-control-span">
                                                        <span class="icon"><i class="fas fa-search"></i></span>
                                                        <input type="text" placeholder="Search Tour" class="form-input"/>
                                                    </span>
                                                </div>
                                                <div class="col-lg-12">
                                                    <span class="form-control-span">
                                                        <span class="icon"><i class="fas fa-map-marker-alt"></i></span>
                                                        <input type="text" placeholder="Where To?" class="form-input"/>
                                                    </span>
                                                </div>
                                                <div class="col-lg-12">
                                                    <span class="form-control-span">
                                                        <span class="icon"><i class="fas fa-calendar-alt"></i></span>
                                                        <select class="form-input">
                                                            <option>Month</option>
                                                            <option>January</option>
                                                            <option>February</option>
                                                            <option>March</option>
                                                            <option>April</option>
                                                            <option>May</option>
                                                            <option>June</option>
                                                            <option>July</option>
                                                            <option>August</option>
                                                            <option>September</option>
                                                            <option>October</option>
                                                            <option>November</option>
                                                            <option>December</option>
                                                        </select>
                                                        <span class="arrow"><i class="fas fa-caret-down"></i></span>
                                                    </span>
                                                </div>
                                                <div class="col-lg-12">
                                                    <label class="label-input">Duration</label>
                                                    <span class="form-control-span no-icon">
                                                        <select class="form-input">
                                                            <option>Any</option>
                                                            <option>1 Day Tour</option>
                                                            <option>2-4 Days Tour</option>
                                                            <option>5-7 Days Tour</option>
                                                            <option>7+ Days Tour</option>
                                                        </select>
                                                        <span class="arrow"><i class="fas fa-caret-down"></i></span>
                                                    </span>
                                                </div>
                                                <div class="col-lg-6 col-sm-6">
                                                    <label class="label-input">Min Price</label>
                                                    <span class="form-control-span no-icon no-arrow">
                                                        <input type="number" class="form-input" placeholder="1"/>
                                                    </span>
                                                </div>
                                                <div class="col-lg-6 col-sm-6">
                                                    <label class="label-input">Max Price</label>
                                                    <span class="form-control-span no-icon no-arrow">
                                                        <input type="number" class="form-input" placeholder="100"/>
                                                    </span>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="checkbox-list">
                                                        <div class="checkbox-item">
                                                            <input type="checkbox" id="cultural" name="cultural" value="cultural"/>
                                                                <label for="cultural" class="check-box-label">Cultural</label>
                                                        </div>
                                                        <div class="checkbox-item">
                                                            <input type="checkbox" id="adventure" name="adventure" value="adventure"/>
                                                                <label for="adventure" class="check-box-label">Adventure</label>
                                                        </div>
                                                        <div class="checkbox-item">
                                                            <input type="checkbox" id="historical" name="historical" value="historical"/>
                                                                <label for="historical" class="check-box-label">Historical</label>
                                                        </div>
                                                        <div class="checkbox-item">
                                                            <input type="checkbox" id="seaside" name="seaside" value="seaside"/>
                                                                <label for="seaside" class="check-box-label">Seaside</label>
                                                        </div>
                                                        <div class="checkbox-item">
                                                            <input type="checkbox" id="discovery" name="discovery" value="discovery"/>
                                                                <label for="discovery" class="check-box-label">Discovery</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <button class="sec-btn find-now-btn"><span>Find Now</span></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="widget why-book-with-us wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.2s">
                                    <div class="line-title">
                                        <h4 class="h4-title">Why Choose Us?</h4>
                                    </div>
                                    <ul class="book-with-list">
                                        <li><i class="fas fa-angle-right"></i>Free to use</li>
                                        <li><i class="fas fa-angle-right"></i>Customer care available 24/7</li>
                                        <li><i class="fas fa-angle-right"></i>Free Travel Insureance</li>
                                        <li><i class="fas fa-angle-right"></i>Hand-picked Tours & Activities</li>
                                    </ul>
                                </div>
                                <div class="widget get-a-questions back-image wow fadeup-animation" style={{backgroundImage: "url(assets/images/get-a-questions-back.jpg)"}} data-wow-duration="1s" data-wow-delay="0.3s">
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

export default ListTrip;