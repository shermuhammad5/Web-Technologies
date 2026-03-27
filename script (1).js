const form = document.getElementById("ticketForm");
const ticketList = document.getElementById("ticketList");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function(e){
  e.preventDefault();
  
  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();
  const priority = document.getElementById("priority").value;

  if(title === "") {
    errorMsg.textContent = "Ticket subject is required.";
    return;
  }

  errorMsg.textContent = "";

  const ticketDiv = document.createElement("div");
  ticketDiv.className = "ticket";
  ticketDiv.innerHTML = `
    <span>${title}: ${description} [${priority}]</span>
    <button class="delete btn">Delete</button>
  `;

  ticketList.appendChild(ticketDiv);

  ticketDiv.querySelector(".delete").addEventListener("click", () => {
    ticketDiv.remove();
  });

  form.reset();
});

// Delete initial tickets
document.querySelectorAll(".ticket .delete").forEach(btn => {
  btn.addEventListener("click", (e) => {
    btn.parentElement.remove();
  });
});