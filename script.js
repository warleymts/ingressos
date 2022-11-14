console.log("Hello, World");

const buybutton = document.getElementById("Buy-button");
const cartform = document.getElementById("cart-form");

const addticket = document.getElementById("add-ticket");
const removeticket = document.getElementById("remove-ticket");
const ticket = document.getElementById("ticket");
const ticketprice = document.getElementById("ticket-price");

addticket.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Adicionar");
  ticket.innerText = parseInt(ticket.innerText) + 1;
  ticketprice.innerText = parseInt(ticket.innerText) * 90;
});

removeticket.addEventListener("click", (e) => {
  console.log("Remover");
  e.preventDefault();
  if (parseInt(ticket.innerText) !== 1) {
    ticket.innerText = parseInt(ticket.innerText) - 1;
    ticketprice.innerText = parseInt(ticket.innerText) * 90;
  }
});


cartform.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = cartform.nome.value;
  const email = cartform.email.value;
  const quantitytickets = ticket.innerText;

  window.localStorage.setItem("nome", nome);
  window.localStorage.setItem("email", email);
  window.localStorage.setItem("quantitytickets", quantitytickets);
  window.Location.href = "final.html";

  console.log("Nome:", nome);
  console.log("Email:", email);
  console.log("Tickets", ticket.innerText);
});
