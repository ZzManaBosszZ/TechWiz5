import Layout from "../../layouts";
import Reason from "../../layouts/Reason";

function Contact() {
    return (
        <Layout>
            <section className="main-banner inner-banner overlay back-image" style={{ backgroundImage: "url(assets/images/contact-banner.jpg)" }}>
                <div className="sec-wp">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="banner-content wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.1s">
                                    <h1 className="h1-title">Contact us</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="main-contact-sec pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="left-side">
                                <div className="left-side-box wow fadeup-animation" data-wow-duration="1s" data-wow-delay="0.1s">
                                    <div className="contact-form">
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <span className="form-control-span">
                                                        <span className="icon"><i className="fas fa-user"></i></span>
                                                        <input type="text" placeholder="Full Name *" required className="form-input" />
                                                    </span>
                                                </div>
                                                <div className="col-lg-6">
                                                    <span className="form-control-span">
                                                        <span className="icon"><i className="fas fa-envelope"></i></span>
                                                        <input type="email" placeholder="Email *" required className="form-input" />
                                                    </span>
                                                </div>
                                                <div className="col-lg-6">
                                                    <span className="form-control-span">
                                                        <span className="icon"><i className="fas fa-phone"></i></span>
                                                        <input type="text" placeholder="Phone *" required className="form-input" />
                                                    </span>
                                                </div>
                                                <div className="col-lg-6">
                                                    <span className="form-control-span">
                                                        <span className="icon"><i className="fas fa-book"></i></span>
                                                        <input type="text" placeholder="Services *" required className="form-input" />
                                                    </span>
                                                </div>
                                                <div className="col-lg-12">
                                                    <span className="form-control-span">
                                                        <textarea className="form-input" placeholder="Message" cols="30" rows="4"></textarea>
                                                    </span>
                                                </div>
                                                <div className="col-lg-12">
                                                    <button className="sec-btn"><span>Submit</span></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Reason />
                    </div>
                </div>
            </section>


            <section className="main-contact-map-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="contact-box-wrap common-sec wow right-animation" data-wow-duration="1s" data-wow-delay="0.1s">
                                <div className="contact-box">
                                    <div className="line-title">
                                        <h4 className="h4-title">VietNam Office</h4>
                                    </div>
                                    <ul>
                                        <li>
                                            <a href="">
                                                <span className="icon"><i className="fas fa-map-marker-alt"></i></span> 8 Ton That Thuyet, My Dinh, Cau Giay, Ha Noi, Viet Nam
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:1234567890" title="+123 456 7890">
                                                <span className="icon"><i className="fas fa-phone-alt"></i></span> +84 367640262
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://html.geekcodelab.com/cdn-cgi/l/email-protection#19717675707d786069757877777c6b6a597e74787075377a7674" title="holidayplanners@gmail.com">
                                                <span className="icon"><i className="fas fa-at"></i></span> <span className="__cf_email__" data-cfemail="deb6b1b2b7babfa7aeb2bfb0b0bbacad9eb9b3bfb7b2f0bdb1b3">holidayplanner@gmail.com</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="contact-map-box wow left-animation" data-wow-duration="1s" data-wow-delay="0.1s">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0981036872954!2d105.77907557514114!3d21.028760280620606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b3285df81f%3A0x97be82a66bbe646b!2sDetech%20Building!5e0!3m2!1svi!2s!4v1726585413202!5m2!1svi!2s" width="100" height="100" style={{ border: "none !important;" }} loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Contact;