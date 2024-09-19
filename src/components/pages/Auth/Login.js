import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getDecodedToken,
  removeAccessToken,
  setAccessToken,
} from "../../../utils/auth";
import config from "../../../config/index";
import api from "../../../services/api";
import url from "../../../services/url";
import "../../css/login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value.trim() });  
    setFormErrors({ ...formErrors, [name]: "" });
};


  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Please enter your email address.";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "Please enter your password.";
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      valid = false;
    } else if (formData.password.length > 50) {
      newErrors.password = "Password must be less than 50 characters.";
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };



  const handleLogin = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const loginRequest = await api.post(url.AUTH.LOGIN, formData);

        if (loginRequest.status === 200) {
          const token = loginRequest.data.token;
          setAccessToken(token);

          const decodeToken = getDecodedToken();
          let accountRole = decodeToken.Role[0].authority;

          let redirectUrl = "";
          if (accountRole === "ADMIN" || accountRole === "USER") {
            redirectUrl = config.routes.home;
            // Điều hướng đến trang chính và tải lại trang
            navigate(redirectUrl, { replace: true });
            window.location.reload();
          } else if (accountRole === "") {
            removeAccessToken();
            setFormErrors({
              email: "Invalid email or password.",
              password: "Invalid email or password.",
            });
          }

          navigate(redirectUrl);
        } else {
          setFormErrors({
            email: "Invalid email or password.",
            password: "Invalid email or password.",
          });
        }
      } catch (error) {
        setFormErrors({
          email: "Invalid email or password.",
          password: "Invalid email or password.",
        });
      }
    }
  };
  return (
    <body style={{ backgroundImage: "url(assets/images/destination-detail-banner.jpg)" }}>
      <div className="login">
        <form className="login__form" onSubmit={handleLogin}>
          <image src="assets/images/avatar.png" />
          <h1 className="login__title">Login</h1>
          <div className="login__content">
            <div className="login__box">
              <i className="ri-user-3-line login__icon"></i>
              <div className="login__box-input">
                <input
                  type="email"
                  name="email"
                  className={`login__input ${formErrors.email ? "is-invalid" : ""}`}
                  id="login-email"
                  value={formData.email}
                  onChange={handleChange}
                  autoFocus
                  placeholder=""/>
                <label for="login-email" className="login__label">Email</label>
                {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
              </div>
            </div>

            <div className="login__box">
              <i className="ri-lock-2-line login__icon"></i>
              <div className="login__box-input">
                <input
                  type="password"
                  name="password"
                  className={`login__input ${formErrors.password ? "is-invalid" : ""}`}
                  id="login-pass"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder=" " />
                <label for="login-pass" className="login__label">Password</label>
                {formErrors.password && <div className="invalid-feedback">{formErrors.password}</div>}
                <i className="ri-eye-off-line login__eye" id="login-eye"></i>
              </div>
            </div>
          </div>

          <div className="login__check">
            <div className="login__check-group">
              <input type="checkbox" className="login__check-input" id="login-check" />
              <label for="login-check" className="login__check-label">Remember me</label>
            </div>

            <a href="#" className="login__forgot">Forgot Password?</a>
          </div>

          <button type="submit" className="login__button">Login</button>

          <p className="login__register">
            Don't have an account? <a href= "">Register</a>
          </p>
        </form>
      </div>
    </body>
  );
}

export default Login;
