import { Domicilio } from "@/entities/domicilio";

export class DomiciliosService {
    static async getDomicilioByClienteId(clienteId: string): Promise<Domicilio | undefined> {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/domicilios/usuarioId/${clienteId}`);
            const data = await res.json();
            return data;
        } catch (error) {
            return undefined;
        }
    }
}
