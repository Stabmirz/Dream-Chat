function mountChatScreen() {
    $('#root').html(ChatScreen());
    initChatScreenListeners();
}


function ChatScreen() {
    let container = document.createElement('div');     //to create an HTML element

    container.id = 'chat-screen';                    //to loading screen
    container.classList.add('chat-screen');
    container.innerHTML = `
    <div class="chatBody">
    <div class="chatBox">
        <div class="header">
        <div> Hi ${window.user.email.split('@')[0]}!</div>
            <div class="user">
                <div class="userImage">
                    <input type="image" src="http://www.stickpng.com/assets/images/585e4bcdcb11b227491c3396.png" alt="">
                </div>
                <div class="userName">Mirza</div>
            </div>
            <div class="callIcon">
                <div class="audio">
                    <input type="image" src="http://cdd-biologics.com/wp-content/uploads/sites/252/2018/06/phone.png" alt="">
                </div>
                <div class="video">
                    <input type="image" src="https://image.flaticon.com/icons/png/512/17/17656.png" alt="">
                </div>
                <div class="sign-out">
                <input type="image" src="https://image.flaticon.com/icons/png/128/56/56805.png" alt="">
                </div>
            </div>
        </div>
        <div class="chatBody"></div>
        <div class="footer">
            <input type="text" value="" placeholder="write your massage"/>
            <button>SEND</button>
        </div>
    </div>
 </div>
      `;
    return container;
}

function initChatScreenListeners() {
$('.sign-out').on('click', signOut);
}