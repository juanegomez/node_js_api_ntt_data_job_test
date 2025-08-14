import { mockClient } from "../data/client.mock";

export class ClienteService {
    private static instance: ClienteService;

    public static getInstance(): ClienteService {
        if (!ClienteService.instance) {
            ClienteService.instance = new ClienteService();
        }
        return ClienteService.instance;
    }

    public getClient(tipoDocumento: string, numeroDocumento: string) {
        
        const cliente = mockClient.find(
            c => c.tipoDocumento === tipoDocumento && c.numeroDocumento === numeroDocumento
        );

        if (!cliente) return null;

        return {
            primerNombre: cliente.primerNombre,
            segundoNombre: cliente.segundoNombre,
            primerApellido: cliente.primerApellido,
            segundoApellido: cliente.segundoApellido,
            telefono: cliente.telefono,
            direccion: cliente.direccion,
            ciudad: cliente.ciudad
        };
    }
}
