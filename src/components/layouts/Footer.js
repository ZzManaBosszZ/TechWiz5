function Footer() {
    return (
        <>
        <footer class="site-footer back-image overlay" style={{backgroundImage: "url(assets/images/footer-back.jpg)"}}>
            <div class="sec-wp">
                <div class="container">
                    <div class="top-footer common-sec">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="footer-logo mb-30 wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.1s">
                                    <a href="index-2.html" title="Travel & Tour"><img src="assets/images/white-logo.png" alt="Logo"/></a>
                                </div>
                                <div class="footer-text mb-30 wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.2s">
                                    <p><b>Holiday Planners</b> sit amet consectetur adipisicing elit. Perferendis sapiente tenetur officiis explicabo fugit, sit mollitia eum atque excepturi quaerat autem.</p>
                                </div>
                                <div class="newsletter-form mb-30 wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.3s">
                                    <form>
                                        <span class="form-control-span email-wrap">
                                            <input type="email" class="form-input" placeholder="Enter Your Email" required/>
                                                <button type="submit" class="sec-btn sm-btn"><span>Submit</span></button>
                                        </span>
                                    </form>
                                </div>
                                <div class="payment-companies-logo wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.4s">
                                    <img src="assets/images/payment-companies-logo.png" alt="payment-companies-logo"/>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="footer-nav-wp wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <div class="footer-title">
                                        <div class="h3-title">Navigation</div>
                                    </div>
                                    <div class="footer-menu">
                                        <ul>
                                            <li>
                                                <a href="index-2.html">Home</a>
                                            </li>
                                            <li>
                                                <a href="about.html">About</a>
                                            </li>
                                            <li>
                                                <a href="destination.html">Destination</a>
                                            </li>
                                            <li>
                                                <a href="tour.html">Tour</a>
                                            </li>
                                            <li>
                                                <a href="blog.html">Blog</a>
                                            </li>
                                            <li>
                                                <a href="contact.html">Contact us</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="footer-contact-wp wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.6s">
                                    <div class="footer-title">
                                        <div class="h3-title">Need Help ?</div>
                                    </div>
                                    <div class="footer-contact">
                                        <ul>
                                            <li>
                                                <span class="contact-label">Call Us</span>
                                                <a href="tel:1234567890">+123 456 7890</a>
                                            </li>
                                            <li>
                                                <span class="contact-label">Email for Us</span>
                                                <a href="https://html.geekcodelab.com/cdn-cgi/l/email-protection#10787f7c79747169607c717e7e75626350777d71797c3e737f7d"><span class="__cf_email__" data-cfemail="58303734313c392128343936363d2a2b183f35393134763b3735">[email&#160;protected]</span></a>
                                            </li>
                                            <li>
                                                <span class="contact-label">Location</span>
                                                <a href="javascript:void(0);">Main Street, Victoria 8007.</a>
                                            </li>
                                            <li class="social-icons">
                                                <span class="contact-label">Follow us</span>
                                                <ul>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Follow us on Facebook">
                                                            <span class="icon"><i class="fab fa-facebook-f"></i></span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Follow us on Instagram">
                                                            <span class="icon"><i class="fab fa-instagram"></i></span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Follow us on Twitter">
                                                            <span class="icon"><i class="fab fa-twitter"></i></span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bottom-footer">
                        <div class="row">
                            <div class="col-lg-6">
                                <p class="copyright-text text-lg-left">Copyright © 2021 <a href="https://themeforest.net/user/geekcodelab" target="_blank">Geek Code Lab</a>. All Rights Reserved.</p>
                            </div>
                            <div class="col-lg-6">
                                <div class="copyright-link">
                                    <ul>
                                        <li><a href="javascript:void(0);" title="Privacy Policy">Privacy Policy</a></li>
                                        <li><a href="javascript:void(0);" title="Terms of Use">Terms of Use</a></li>
                                        <li><a href="javascript:void(0);" title="Cookie Policy">Cookie Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <a href="javascript:void(0);" title="Back To Top" id="scrollToTop" class="scrolltop"> <i class="default fas fa-long-arrow-alt-up"></i> <i class="hover fas fa-long-arrow-alt-up"></i> </a>
        </>
    );
}

export default Footer;