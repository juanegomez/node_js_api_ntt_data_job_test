import app from "./app";
import { PORT } from "./config";

class Server {
  private static instance: Server;

  private constructor() { }

  public static getInstance(): Server {
    if (!Server.instance) {
      Server.instance = new Server();
    }
    return Server.instance;
  }

  public start() {
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en puerto ${PORT}`);
    });
  }
}

Server.getInstance().start();
