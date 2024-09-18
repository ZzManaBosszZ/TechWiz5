
import "../../css/register.css";
function Register(){

    return (
        <body>
          <div class="register">
             {/* <img src="src/components/img/partners-logo2.png" alt="login image" class="login__img"/> */}
    
             <form action="" class="register__form">
                <h1 class="register__title">Register</h1>
    
                <div class="register__content">
                <div class="register__box">
                      <i class="ri-user-3-line register__icon"></i>
                      <div class="register__box-input">
                         <input type="email" required class="register__input" id="register-email" placeholder=" "/>
                         <label for="register-email" class="register__label">Name</label>
                      </div>
                   </div>
                   <div class="register__box">
                      <i class="ri-user-3-line register__icon"></i>
                      <div class="register__box-input">
                         <input type="email" required class="register__input" id="register-email" placeholder=" "/>
                         <label for="register-email" class="register__label">Email</label>
                      </div>
                   </div>
    
                   <div class="register__box">
                      <i class="ri-lock-2-line register__icon"></i>
    
                      <div class="register__box-input">
                         <input type="password" required class="register__input" id="register-pass" placeholder=" "/>
                         <label for="register-pass" class="register__label">Password</label>
                         <i class="ri-eye-off-line register__eye" id="register-eye"></i>
                      </div>
                   </div>
                </div>
    
                {/* <div class="register__check">
                   <div class="register_check-group">
                      <input type="checkbox" class="register__check-input" id="register-check"/>
                      <label for="register-check" class="register__check-label">Remember me</label>
                   </div>
    
                   <a href="#" class="register__forgot">Forgot Password?</a>
                </div> */}
    
                <button type="submit" class="register__button">Register</button>
    
                <p class="login__register">
                   Have an account? <a href="#">Login</a>
                </p>
             </form>
          </div>
          
    
          <script src="assets/js/main.js"></script>
       </body>
      );
}
export default Register;