function Messages(msg){
    let container = document.createElement('div');
    let isMe = msg.uid === user.uid;
    container.style.textAlign = isMe ? 'right' : 'left';
    container.style.margin = '10px 20px;'

    container.innerHTML = `
    ${!isMe ?
    `<div class="msg-name">${msg.email.split('@')[0]}</div>`
    :''}

    <div class="${isMe ? 'msg-bubble-right' : 'msg-bubble-left'}">
        ${msg.text}
    </div>
    `
    return container;
}