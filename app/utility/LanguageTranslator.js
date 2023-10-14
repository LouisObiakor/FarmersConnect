const english =  {
        login: "Login",
        user: "User",
        password: "Password",
        forgotPassword: "Forgot Password?",
        noAccount: "Don't have an Account?",
        register: "Register",
        networkError : "Your device is not connected to the internet, kindy check and try again",
        errorSendingLogin : "An error occured logging you in... try again",
}

const french = {
        login: "Se connecter",
        user: "utilisateur",
        password: 'mot de passe',
        forgotPassword: 'Mot de passe oublié?',
        noAccount: "Vous n'avez pas de compte ?",
        register: "Registre",
        networkError : "Votre appareil n'est pas connecté à Internet, veuillez vérifier et réessayer",
        errorSendingLogin : "Une erreur s'est produite lors de votre connexion... réessayez",
}

const TranslateLanguage = (language) => {
    if(language === 'FR') return french;
    return english;
}

export default TranslateLanguage;