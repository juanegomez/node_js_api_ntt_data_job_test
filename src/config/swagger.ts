// @ts-ignore
import swaggerJsdoc from "swagger-jsdoc";

const nodeEnv = process.env.NODE_ENV || "development";
const isProduction = nodeEnv === "production";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API NODE JS - Prueba técnica NTT DATA",
      version: "1.0.0",
      description: "Esta API es una prueba técnica para consultar la información de un cliente usando datos mockeados.",
    },
  },
  // Usa .ts en desarrollo y .js en producción
  apis: isProduction
    ? ["./dist/routes/*.js", "./dist/controllers/*.js"]
    : ["./src/routes/*.ts", "./src/controllers/*.ts"],
};

export const swaggerSpec = swaggerJsdoc(options);
