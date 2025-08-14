import request from "supertest";
import app from "../src/app";

describe("GET /api/cliente/:tipoDocumento/:numeroDocumento", () => {
  it("debe retornar 400 si tipoDocumento no es válido", async () => {
    const res = await request(app).get("/api/cliente/X/123");
    expect(res.status).toBe(400);
  });

  it("debe retornar 404 si el cliente no existe", async () => {
    const res = await request(app).get("/api/cliente/C/99999999");
    expect(res.status).toBe(404);
  });

  it("debe retornar 200 con los datos mockeados cuando coincide", async () => {
    const res = await request(app).get("/api/cliente/C/23445322");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("primerNombre", "Juan");
  });
});
