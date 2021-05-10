// Import and invoke the ticket booth component function
import { TicketBooth } from "./TicketBooth.js";
import { RideTicketHolders } from "./rides/RideTicketHolders.js";
import { FoodTicketHolders } from "./food/FoodTicketHolder.js";
import { GameTicketHolder } from "./games/GameTicketHolder.js";
import { ShowTicketHolder } from "./sideshows/ShowTicketHolders.js";
import { ticketCounter } from "./TicketCounter.js";

TicketBooth();
RideTicketHolders();
FoodTicketHolders();
GameTicketHolder();
ShowTicketHolder();
ticketCounter();
