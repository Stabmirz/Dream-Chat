function mountLoginScreen(){
    $('#root').html(LoginScreen());
    initLoginScreenListeners();
}
    
    function LoginScreen(){
       let container = document.createElement('div');     //to create an HTML element
       container.id = 'login-screen';                    //to loading screen
       container.classList.add('Login-screen') ;
       //to create in center
       container.innerHTML = `
        <div class="box">
            <div class="logo">
               <img id="logo" src="../images/login.png" alt="logo">
            </div>
            <div class="login">
                <div class="email">
                    <input type="text" id="uname" placeholder="Username">
                </div>
                <br>
                <div class="pass">
                    <input type="password" id="pass" placeholder="Password">
                </div>
                <a href="#" class="forgot">forgot password?</a>
            </div>
            <div class="icon">
                <div><img id="facebook-login-btn" src="../images/facebook.png" alt="facebook"/></div>
                <div><img id="google-login-btn" src="../images/google.png" alt="gmail"/></div>
            </div>
            <div class="join">
                <input id="sign-in" type="submit" value="Sign In"/>
                <input id="sign-up" type="submit" value="Sign Up"/>
            </div>   
        </div>
       `;
    
       return container;
    }

    function initLoginScreenListeners(){
        $('#google-login-btn').on('click',  function(){
            createPersistantSession(logInWithGoogle);
        })
        $('#sign-up').on('click',  function(){
            navigate('sign-up-screen');
        })
    }