const contentTarget = document.querySelector(".sideshow");
const eventHub = document.querySelector("#state-fair");

export const ShowTicketHolder = () => {
  eventHub.addEventListener("showTicketPurchased", (showEvent) => {
    contentTarget.innerHTML += `
        <div class="person gawker"></div>
        `;
  });
};
