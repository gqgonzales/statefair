const contentTarget = document.querySelector(".entry");
const eventHub = document.querySelector("#state-fair");

export const TicketBooth = () => {
  contentTarget.innerHTML += `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
    `;
};

eventHub.addEventListener("click", (event) => {
  if (event.target.id === "rideTicket") {
    const rideEvent = new CustomEvent("rideTicketPurchased");
    eventHub.dispatchEvent(rideEvent);
  }
});