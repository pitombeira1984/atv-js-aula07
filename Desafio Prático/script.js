document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    autenticarUsuario(username, password, loginSucesso, loginFalhou);
});

function autenticarUsuario(username, password, onSuccess, onFailure) {
    const validUsername = "usuario";
    const validPassword = "senha123";

    if (username === validUsername && password === validPassword) {
        onSuccess(username.toLowerCase());
    } else {
        onFailure();
    }
}

function loginSucesso(username) {
    document.getElementById('message').textContent = `Login bem-sucedido! Bem-vindo, ${username}.`;
    document.getElementById('message').style.color = 'green';
}

function loginFalhou() {
    document.getElementById('message').textContent = 'Falha na autenticação. Verifique suas credenciais.';
    document.getElementById('message').style.color = 'red';
}
