import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import url from "../../services/url";
import { getAccessToken, removeAccessToken } from "../../utils/auth";
import config from "../../config";
import "../css/style.css";

function Header() {
  const [profile, setProfile] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    removeAccessToken();
    setIsLoggedIn(false);
    navigate(config.routes.home);
  };

  // Show list data
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await api.get(url.AUTH.PROFILE, {
          headers: { Authorization: `Bearer ${getAccessToken()}` },
        });
        setProfile(response.data.data);
        setIsLoggedIn(true);
      } catch (error) {
        setIsLoggedIn(false);
      }
    };
    loadProfile();
  }, []);

  return (
    <header className="site-header">
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <ul className="contact-list-item">
                <li>
                  <a href="mailto:holidayplanners@gmail.com" title="holidayplanners@gmail.com">
                    <span className="icon">
                      <i className="far fa-envelope"></i>
                    </span>
                    <span className="text">
                      <span className="__cf_email__" data-cfemail="">
                        holidayplanners@gmail.com
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="tel:1234567890" title="+123 456 7890">
                    <span className="icon">
                      <i className="fas fa-phone-alt"></i>
                    </span>
                    <span className="text">+84 367640262</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <ul className="header-social">
                <li>
                  <a href="javascript:void(0);" title="Follow us on Facebook">
                    <span className="icon">
                      <i className="fab fa-facebook-f"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" title="Follow us on Instagram">
                    <span className="icon">
                      <i className="fab fa-instagram"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" title="Follow us on Twitter">
                    <span className="icon">
                      <i className="fab fa-twitter"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-header">
        <div className="container">
          <div className="bottom-header-inner">
            <div className="row">
              <div className="col-lg-4">
                <div className="site-branding">
                  <a href="index-2.html" title="Travel & Tour">
                    <img src="/assets/images/logo.png" alt="Logo" />
                  </a>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="header-menu-side">
                  <div className="header-reserve-btn for-des">
                    <a href={config.routes.create_trip} className="sec-btn" title="Reserve">
                      <span>Begin Your Trip</span>
                    </a>
                  </div>

                  <div className="search-icon">
                      <i className="fas fa-bell"></i>
                  </div>

                  <div className="dropdown">
                    <div className="search-icon">
                      <i className="fas fa-user"></i>
                    </div>
                    <div className="dropdown-content">
                      {isLoggedIn ? (
                        <>
                          <a className="profile-drop" href={config.routes.trip}>
                            Your Trip
                          </a>
                          <a className="logout-drop" onClick={handleLogout}>
                            Logout
                          </a>
                        </>
                      ) : (
                        <>
                          <a className="login-drop" href={config.routes.login}>
                            Login
                          </a>
                          <a className="signup-drop" href={config.routes.register}>
                            Sign Up
                          </a>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="main-navigation">
                    <button type="button" className="navigation-btn">
                      <span className="first"></span>
                      <span className="second"></span>
                      <span className="third"></span>
                    </button>
                    <div className="full-menu">
                      <div className="logo-icon">
                        <img
                          src="/assets/images/logo-icon-white.svg"
                          alt="logo-icon-white"
                        />
                      </div>
                      <div className="container">
                        <div className="full-menu-logo-row">
                          <div className="row">
                            <div className="col-lg-4">
                              <div className="site-branding">
                                <a href="index-2.html" title="Travel & Tour">
                                  <img
                                    src="/assets/images/white-logo.png"
                                    alt="Logo"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-5">
                            <div className="menu-container">
                              <ul>
                                <li className="active">
                                  <a href={config.routes.home}>Home</a>
                                </li>
                                <li>
                                  <a href={config.routes.about_us}>About</a>
                                </li>
                                <li className="dropdown-items">
                                  <a >My Trip Expense</a>
                                  <ul className="sub-menu">
                                    <li>
                                      <a href={config.routes.trip}>Tour</a>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <a href={config.routes.contact_us}>Contact us</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="full-menu-social">
                              <ul>
                                <li>
                                  <a
                                    href="javascript:void(0);"
                                    title="Follow us on Facebook"
                                  >
                                    <span className="icon">
                                      <i className="fab fa-facebook-f"></i>
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:void(0);"
                                    title="Follow us on Instagram"
                                  >
                                    <span className="icon">
                                      <i className="fab fa-instagram"></i>
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:void(0);"
                                    title="Follow us on Twitter"
                                  >
                                    <span className="icon">
                                      <i className="fab fa-twitter"></i>
                                    </span>
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
