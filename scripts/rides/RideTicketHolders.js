const contentTarget = document.querySelector(".rides");
const eventHub = document.querySelector("#state-fair");

export const RideTicketHolders = (rideEvent) => {
  eventHub.addEventListener("click", (rideEvent) => {
    contentTarget.innerHTML += `
        <div class="person rider"></div>
        `;
  });
};
