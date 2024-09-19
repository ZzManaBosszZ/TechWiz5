import { useState } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { toast } from "react-toastify";
import "../../css/forgot.css"

// Import the email icon from react-icons
import { RiMailLine } from "react-icons/ri";

function ForgotPassword() {

   const [formSubmitted, setFormSubmitted] = useState(false);
   const [submitting, setSubmitting] = useState(false);
 
   const [formData, setFormData] = useState({
     email: "",
   });
 
   const [formErrors, setFormErrors] = useState({
     email: "",
   });
 
   const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData({ ...formData, [name]: value });  // Update form data state
     setFormErrors({ ...formErrors, [name]: "" });
   };
 
   const isEmailValid = (email) => {
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return emailRegex.test(email);
   };
 
   const validateForm = () => {
     let valid = true;
     const newErrors = {};
 
     if (!formData.email) {
       valid = false;
       newErrors.email = "Please enter your email.";
     } else if (!isEmailValid(formData.email)) {
       valid = false;
       newErrors.email = "Please enter a valid email address.";
     }
 
     setFormErrors(newErrors);
 
     return valid;
   };
 
   const submitResponse = async (e) => {
     e.preventDefault();
 
     if (validateForm()) {
       try {
         setSubmitting(true);
 
         await api.post(url.AUTH.FORGOT_PASSWORD, formData);
         setTimeout(() => {
           setFormSubmitted(true);
           setSubmitting(false);
           toast.success("Submitted successfully!", {
             position: "top-right",
             autoClose: 2000,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: "colored",
           });
         }, 1500);
       } catch (error) {
         setTimeout(() => {
           setFormSubmitted(true);
           setSubmitting(false);
           toast.success("Submitted successfully!", {
             position: "top-right",
             autoClose: 2000,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: "colored",
           });
         }, 1500);
       }
     }
   };

   return (
    <body>
      <div className="forgot">

         <form className="forgot__form" autoComplete="off" onSubmit={submitResponse}>
            <a className="back" href="#">Back</a>
            <h1 className="forgot__title">Recover Password</h1>

            <div className="forgot__content">
               <div className="forgot__box">
                  {/* Use email icon */}
                  <RiMailLine className="forgot__icon" /> 

                  <div className="forgot__box-input">
                     <input
                       type="email"
                       name="email"  // Make sure name is set correctly
                       required
                       className="forgot__input"
                       id="forgot-email"
                       value={formData.email}  // Link input to form state
                       onChange={handleChange}  // Handle input change
                       placeholder=" " />
                     <label htmlFor="forgot-email" className="forgot__label">Email</label>
                     {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                  </div>
               </div>
            </div>

            <button type="submit" className="forgot__button" disabled={submitting}>
              {submitting ? "Sending..." : "Reset Email"}
            </button>

         </form>
      </div>
    </body>
   );
}

export default ForgotPassword;
