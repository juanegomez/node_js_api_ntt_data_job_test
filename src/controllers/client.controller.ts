import { Request, Response, NextFunction } from "express";
import boom from "@hapi/boom";
import { ClienteService } from "../services/client.service";

const clienteService = ClienteService.getInstance();

export const getClientHandler = (
  req: Request<{ tipoDocumento: string; numeroDocumento: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { tipoDocumento, numeroDocumento } = req.params;
    const client = clienteService.getClient(tipoDocumento, numeroDocumento);

    if (!client) {
      return next(boom.notFound("Cliente no encontrado"));
    }

    return res.json(client);
  } catch (error) {
    return next(boom.internal("Error interno del servidor"));
  }
};

