const contentTarget = document.querySelector(".entry");
const eventHub = document.querySelector("#state-fair");

export const TicketBooth = () => {
  contentTarget.innerHTML += `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="showTicket">Sideshow Ticket</button>
            <button id="fullPackageTicket">Full Package Ticket</button>

        </div>
    `;
};

eventHub.addEventListener("click", (event) => {
  if (event.target.id === "rideTicket") {
    const rideEvent = new CustomEvent("rideTicketPurchased");
    eventHub.dispatchEvent(rideEvent);
    const addCounter = new CustomEvent("ticket");
    eventHub.dispatchEvent(addCounter);
  }
});

eventHub.addEventListener("click", (event) => {
  if (event.target.id === "foodTicket") {
    const foodEvent = new CustomEvent("foodTicketPurchased");
    eventHub.dispatchEvent(foodEvent);
    const addCounter = new CustomEvent("ticket");
    eventHub.dispatchEvent(addCounter);
  }
});

eventHub.addEventListener("click", (event) => {
  if (event.target.id === "gameTicket") {
    const gameEvent = new CustomEvent("gameTicketPurchased");
    eventHub.dispatchEvent(gameEvent);
    const addCounter = new CustomEvent("ticket");
    eventHub.dispatchEvent(addCounter);
  }
});

eventHub.addEventListener("click", (event) => {
  if (event.target.id === "showTicket") {
    const showEvent = new CustomEvent("showTicketPurchased");
    eventHub.dispatchEvent(showEvent);
    const addCounter = new CustomEvent("ticket");
    eventHub.dispatchEvent(addCounter);
  }
});

eventHub.addEventListener("click", (event) => {
  if (event.target.id === "fullPackageTicket") {
    const fullPackageEvent = new CustomEvent("fullPackageTicketPurchased");
    eventHub.dispatchEvent(fullPackageEvent);
    const addCounter = new CustomEvent("ticket");
    eventHub.dispatchEvent(addCounter);
  }
});
