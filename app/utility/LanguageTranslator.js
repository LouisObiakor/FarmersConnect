const english =  {
        login: "Login",
        user: "User",
        password: "Password",
        forgotPassword: "Forgot Password?",
        noAccount: "Don't have an Account?",
        register: "Register",
        networkError : "Your device is not connected to the internet, kindy check and try again",
        errorForm : "An error occured processing the data... try again",
        firstName: "First Name",
        lastName: "Last Name",
        userName : "User Name",
        email : "Email",
        confirmPassword: "Confirm Password",
        haveAccount : "Have an account?",
        emailExists : "The email already exist... try a new email",
        serverErrorForm : "There was an error executing your request... try again",
        successfulRegistration : "Your registration process was successful, kindly login to your email to verify your account",
        invalidLogin : "invalid email / password",
        dear : "Dear",
        kindlyLogin : "Kindly login to your email to confirm your account",


}

const french = {
        login: "Se connecter",
        user: "utilisateur",
        password: 'mot de passe',
        forgotPassword: 'Mot de passe oublié?',
        noAccount: "Vous n'avez pas de compte ?",
        register: "Registre",
        networkError : "Votre appareil n'est pas connecté à Internet, veuillez vérifier et réessayer",
        errorForm : "Une erreur s'est produite lors du traitement des données... réessayez",
        firstName: "Prénom",
        lastName: "Nom de famille",
        userName : "Nom d'utilisateur",
        email : "E-mail",
        confirmPassword: "Confirmez le mot de passe",
        haveAccount : "Avoir un compte?",
        emailExists : "L'e-mail existe déjà... essayez un nouvel e-mail",
        serverErrorForm : "Une erreur s'est produite lors de l'exécution de votre demande... réessayez",
        successfulRegistration : "Votre processus d'inscription a réussi, veuillez vous connecter à votre adresse e-mail pour vérifier votre compte",
        invalidLogin : "email / mot de passe invalide",
        dear : "Cher",
        kindlyLogin : "Veuillez vous connecter à votre email pour confirmer votre compte",

}

const TranslateLanguage = (language) => {
    if(language === 'FR') return french;
    return english;
}

export default TranslateLanguage;