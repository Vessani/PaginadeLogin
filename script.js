// Carregar a biblioteca do Facebook SDK
window.fbAsyncInit = function() {
    FB.init({
        appId: 'SEU_APP_ID_DO_FACEBOOK',
        cookie: true,
        xfbml: true,
        version: 'v15.0'
    });
};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Botão de login do Facebook
document.getElementById("facebookLoginBtn").addEventListener("click", function() {
    FB.login(function(response) {
        if (response.authResponse) {
            // Autenticação bem-sucedida, realizar ações necessárias
            alert("Login com Facebook realizado com sucesso!");
        } else {
            // Falha na autenticação
            alert("Falha no login com Facebook!");
        }
    });
});

// Carregar a biblioteca do Google Sign-In
function onGoogleSignIn(googleUser) {
    // Autenticação bem-sucedida, realizar ações necessárias
    alert("Login com Google realizado com sucesso!");
}

// Botão de login do Google
document.getElementById("googleLoginBtn").addEventListener("click", function() {
    gapi.auth2.getAuthInstance().signIn();
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado

    // Obter os valores digitados pelo usuário
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorContainer = document.getElementById("errorContainer");

    // Limpar mensagens de erro
    document.getElementById("usernameError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    errorContainer.textContent = "";

    // Validação de entrada
    let hasError = false;

    if (username.trim() === "") {
        document.getElementById("usernameError").textContent = "Nome de usuário é obrigatório";
        hasError = true;
    }

    if (password.trim() === "") {
        document.getElementById("passwordError").textContent = "Senha é obrigatória";
        hasError = true;
    }

    if (hasError) {
        // Houve erros de validação, interrompa o processo de login
        return;
    }

    // Verificar os valores (exemplo simples)
    if (username === "usuario" && password === "senha") {
        alert("Login realizado com sucesso!");
        // Redirecionar para a página de sucesso ou executar outras ações desejadas
    } else {
        document.getElementById("passwordError").textContent = "Usuário ou senha inválidos";
    }
});
