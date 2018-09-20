function mountSignUpScreen(){
    $('#root').html(SignUpScreen());
    initSignUpScreenListeners();
}
    
    function SignUpScreen(){
       let container = document.createElement('div');     //to create an HTML element
       container.id = 'sign-up-screen';                    //to loading screen
       container.classList.add('sign-up-screen') ;
       //to create in center
       container.innerHTML = `
        <div class="sign-up-box">
            <span class="go-back" id="go-back">
                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"/></svg>
            </span>
            <div class="sign-up-logo">
               <img id="sign-up-logo" src="../images/sign-up.png" alt="logo">
            </div>
            <div class="sign-up">
                <div class="email">
                    <form>
                       <input type="text" id="email" placeholder="Email">
                    </form>
                </div>
                <div class="user-name">
                    <form>
                       <input type="text" id="user-name" placeholder="Username">
                    </form>
                </div>
                <div class="password">
                    <form>
                        <input type="password" id="password" value="" placeholder="Password">
                    </form>
                </div>
                <div class="password-confirmation">
                    <form>
                        <input type="password" id="password-confirmation" value="" placeholder="Password-Confirmation">
                    </form>
                </div>
            </div>
            <button id="sign-up" type="submit">Sign Up</button>  
        </div>
       `;
    
       return container;
    }

    function initSignUpScreenListeners() {
        $('#go-back').on('click', function() {
          navigate('login-screen');
        });
         $('#sign-up').on('click', function(){
          let email = $('#email').val();
          let password = $('#password').val();
          let passwordConfirmation = $('#password-confirmation').val();
           if (!isValidEmail(email)) {
            alert('Invalid e-mail');
          }
          else if (!isValidPassword(password)) {
            alert('Invalid password');
          }
          else if (password !== passwordConfirmation) {
            alert('Passwords do not match');
          }
          else {
            signUpWithEmailAndPassword(email, password);
          }
          
        });
    }