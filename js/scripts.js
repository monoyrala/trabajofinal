// scripts.js

let totalDonacion = 0;
const carrito = [];

// Función para agregar donación al carrito
function agregarDonacion(cantidad) {
  carrito.push(cantidad);
  totalDonacion += cantidad;
  actualizarCarrito();
}

// Función para actualizar la visualización del carrito y el total
function actualizarCarrito() {
  const cartItems = document.getElementById("cart-items");
  const totalAmount = document.getElementById("total-amount");
  
  // Limpiamos el carrito antes de actualizar
  cartItems.innerHTML = "";
  
  // Mostramos cada donación en el carrito
  carrito.forEach((cantidad, index) => {
    const li = document.createElement("li");
    li.textContent = `Donación de $${cantidad}`;
    cartItems.appendChild(li);
  });
  
  // Actualizamos el total
  totalAmount.textContent = totalDonacion;
}

// Función para "finalizar" la donación
function checkout() {
  if (totalDonacion > 0) {
    alert(`¡Gracias por tu donación de $${totalDonacion}!`);
    
    // Reseteamos el carrito y el total
    carrito.length = 0;
    totalDonacion = 0;
    actualizarCarrito();
  } else {
    alert("Tu carrito está vacío. Agrega una donación para continuar.");
  }
}
