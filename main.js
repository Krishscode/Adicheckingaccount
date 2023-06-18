
if (localStorage.getItem("loggedIn") === "true") {
  showBalance();
} else {
  showLoginForm();
}


document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const password = document.getElementById("password").value;


  if (password === "Krish*101") {
    localStorage.setItem("loggedIn", "true");
    showBalance();
  } else {
    alert("Incorrect password!");
  }
});

document.getElementById("transactionForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const amount = parseInt(document.getElementById("amount").value);
  const currentBalance = parseInt(localStorage.getItem("balance"));
  const newBalance = currentBalance + amount;

  localStorage.setItem("balance", newBalance);
  document.getElementById("balanceAmount").textContent = "$" + newBalance;
  document.getElementById("amount").value = "";
});


document.getElementById("logoutButton").addEventListener("click", function() {
  localStorage.setItem("loggedIn", "false");
  showLoginForm();
});

function showLoginForm() {
  document.getElementById("loginForm").classList.remove("hidden");
  document.getElementById("transactionForm").classList.add("hidden");
  document.getElementById("balance").classList.add("hidden");
}


function showBalance() {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("transactionForm").classList.remove("hidden");
  document.getElementById("balance").classList.remove("hidden");

  const balance = localStorage.getItem("
