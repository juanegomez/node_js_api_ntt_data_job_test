import express from "express";
// @ts-ignore
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";
import clientRoutes from "./routes/client.routes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(express.json());

// Rutas
app.use("/api", clientRoutes);

// Swagger Docs
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middleware global de errores
app.use(errorHandler);

export default app;
