import { useState } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { toast } from "react-toastify";
import { useNavigate, useParams, Link } from "react-router-dom";
import config from "../../../config/index";
import "../../css/reset.css";
import { RiEyeOffFill, RiEyeFill } from "react-icons/ri"; // Import icons

function ResetPassword() {

  const { resetToken } = useParams();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
    confirmNewPassword: "",
    currentPassword: ""
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    newPassword: "",
    confirmNewPassword: "",
    currentPassword: ""
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleToggleCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

    if (!formData.currentPassword) {
      newErrors.currentPassword = "Please enter your current password.";
      valid = false;
    }

    if (!formData.newPassword) {
      newErrors.newPassword = "Please enter a new password.";
      valid = false;
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = "New password must be at least 6 characters.";
      valid = false;
    } else if (formData.newPassword.length > 50) {
      newErrors.newPassword = "New password must be less than 50 characters.";
      valid = false;
    }

    if (!formData.confirmNewPassword) {
      newErrors.confirmNewPassword = "Please confirm your new password.";
      valid = false;
    } else if (formData.confirmNewPassword !== formData.newPassword) {
      newErrors.confirmNewPassword = "Passwords do not match.";
      valid = false;
    }

    setFormErrors(newErrors);

    return valid;
  };

  const submitResponse = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await api.post(url.AUTH.RESET_PASSWORD + `/${resetToken}`, formData);
        if (response.status === 200) {
          setTimeout(() => {
            toast.success("Password reset successful. Please login again.", {
              position: "top-right",
              autoClose: 5000,
            });
          }, 1500);
          navigate(`${config.routes.login}`);
        }
      } catch (error) {
        toast.error("Error! An error occurred. Please try again later.", {
          position: "top-right",
          autoClose: 5000,
        });
      }
    }
  };

  return (
    <body>
      <div className="reset">
        <form action="" className="reset__form" autoComplete="off">
          <Link className="back" to="#">Back</Link>
          <h1 className="reset__title">Reset Password</h1>

          {/* Current Password */}
          <div className="reset__content">
            <div className="reset__box">
              <i className="ri-user-3-line reset__icon"></i>
              <div className="reset__box-input password-container">
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  required
                  className="reset__input"
                  id="current-password"
                  placeholder=" "
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                />
                <label htmlFor="current-password" className="reset__label">Current Password</label>
                <button
                  type="button"
                  className="toggle-password"
                  onClick={handleToggleCurrentPassword}
                >
                  {showCurrentPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                </button>
              </div>
            </div>
          </div>

          <div className="reset__content">
            <div className="reset__box">
              <i className="ri-user-3-line reset__icon"></i>
              <div className="reset__box-input password-container">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="reset__input"
                  id="new-password"
                  placeholder=" "
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                />
                <label htmlFor="new-password" className="reset__label">New Password</label>
                <button
                  type="button"
                  className="toggle-password"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                </button>
              </div>
            </div>
          </div>

          <div className="reset__content">
            <div className="reset__box">
              <i className="ri-user-3-line reset__icon"></i>
              <div className="reset__box-input password-container">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  className="reset__input"
                  id="confirm-new-password"
                  placeholder=" "
                  name="confirmNewPassword"
                  value={formData.confirmNewPassword}
                  onChange={handleChange}
                />
                <label htmlFor="confirm-new-password" className="reset__label">Confirm New Password</label>
                <button
                  type="button"
                  className="toggle-password"
                  onClick={handleToggleConfirmPassword}
                >
                  {showConfirmPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                </button>
              </div>
            </div>
          </div>

          <button type="submit" className="reset__button" onClick={submitResponse}>
            Reset Password
          </button>
        </form>
      </div>
    </body>
  );
}

export default ResetPassword;
