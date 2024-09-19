import { useState } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { toast } from "react-toastify";
import "../../css/forgot.css"
function ForgotPassword() {

  return (
    <body>
      <div class="forgot">

         <form action="" class="forgot__form" autocomplete="off">
          <image src="assets/images/avatar.png"/>
            <h1 class="forgot__title">Recover Password</h1>

            <div class="forgot__content">
               <div class="forgot__box">
                  <i class="ri-user-3-line forgot__icon"></i>

                  <div class="forgot__box-input">
                     <input type="email" required class="forgot__input" id="forgot-email" placeholder=" "/>
                     <label for="forgot-email" class="forgot__label">Email</label>
                  </div>
               </div>
            </div>

            <button type="submit" class="forgot__button">Reset Email</button>

         </form>
      </div>
      
   </body>
  );
}

export default ForgotPassword;