import { Router } from "express";
import { getClientHandler } from "../controllers/client.controller";
import { clientQuerySchema } from "../validators/client.validator";
import Boom from "@hapi/boom";

const router = Router();


/**
 * @swagger
 * /api/cliente/{tipoDocumento}/{numeroDocumento}:
 *   get:
 *     tags:
 *      - Cliente  
 *     summary: Obtener un cliente por tipo y número de documento
 *     parameters:
 *       - in: path
 *         name: tipoDocumento
 *         schema:
 *           type: string
 *           enum: [C, P]
 *         required: true
 *         description: Tipo de documento (C=Cédula, P=Pasaporte)
 *       - in: path
 *         name: numeroDocumento
 *         schema:
 *           type: string
 *         required: true
 *         description: Número de documento del cliente
 *     responses:
 *       200:
 *         description: Cliente encontrado
 *       400:
 *         description: Parámetros inválidos
 *       404:
 *         description: Cliente no encontrado
 */
router.get(
  "/cliente/:tipoDocumento/:numeroDocumento",
  (req, res, next) => {
    const result = clientQuerySchema.safeParse(req.params);

    if (!result.success) {
      return next(Boom.badRequest(result.error.errors[0].message));
    }

    req.params = result.data;
    next();
  },
  getClientHandler
);

export default router;
