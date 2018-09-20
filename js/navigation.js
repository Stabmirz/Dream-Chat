function navigate(screen) {
    const root = $('#root');

    switch (screen) {
        case 'loading-screen':
            mountLoadingScreen();
            break;

        case 'login-screen':
            mountLoginScreen();
            break;

        case 'sign-up-screen':
            mountSignUpScreen();
            break;

        case 'chat-screen':
            mountChatScreen();
            break;

        default:
            $('root').html('');
            break;
    }
}