import { useState, useEffect } from "react";
import api from "../../services/api";
import url from "../../services/url";
import { getAccessToken } from "../../utils/auth";
import config from "../../config";
function Header() {
    const [profile, setProfile] = useState([]);

    //show list data
    useEffect(() => {
        const loadProfile = async () => {
            try {
                const response = await api.get(url.AUTH.PROFILE, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
                setProfile(response.data.data);
                // console.log(response.data.data);
            } catch (error) { }
        };
        loadProfile();
    }, []);
    
    return (
        <header class="site-header">
            <div class="top-header">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <ul class="contact-list-item">
                                <li>
                                    <a href="https://html.geekcodelab.com/cdn-cgi/l/email-protection#442c2b282d20253d3428252a2a213637042329252d286a272b29" title="holidayplanners@gmail.com">
                                        <span class="icon"><i class="far fa-envelope"></i></span>
                                        <span class="text"><span class="__cf_email__" data-cfemail="a8c0c7c4c1ccc9d1d8c4c9c6c6cddadbe8cfc5c9c1c486cbc7c5">[email&#160;protected]</span></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:1234567890" title="+123 456 7890">
                                        <span class="icon"><i class="fas fa-phone-alt"></i></span>
                                        <span class="text">+123 456 7890</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-4">
                            <ul class="header-social">
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
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom-header">
                <div class="container">
                    <div class="bottom-header-inner">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="site-branding">
                                    <a href="index-2.html" title="Travel & Tour"><img src="assets/images/logo.png" alt="Logo" /></a>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="header-menu-side">
                                    <div class="header-reserve-btn for-des">
                                        <a href="tour.html" class="sec-btn" title="Reserve"><span>Reserve</span></a>
                                    </div>
                                    <div class="search-wp">
                                        <div class="search-icon">
                                            <i class="fas fa-search"></i>
                                            <i class="fas fa-times"></i>
                                        </div>
                                        <div class="search-overlay">
                                            <div class="search-overlay-inner">
                                                <div class="logo-icon">
                                                    <img src="assets/images/logo-icon-white.svg" alt="logo-icon-white" />
                                                </div>
                                                <div class="container">
                                                    <div class="row">
                                                        <div class="col-10 m-auto">
                                                            <div class="search-inner-box">
                                                                <form>
                                                                    <span class="form-control-span search-wrap">
                                                                        <input type="text" class="form-input" placeholder="Search" />
                                                                        <button type="submit" class="sm-btn"><i class="fas fa-search"></i></button>
                                                                    </span>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main-navigation">
                                        <button type="button" class="navigation-btn">
                                            <span class="first"></span>
                                            <span class="second"></span>
                                            <span class="third"></span>
                                        </button>
                                        <div class="full-menu">
                                            <div class="logo-icon">
                                                <img src="assets/images/logo-icon-white.svg" alt="logo-icon-white" />
                                            </div>
                                            <div class="container">
                                                <div class="full-menu-logo-row">
                                                    <div class="row">
                                                        <div class="col-lg-4">
                                                            <div class="site-branding">
                                                                <a href="index-2.html" title="Travel & Tour"><img src="assets/images/white-logo.png" alt="Logo" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-5">
                                                        <div class="menu-container">
                                                            <ul>
                                                                <li class="active">
                                                                    <a href="index-2.html">Home</a>
                                                                </li>
                                                                <li>
                                                                    <a href="about.html">About</a>
                                                                </li>
                                                                <li class="dropdown-items">
                                                                    <a href="javascript:void(0);">Destination</a>
                                                                    <ul class="sub-menu">
                                                                        <li>
                                                                            <a href="destination.html">Destination</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="destination-detail.html">Destination Detail</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li class="dropdown-items">
                                                                    <a href="javascript:void(0);">Tour</a>
                                                                    <ul class="sub-menu">
                                                                        <li>
                                                                            <a href="tour.html">Tour</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="tour-detail.html">Tour Detail</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li class="dropdown-items">
                                                                    <a href="javascript:void(0);">Blog</a>
                                                                    <ul class="sub-menu">
                                                                        <li>
                                                                            <a href="blog.html">Blog</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="blog-detail.html">Blog Detail</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <a href="contact.html">Contact us</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="full-menu-social">
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;