const restaurantName = "Spooky Bites";
let isOpen = true;
let customerName = "";
let mealPrice = 0;
let quantity = 1;
let total = 0;

const prices = {
  "Spider Pizza": 150,
  "Pumpkin Pasta": 180,
  "Ghost Burger": 120
};

const status = document.getElementById("status");
const result = document.getElementById("result");

function displayStatus() {
  status.textContent = isOpen
    ? "We are OPEN!"
    : "We are CLOSED!";
}

function toggleStatus() {
  isOpen = !isOpen;
  displayStatus();
}

function greetCustomer() {
  customerName = document.getElementById("customer").value.trim();

  if (!customerName) {
    alert("Please enter your name first!");
    return;
  }

  alert("Boo, " + customerName + "! Welcome to " + restaurantName + "!");
}

function placeOrder() {
  customerName = document.getElementById("customer").value.trim();
  const selectedMeal = document.getElementById("meal").value;
  quantity = Number(document.getElementById("quantity").value);

  if (!customerName) {
    result.textContent = "Please enter your name first!";
    return;
  }

  if (!Number.isInteger(quantity) || quantity < 1) {
    result.textContent = "Please enter a valid quantity.";
    return;
  }

  if (!isOpen) {
    result.textContent = "Sorry! The restaurant is closed.";
    return;
  }

  mealPrice = prices[selectedMeal];
  total = mealPrice * quantity;

  const confirmOrder = confirm(
    "Confirm your order of " + quantity + " " + selectedMeal + "(s), worth ₱" + total + "?"
  );

  if (!confirmOrder) {
    result.textContent = "Your order was cancelled.";
    return;
  }

  let discount = 0;
  if (total >= 300) {
    discount = total * 0.10;
  }
  const finalTotal = total - discount;

  const recommendation = total >= 300
    ? "Try our Halloween Party Combo!"
    : "Add another spooky treat!";

  result.textContent =
    "Thank you, " + customerName +
    "! Meal: " + selectedMeal +
    " | Quantity: " + quantity +
    " | Original Total: ₱" + total +
    " | Discount: ₱" + discount +
    " | Final Total: ₱" + finalTotal +
    " | Recommendation: " + recommendation;
}

function showMenuMessage() {
  alert("Welcome to " + restaurantName + "! Choose your spooky meal.");
}

displayStatus();

document.getElementById("statusBtn")
  .addEventListener("click", toggleStatus);

document.getElementById("greetBtn")
  .addEventListener("click", greetCustomer);

document.getElementById("orderBtn")
  .addEventListener("click", placeOrder);

document.querySelector('a[href="#menu"]')
  .addEventListener("click", showMenuMessage);
