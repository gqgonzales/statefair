const contentTarget = document.querySelector(".entry");
const eventHub = document.querySelector("#state-fair");

eventHub.addEventListener();

export const TicketBooth = () => {
  contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
    `;
};

const rideTicketSelectedEvent = new CustomEvent("ticketSelected", {
  detail: {
    ticketSelected: "rideTicket",
  },
});

eventHub.addEventListener(rideTicketSelectedEvent);

const rideEvent = new CustomEvent("rideTicketPurchased");
