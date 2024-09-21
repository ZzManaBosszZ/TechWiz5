import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import url from "../../../services/url";
import api from "../../../services/api";
import "../../css/register.css";

// Import icons from react-icons
import { RiUser3Line, RiMailLine, RiLock2Line, RiEyeOffLine, RiEyeLine } from "react-icons/ri"; 
import config from "../../../config";

function Register() {
   const navigate = useNavigate();

   const [showPassword, setShowPassword] = useState(false);  // State to toggle password visibility

   const [formData, setFormData] = useState({
      fullname: "",
      email: "",
      password: "",
   });

   const [formErrors, setFormErrors] = useState({
      fullname: "",
      email: "",
      password: "",
   });

   const handleTogglePassword = () => {
      setShowPassword(!showPassword);  // Toggle password visibility
   };

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      setFormErrors({ ...formErrors, [name]: "" });
   };

   const validateForm = () => {
      let valid = true;
      const newErrors = {};

      if (!formData.fullname) {
         newErrors.fullname = "Please enter your full name.";
         valid = false;
      } else if (formData.fullname.length < 3) {
         newErrors.fullname = "Full name must have at least 3 characters";
         valid = false;
      }

      if (!formData.email) {
         newErrors.email = "Please enter your email address.";
         valid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
         newErrors.email = "Please enter a valid email address.";
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

   const handleSignUp = async (e) => {
      e.preventDefault();

      if (validateForm()) {
         try {
            const registerRequest = await api.post(url.AUTH.SIGN_UP, formData);

            if (registerRequest.status === 200) {
               toast.success("Register successfully!", {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
               });
               setTimeout(() => {
                  navigate("/login");
               }, 2000);
            }
         } catch (error) {
            console.error("Error during registration:", error);
            toast.error("Registration failed. Please try again.", {
               position: "top-right",
               autoClose: 3000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
            });
         }
      }
   };

   return (
      <>
         <ToastContainer />
         <body style={{ backgroundImage: "url(assets/images/destination-detail-banner.jpg)" }}>
            <div className="register">
               <form className="register__form" onSubmit={handleSignUp}>
                  <a className="return" href={config.routes.login}>Back</a>
                  <h1 className="register__title">Register</h1>
                  <div className="register__content">
                     
               
                     <div className="register__box">
                        <RiUser3Line className="register__icon" /> 
                        <div className="register__box-input">
                           <input
                              type="text"
                              name="fullname"
                              className={`register__input ${formErrors.fullname ? "is-invalid" : ""}`}
                              id="register-name"
                              placeholder=" "
                              value={formData.fullname}
                              onChange={handleChange}
                              autoFocus />
                           <label htmlFor="register-name" className="register__label">Name</label>
                           {formErrors.fullname && <div className="invalid-feedback">{formErrors.fullname}</div>}
                        </div>
                     </div>

                
                     <div className="register__box">
                        <RiMailLine className="register__icon" /> 
                        <div className="register__box-input">
                           <input
                              type="email"
                              className={`register__input ${formErrors.email ? "is-invalid" : ""}`}
                              id="register-email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="" />
                           <label htmlFor="register-email" className="register__label">Email</label>
                           {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                        </div>
                     </div>

                  
                     <div className="register__box">
                        <RiLock2Line className="register__icon" /> 
                        <div className="register__box-input password-box">
                           <input
                              type={showPassword ? "text" : "password"}  // Toggle between "text" and "password"
                              className={`register__input ${formErrors.password ? "is-invalid" : ""}`}
                              id="register-pass"
                              name="password"
                              value={formData.password}
                              onChange={handleChange}
                              placeholder=" " />
                           <label htmlFor="register-pass" className="register__label">Password</label>
                           {formErrors.password && <div className="invalid-feedback">{formErrors.password}</div>}

                          
                           <button
                              type="button"
                              className="toggle-password"
                              onClick={handleTogglePassword}
                           >
                              {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                           </button>
                        </div>
                     </div>
                  </div>

                  <button type="submit" className="register__button" valueSubmit="Login...">Register Now</button>
                  <p className="login__register">
                     Have an account? <a href={config.routes.login}>Login</a>
                  </p>
               </form>
            </div>
         </body>
      </>
   );
}

export default Register;
