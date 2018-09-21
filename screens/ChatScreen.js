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
                        <input type="image" src="../images/user.png" alt="">
                    </div>
                <div class="userName">${window.user.email.split('@')[0]}</div>
            </div>
            <div class="callIcon">
                <div class="audio">
                    <input type="image" src="../images/audio.png" alt="">
                </div>
                <div class="video">
                    <input type="image" src="../images/video.png" alt="">
                </div>
                <div class="sign-out">
                    <input type="image" src="../images/sign-out.png" alt="">
                </div>
            </div>
        </div>
        <div class="chat-messages" id="chat-messages"></div>
        <div class="footer">
            <input id="chat-input-msg" type="text" value="" placeholder="    write your massage"/>
            <button id="chat-send-btn">
                <img id ="send" src="../images/send.png"/>
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
        scroll();
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
    let currentPerson = '';

       for (let mid in msgs) {
           let msg = msgs[mid];
           let showUsername = true;

           if(user.email === msg.email){
               currentPerson = msg.email;
               showUsername = false;
           }
           else if(currentPerson === msg.email){
               showUsername = false;
           }
           else {
               currentPerson = msg.email;
           }
           // console.log(msg);
           $('#chat_messages').append(Messages(msg,showUsername));
       }

       scroll();

    });

    function scroll(){
        let height = $('#chat-messages')[0].scrollHeight;

        $('#chat-messages').scrollTop(height);

    }
}