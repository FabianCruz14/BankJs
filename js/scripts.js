const accounts = [
    { username: "usuario1", password: "contraseña1", balance: 500 },
    { username: "usuario2", password: "contraseña2", balance: 250 },
    { username: "usuario3", password: "contraseña3", balance: 750 }
];

let currentUser = null;

function login() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const username = usernameInput.value;
    const password = passwordInput.value;

    const account = accounts.find(acc => acc.username === username && acc.password === password);

    if (account) {
        currentUser = account;
        usernameInput.value = "";
        passwordInput.value = "";
        window.location.href = "options.html";
    } else {
        alert("Credenciales inválidas. Por favor, inténtalo nuevamente.");
        usernameInput.value = "";
        passwordInput.value = "";
    }
}
