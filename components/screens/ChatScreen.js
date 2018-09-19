function mountChatScreen() {
    let db = firebase.database();
    let messages = db.ref('messages/');

    $('#root').html(ChatScreen());
    
    initChatScreenListeners(messages);
}


function ChatScreen() {
    let container = document.createElement('div');     //to create an HTML element

    container.id = 'chat-screen';                    //to loading screen
    container.classList.add('chat-screen');
    container.innerHTML = `
    <div class="chatBody">
        <div class="chatBox">
            <div class="header">
                <div class="user">
                    <div class="userImage">
                        <input type="image" src="http://www.stickpng.com/assets/images/585e4bcdcb11b227491c3396.png" alt="">
                    </div>
                <div class="userName">${window.user.email.split('@')[0]}</div>
            </div>
            <div class="callIcon">
                <div class="audio">
                    <input type="image" src="https://miatosf.com/wp-content/uploads/2017/08/phone-call-icon-2-blue.png" alt="">
                </div>
                <div class="video">
                    <input type="image" src="https://iconsplace.com/wp-content/uploads/_icons/40e0d0/256/png/video-call-icon-17-256.png" alt="">
                </div>
                <div class="sign-out">
                    <input type="image" src="https://www.smartnation.com.bn/uploads/challenge_featured_image/1-100/8/1477290657_switch-turn-off-icon.png" alt="">
                </div>
            </div>
        </div>
        <div class="chat-messages" id="chat-messages"></div>
        <div class="footer">
            <input id="chat-input-msg" type="text" value="" placeholder="    write your massage"/>
            <button id="chat-send-btn">
                <img id ="send" src="https://cdn4.iconfinder.com/data/icons/message-4-flat/512/26_Send-512.png"/>
            </button>
        </div>
    </div>
    `;
    return container;
}

function initChatScreenListeners(messages) {

    let sendMessage = (e) => {
        let date = new Date();
        let text = $("#chat-input-msg").val();

        messages.push({
            uid: user.uid,
            email: user.email,
            photoURL: user.photoURL,
            date: date,
            text: text
        })

        $("#chat-input-msg").val('')
    }

    $('.sign-out').on('click', signOut);
    $('#chat-send-btn').on('click', sendMessage);

    $('#chat-input-msg').keypress('click', function (e) {
        if (e.keyCode === 13) {
            sendMessage();
        }
    }).keyup(function () {
        //we are going to do some cool stuff here
    });

    messages.on('value', function (snapshot) {
        let msgs = snapshot.val();

        $('#chat-messages').html('');
        for (let mid in msgs) {
            let msg = msgs[mid];
            console.log(msg);
            $('#chat-messages').append(Messages(msg));
        }
    });
}