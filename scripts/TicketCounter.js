const contentTarget = document.querySelector(".customers");
const eventHub = document.querySelector("#state-fair");

let tickets = 0;

contentTarget.innerHTML = `Total tickets purchased: ${tickets}`;

export const ticketCounter = () => {
  eventHub.addEventListener("ticket", (CustomEvent) => {
    tickets++;
    contentTarget.innerHTML = `Total tickets purchased: ${tickets}`;
  });
};
