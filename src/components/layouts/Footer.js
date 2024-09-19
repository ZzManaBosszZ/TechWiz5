function Footer() {
    return (
        <>
        <footer className="site-footer back-image overlay" style={{backgroundImage: "url(/assets/images/footer-back.jpg)"}}>
            <div className="sec-wp">
                <div className="container">
                    <div className="top-footer common-sec">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="footer-logo mb-30 wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.1s">
                                    <a href="index-2.html" title="Travel & Tour"><img src="/assets/images/white-logo.png" alt="Logo"/></a>
                                </div>
                                <div className="footer-text mb-30 wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.2s">
                                    <p><b>Holiday Planners</b> sit amet consectetur adipisicing elit. Perferendis sapiente tenetur officiis explicabo fugit, sit mollitia eum atque excepturi quaerat autem.</p>
                                </div>
                                <div className="newsletter-form mb-30 wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.3s">
                                    <form>
                                        <span className="form-control-span email-wrap">
                                            <input type="email" className="form-input" placeholder="Enter Your Email" required/>
                                                <button type="submit" className="sec-btn sm-btn"><span>Submit</span></button>
                                        </span>
                                    </form>
                                </div>
                                <div className="payment-companies-logo wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.4s">
                                    <img src="/assets/images/payment-companies-logo.png" alt="payment-companies-logo"/>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-nav-wp wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.5s">
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-contact-wp wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.6s">
                                    <div className="footer-title">
                                        <div className="h3-title">Need Help ?</div>
                                    </div>
                                    <div className="footer-contact">
                                        <ul>
                                            <li>
                                                <span className="contact-label">Call Us</span>
                                                <a href="tel:1234567890">+84 367640262</a>
                                            </li>
                                            <li>
                                                <span className="contact-label">Email for Us</span>
                                                <a href="https://html.geekcodelab.com/cdn-cgi/l/email-protection#10787f7c79747169607c717e7e75626350777d71797c3e737f7d"><span className="__cf_email__" data-cfemail="58303734313c392128343936363d2a2b183f35393134763b3735">holidayplanners@gmail.com</span></a>
                                            </li>
                                            <li>
                                                <span className="contact-label">Location</span>
                                                <a href="javascript:void(0);">8 Ton That Thuyet, My Dinh, Cau Giay, Ha Noi, Viet Nam</a>
                                            </li>
                                            <li className="social-icons">
                                                <span className="contact-label">Follow us</span>
                                                <ul>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Follow us on Facebook">
                                                            <span className="icon"><i className="fab fa-facebook-f"></i></span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Follow us on Instagram">
                                                            <span className="icon"><i className="fab fa-instagram"></i></span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Follow us on Twitter">
                                                            <span className="icon"><i className="fab fa-twitter"></i></span>
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
                    <div className="bottom-footer">
                        <div className="row">
                            <div className="col-lg-6">
                                <p className="copyright-text text-lg-left">Copyright © 2021 <a href="" target="_blank">Geek Code Lab</a>. All Rights Reserved.</p>
                            </div>
                            <div className="col-lg-6">
                                <div className="copyright-link">
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
        <a href="javascript:void(0);" title="Back To Top" id="scrollToTop" className="scrolltop"> <i className="default fas fa-long-arrow-alt-up"></i> <i className="hover fas fa-long-arrow-alt-up"></i> </a>
        </>
    );
}

export default Footer;