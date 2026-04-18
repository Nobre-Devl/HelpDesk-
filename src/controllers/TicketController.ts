import { Request, Response } from "express";

export class TicketController {
  // Metodo para criar um novo chamado
  async create(request: Request, response: Response) {
    const { titulo, descricao, prioridade } = request.body;

    return response.status(201).json({
      mensagem: "Chamado recebido com sucesso!",
      dados: { titulo, descricao, prioridade },
    });
  }
}
