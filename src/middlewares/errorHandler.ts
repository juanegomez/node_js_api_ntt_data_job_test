import { Request, Response, NextFunction } from "express";
import Boom from "@hapi/boom";

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  if (Boom.isBoom(err)) {
    const { output } = err;
    return res.status(output.statusCode).json(output.payload);
  }

  console.error("Error inesperado:", err);
  return res.status(500).json({
    statusCode: 500,
    error: "Internal Server Error",
    message: "Ocurrió un error inesperado en el servidor",
  });
}
