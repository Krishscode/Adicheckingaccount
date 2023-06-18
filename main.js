// Check if the user is already logged in
if (localStorage.getItem("loggedIn") === "true") {
  showBalance();
} else {
  showLoginForm();
}

// Handle login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const password = document.getElementById("password").value;

  // Check if the password is correct
  if (password === "Krish*101") {
    localStorage.setItem("loggedIn", "true");
    showBalance();
  } else {
    alert("Incorrect password!");
  }
});

// Handle transaction form submission
document.getElementById("transactionForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const amount = parseInt(document.getElementById("amount").value);
  const currentBalance = parseInt(localStorage.getItem("balance"));
  const transactionType = event.submitter.id; // Check if deposit or withdraw button clicked
  let newBalance;

  if (transactionType === "depositButton") {
    newBalance = currentBalance + amount;
  } else if (transactionType === "withdrawButton") {
    if (amount > currentBalance) {
      alert("Insufficient balance!");
      return;
    }
    newBalance = currentBalance - amount;
  }

  localStorage.setItem("balance", newBalance);
  document.getElementById("balanceAmount").textContent = "$" + newBalance;
  document.getElementById("amount").value = "";
});

// Handle logout button click
document.getElementById("logoutButton").addEventListener("click", function() {
  localStorage.setItem("loggedIn", "false");
  showLoginForm();
});

// Show login form and hide other elements
function showLoginForm() {
  document.getElementById("loginForm").classList.remove("hidden");
  document.getElementById("transactionForm").classList.add("hidden");
  document.getElementById("balance").
