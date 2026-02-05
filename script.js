// Optional: highlight active link while scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60; // adjust for sticky navbar
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});
let total = 0;

function addToCart(name, image, price, rating) {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  // Create cart item div
  const item = document.createElement("div");
  item.classList.add("cart-item");

  item.innerHTML = `
    <img src="${image}" alt="${name}">
    <div>
      <p><strong>${name}</strong></p>
      <p>${price}</p>
      <p>${rating}</p>
    </div>
  `;

  cartItems.appendChild(item);

  // Update total
  total += parseInt(price.replace("₹",""));
  cartTotal.innerHTML = `<strong>Total: ₹${total}</strong>`;
}


function addToCart(name, image, price, rating) {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  // Create cart item div
  const item = document.createElement("div");
  item.classList.add("cart-item");

  // Convert price to number
  const priceValue = parseInt(price.replace("₹",""));

  item.innerHTML = `
    <img src="${image}" alt="${name}">
    <div>
      <p><strong>${name}</strong></p>
      <p>${price}</p>
      <p>${rating}</p>
    </div>
    <button class="remove-btn" onclick="removeFromCart(this, ${priceValue})">Remove</button>
  `;

  cartItems.appendChild(item);

  // Update total
  total += priceValue;
  cartTotal.innerHTML = `<strong>Total: ₹${total}</strong>`;
}

function removeFromCart(button, priceValue) {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  // Remove item
  const item = button.parentElement;
  cartItems.removeChild(item);

  // Update total
  total -= priceValue;
  cartTotal.innerHTML = `<strong>Total: ₹${total}</strong>`;
}

// Checkout button
document.getElementById("checkout-btn").addEventListener("click", () => {
  if (total > 0) {
    alert(`Thank you for your purchase! Total amount: ₹${total}`);
    // Reset cart
    document.getElementById("cart-items").innerHTML = "";
    total = 0;
    document.getElementById("cart-total").innerHTML = `<strong>Total: ₹0</strong>`;
  } else {
    alert("Your cart is empty!");
  }
});
