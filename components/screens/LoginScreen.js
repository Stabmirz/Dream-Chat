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
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Messages_Yosemite.svg/2000px-Messages_Yosemite.svg.png" height="130" width="130" alt="logo">
           <div class="centered">Dream Chat</div>
       </div>
       <div class="shadow"></div>
       <div class="login">
           <div class="email">
               <form>
                   <input type="text" id="uname" placeholder="Username">
               </form>
           </div>
           <br>
           <div class="pass">
               <form>
                  <input type="text" id="pass" placeholder="Password">
               </form>
           </div>
             <a href="#" class="forgot">forgot password?</a>
       </div>
       <div class="shadow"></div>
       <div class="icon">
           <div id="facebook-login-btn"><img src="http://www.iconarchive.com/download/i59749/hopstarter/rounded-square/Social-Network-Facebook.ico" alt="facebook"/></div>
           <div id="google-login-btn"><img src="http://wfarm1.dataknet.com/static/resources/icons/set1/a69848bc11cf9.png" alt="gmail"/></div>
       </div>
       <div class="shadow"></div>
       <div class="submit">
           <input type="submit" style="background-color: rgb(255, 102, 0); height: 70px;" value="Sign In"/>
           <input type="submit" style="background-color:rgb(255, 102, 0); border-radius: 4px 4px 14px 14px; height: 70px;" value="Sign Up"/>
       </div>
       
   </div>
       `;
    
       return container;
    }

    function initLoginScreenListeners(){
        $('#google-login-btn').on('click',  function(){
            createPersistantSession(logInWithGoogle);
        })
    }