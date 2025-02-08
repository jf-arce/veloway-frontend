import axios from "axios";

export class UsuarioService {
    static async regenerateApiKey(): Promise<string> {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/usuarios/regenerate-api-key`, {}, { withCredentials: true });
            return res.data.apiKey;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
            throw new Error("Error al regenerar la clave de la API");
        }
    }
}