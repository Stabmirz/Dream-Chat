function Messages(msg){
    let container = document.createElement('div');

    container.innerHTML = `
    <div>
        ${msg.text}
    </div>
    `
    return container;
}