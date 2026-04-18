import { Router } from "express";
import { TicketController } from "./controllers/TicketController";

const routes = Router();
const ticketController = new TicketController();

// Defini que a rota /chamados aceita POST e chama o controller
routes.post("/chamados", ticketController.create);

export { routes };
