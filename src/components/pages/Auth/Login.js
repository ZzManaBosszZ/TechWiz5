import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

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
            redirectUrl = "/";
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
    <body style={{ backgroundImage: "url(assets/images/login-img.jpg)"}}>
      <div class="login">

         <form action="" class="login__form" autocomplete="off">
          <image src="assets/images/avatar.png"/>
            <h1 class="login__title">Login</h1>

            <div class="login__content">
               <div class="login__box">
                  <i class="ri-user-3-line login__icon"></i>

                  <div class="login__box-input">
                     <input type="email" required class="login__input" id="login-email" placeholder=" "/>
                     <label for="login-email" class="login__label">Email</label>
                  </div>
               </div>

               <div class="login__box">
                  <i class="ri-lock-2-line login__icon"></i>

                  <div class="login__box-input">
                     <input type="password" required class="login__input" id="login-pass" placeholder=" "/>
                     <label for="login-pass" class="login__label">Password</label>
                     <i class="ri-eye-off-line login__eye" id="login-eye"></i>
                  </div>
               </div>
            </div>

            <div class="login__check">
               <div class="login__check-group">
                  <input type="checkbox" class="login__check-input" id="login-check"/>
                  <label for="login-check" class="login__check-label">Remember me</label>
               </div>

               <a href="#" class="login__forgot">Forgot Password?</a>
            </div>

            <button type="submit" class="login__button">Login</button>

            <p class="login__register">
               Don't have an account? <a href="#">Register</a>
            </p>
         </form>
      </div>
      
   </body>
  );
}

export default Login;
