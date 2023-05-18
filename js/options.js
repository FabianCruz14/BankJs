function consultarSaldo() {
    updateBalance();
}

function ingresarMonto() {
    document.getElementById("bankOptions").style.display = "none";
    document.getElementById("transaction").style.display = "block";
}

function retirarMonto() {
    document.getElementById("bankOptions").style.display = "none";
    document.getElementById("transaction").style.display = "block";
}

function realizarTransaccion() {
    const amountInput = document.getElementById("transactionAmount");
    const amount = parseInt(amountInput.value);

    if (isNaN(amount) || amount < 10 || amount > 990) {
        alert("El monto debe ser un número entre $10 y $990.");
    } else {
        if (document.getElementById("ingresarMonto").style.display === "block") {
            currentUser.balance += amount;
        } else if (document.getElementById("retirarMonto").style.display === "block") {
            if (amount <= currentUser.balance) {
                currentUser.balance -= amount;
            } else {
                alert("No tienes suficiente saldo para realizar esta transacción.");
            }
        }

        amountInput.value = "";
        hideTransaction();
        updateBalance();
    }
}

function hideTransaction() {
    document.getElementById("transaction").style.display = "none";
    document.getElementById("bankOptions").style.display = "block";
}

function updateBalance() {
    document.getElementById("balance").style.display = "block";
    document.getElementById("amount").textContent = currentUser.balance;
}
